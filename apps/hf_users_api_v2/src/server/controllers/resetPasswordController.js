const User = require('../models/User');
const hashUserPassword = require('../utils/hashUserPassword');
const _ = require('lodash');
// const { postEvent } = require('../utils/utils');
const CONFIG = require('../setup/config');

async function resetPasswordController(req,res,next) {
  try {
    const resetPasswordToken = req.body.resetPasswordToken;
    const password = req.body.password;
    const password2 = req.body.password2;

    if (!password || !password2) {
      return res.status(400).json({
        error: req.getLabel('you.didnt.provide.password.field', req.lang)
      });
    }

    if (password && password2 && password !== password2) {
      return res.status(400).json({
        error: req.getLabel('password.fields.not.equal', req.lang)
      });
    }

    if (!resetPasswordToken) {
      return res.status(400).json({
        error: req.getLabel('you.didnt.provide.password.reset.token', req.lang)
      });
    }


    const foundUser = await User.findOne({'tokens.resetPasswordToken':resetPasswordToken});
    if (!foundUser) {
      return res.status(400).json({
        error: req.getLabel('user.with.this.token.not.found', req.lang)
      });
    }

    const hashedPassword = await hashUserPassword(password);

    foundUser.set({
      tokens: {
        resetPasswordToken: '',
      },
      password: hashedPassword,
      isActive: true
    });

    const updatedUser = await foundUser.save();
    if (!updatedUser) return res.status(400).json({
      error: req.getLabel('error.saving.user')
    });

    res.addMessage('success', req.getLabel('your.password.was.successfully.changed', req.lang));

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = updatedUser;
    } else {
      user = _.pick(updatedUser, ['_id', 'username', 'email', 'isActive']);
    }

    // postEvent({
    //   event: 'howfinder_paswordReseted',
    //   date: Date.now(),
    //   payload: user
    // });

    return res.status(200).json(
      user
    );
  } catch(e) {
    next(e);
  }
};

module.exports = resetPasswordController;
