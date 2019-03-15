const _ = require('lodash');
const User = require('../models/User');

const { postEvent } = require('../utils/utils');
const CONFIG = require('../setup/config');

async function verifyUserEmailController(req,res) {
  try {
    //1 Check user exists, if exist send error
    const activationToken = req.body.activationToken;
    // if (!activationToken) return res.status(400).json({error: req.getLabel('Provide token')});

    const foundUser = await User.findOne({'tokens.activationToken':activationToken});
    if (!foundUser) return res.status(400).json({error: req.getLabel('User with this token not found')});

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
    if (!updatedUser) return res.status(400).json({error: req.getLabel('Error saving user')});

    res.addMessage('success', req.getLabel('Email was verified. Now you can login'));

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = updatedUser;
    } else {
      user = _.pick(updatedUser, ['_id', 'username', 'email', 'isActive']);
    }

    postEvent({
      event: 'howfinder_userVerifiedEmail',
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

module.exports = verifyUserEmailController;
