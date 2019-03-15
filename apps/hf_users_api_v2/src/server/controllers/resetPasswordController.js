const User = require('../models/User');
const hashUserPassword = require('../utils/hashUserPassword');
const _ = require('lodash');
const { postEvent } = require('../utils/utils');
const CONFIG = require('../setup/config');

async function resetPasswordController(req,res) {
  try {
    const resetPasswordToken = req.body.resetPasswordToken;
    const password = req.body.password;

    const hashedPassword = await hashUserPassword(password);

    const foundUser = await User.findOne({'tokens.resetPasswordToken':resetPasswordToken});
    if (!foundUser) return res.status(400).json({
      error: req.getLabel('User with this token not found')
    });

    foundUser.set({
      tokens: {
        resetPasswordToken: '',
      },
      password: hashedPassword,
      isActive: true
    });

    const updatedUser = await foundUser.save();
    if (!updatedUser) return res.status(400).json({
      error: req.getLabel('Error saving user')
    });

    res.addMessage('success', req.getLabel('Your password was successfully changed'));

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = updatedUser;
    } else {
      user = _.pick(updatedUser, ['_id', 'username', 'email', 'isActive']);
    }

    postEvent({
      event: 'howfinder_paswordReseted',
      date: Date.now(),
      payload: user
    });

    return res.status(200).json(
      user
    );
  } catch(e) {
    next(e);
  }
};

module.exports = resetPasswordController;
