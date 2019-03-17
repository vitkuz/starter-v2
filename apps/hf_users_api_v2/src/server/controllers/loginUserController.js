const User = require('../models/User');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const debug = require('debug');

// const { postEvent } = require('../utils/utils');
const CONFIG = require('../setup/config');


async function loginUserController(req,res) {
    try {

      debug(req.body);

      const email = req.body.email;
      const password = req.body.password;

      let foundUser = await User.findOne({email});
      if (!foundUser) {
        return res.status(400).json({
          error: req.getLabel('incorrect.username.or.password', req.lang)
        });
      }

      const passwordsIsEqual = await bcrypt.compare(password, foundUser.password);
      if (!passwordsIsEqual) {
        return res.status(400).json({
          error: req.getLabel('incorrect.username.or.password', req.lang)
        });
      }

      if (CONFIG.VERIFY_USERS) {
        if (!foundUser.status.isActive) {
          return res.status(400).json({
            error: req.getLabel('user.is.not.active.please.verify.your.email', req.lang)
          })
        };
      }

      const jwtToken = foundUser.generateToken();

      res.header('x-auth', jwtToken);
      res.cookie('_jwt',jwtToken, { maxAge: 900000, httpOnly: true });

      res.addMessage('success', req.getLabel('you.have.successfully.login', req.lang));

      let user;

      if (CONFIG.NODE_ENV === 'development') {
        user = foundUser;
      } else {
        user = _.pick(foundUser, ['_id','username','email','limits']);
      }

      // postEvent({
      //   event: 'howfinder_userLogin',
      //   date: Date.now(),
      //   payload: user
      // });

      res.status(200).json({
        user,
        jwtToken
      });

    } catch (e) {
      debug(e);
      next(e);
    }
};

module.exports = loginUserController;
