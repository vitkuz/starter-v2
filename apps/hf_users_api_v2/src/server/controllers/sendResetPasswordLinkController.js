const User = require('../models/User');
const uuid = require('uuid/v1');
const _ = require('lodash');
const debug = require('debug')('app:sendResetPasswordLinkController');

// const { postEvent } = require('../utils/utils');
const CONFIG = require('../setup/config');

// const sendMail = require('../services/sendgrid/sendMail');

async function sendResetPasswordLink(req, res, next) {
  try {
    const email = req.body.email;

    let foundUser = await User.findOne({email});
    if (!foundUser) {
      return res.status(400).json({
        error: req.getLabel('there.is.no.user.with.this.email', req.lang)
      });
    }

    const token = uuid();

    foundUser.set({
      tokens: {
        resetPasswordToken: token,
      }
    });

    const updatedUser = await foundUser.save();
    if (!updatedUser) {
      return res.status(400).json({
        error: req.getLabel('error.saving.user', req.lang)
      });
    }

    try {
      // postEvent({
      //   event: 'howfinder_sendRestPasswordEmail',
      //   date: Date.now(),
      //   payload: updatedUser
      // });

      // sendMail({
      //     key: 'userResetPasswordTemplate',
      //     to: updatedUser.email,
      //     from: EMAIL_ADMIN,
      //     context: {user: updatedUser}
      // });
    } catch (e) {
      console.log(e);
    }

    res.addMessage('success', req.getLabel('we.sent.you.letter.with.reset.link', req.lang));
    res.addMessage('info', token);

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = updatedUser;
    } else {
      user = _.pick(updatedUser, ['_id', 'username', 'email', 'isActive', 'resetPasswordToken']);
    }

    // postEvent({
    //   event: 'howfinder_resetPasswordLinkSent',
    //   date: Date.now(),
    //   payload: user
    // });

    return res.status(200).json({
      user
    });
  } catch(e) {
    next(e);
  }
};

module.exports = sendResetPasswordLink;
