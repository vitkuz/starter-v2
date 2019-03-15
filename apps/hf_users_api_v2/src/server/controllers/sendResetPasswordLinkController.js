const User = require('../models/User');
const uuid = require('uuid/v1');
const _ = require('lodash');

const { postEvent } = require('../utils/utils');
const { ENV, EMAIL_ADMIN } = require('../setup/config');

// const sendMail = require('../services/sendgrid/sendMail');

async function sendResetPasswordLink(req, res) {
  try {
    const email = req.body.email;

    let foundUser = await User.findOne({email});
    if (!foundUser) return res.status(400).json({
      error: req.getLabel('There is no user with this email')
    });

    const token = uuid();

    foundUser.set({
      tokens: {
        resetPasswordToken: token,
      }
    });

    const updatedUser = await foundUser.save();
    if (!updatedUser) return res.status(400).json({
      error: req.getLabel('Error saving user')
    });

    try {
      postEvent({
        event: 'howfinder_sendRestPasswordEmail',
        date: Date.now(),
        payload: updatedUser
      });

      // sendMail({
      //     key: 'userResetPasswordTemplate',
      //     to: updatedUser.email,
      //     from: EMAIL_ADMIN,
      //     context: {user: updatedUser}
      // });
    } catch (e) {
      console.log(e);
    }

    res.addMessage('success', req.getLabel('We\'ve sent you a letter with reset link'));

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = updatedUser;
    } else {
      user = _.pick(updatedUser, ['_id', 'username', 'email', 'isActive', 'resetPasswordToken']);
    }

    postEvent({
      event: 'howfinder_resetPasswordLinkSent',
      date: Date.now(),
      payload: user
    });

    return res.status(200).json({
      user
    });
  } catch(e) {
    next(e);
  }
};

module.exports = sendResetPasswordLink;
