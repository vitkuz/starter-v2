const uuid = require('uuid/v1');
const _ = require('lodash');
const debug = require('debug')('app:registerUserController');

const User = require('../models/User');
const hashUserPassword = require('../utils/hashUserPassword');

const { postEvent } = require('../utils/utils');
const CONFIG = require('../setup/config');

// const sendMail = require('../services/sendgrid/sendMail');

async function registerUserController(req, res, next) {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    debug(req.body);

    let foundUser = await User.findOne({email});
    if (foundUser) return res.status(400).json({
      error: req.getLabel('user.with.this.email.already.exists', req.lang)
    });
    foundUser = await User.findOne({username});
    if (foundUser) return res.status(400).json({
      error: req.getLabel('user.with.this.username.already.exists', req.lang)
    });

    const hashedPassword = await hashUserPassword(password);
    const token = uuid();

    const newUser = new User({
      username,
      email,
      roles: ['member'],
      isActive: !CONFIG.VERIFY_USERS,
      password: hashedPassword,
      tokens: {
        activationToken: token
      }
    });

    const createdUser = await newUser.save();
    if (!createdUser) return res.status(400).json({
      error: req.getLabel('error.saving.user', req.lang)
    });

    if (CONFIG.VERIFY_USERS) {
      res.addMessage('info', req.getLabel('please.verify.your.email'), req.lang);

      try {
        postEvent({
          event: 'howfinder_sendEmailVerification',
          date: new Date.now(),
          payload: createdUser
        });
      } catch (e) {
        debug(e);
        console.log(e);
      }
    }

    res.addMessage('success', req.getLabel('you.successfully.registered', req.lang));

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = createdUser;
    } else {
      user = _.pick(createdUser, ['_id', 'username', 'email', 'isActive', 'activationToken'])
    }

    postEvent({
      event: 'howfinder_userRegistered',
      date: Date.now(),
      payload: user
    });

    res.status(200).json({
      user
    });
  } catch(e) {
    debug(e);
    next(e);
  }
};

module.exports = registerUserController;
