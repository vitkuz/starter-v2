const _ = require('lodash');
const User = require('../models/User');

// const { postEvent } = require('../utils/utils');
const CONFIG = require('../setup/config');

async function verifyUserEmailController(req,res,next) {
  try {
    //1 Check user exists, if exist send error
    const { activationToken } = req.body;
    if (!activationToken) {
      return res.status(400).json({error: req.getLabel('provide.token', req.lang)});
    }

    const foundUser = await User.findOne({ 'tokens.activationToken': activationToken });
    if (!foundUser) {
      return res.status(400).json({ error: req.getLabel('user.with.this.token.not.found', req.lang) });
    }

    foundUser.set({
      activated: Date.now(),
      tokens: {
        activationToken: '',
      },
      status: {
        isActive: true
      }
    });

    const updatedUser = await foundUser.save();
    if (!updatedUser) {
      return res.status(400).json({error: req.getLabel('error.saving.user', req.lang)});
    }

    res.addMessage('success', req.getLabel('email.was.verified', req.lang));

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = updatedUser;
    } else {
      user = _.pick(updatedUser, ['_id', 'username', 'email', 'isActive']);
    }

    // postEvent({
    //   event: 'howfinder_userVerifiedEmail',
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

module.exports = verifyUserEmailController;
