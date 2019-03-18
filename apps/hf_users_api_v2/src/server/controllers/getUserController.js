const User = require('../models/User');
const _ = require('lodash');
const CONFIG = require('../setup/config');
// const { postEvent } = require('../utils/utils');


async function getUserController(req,res,next) {
  try {
    const { userId } = req.params;

    let foundUser = await User.findById(userId);
    if (!foundUser) {
      return res.status(400).json({
        error: req.getLabel('User not found')
      });
    }

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = foundUser;
    } else {
      user = _.pick(foundUser, ['_id','username','email','limits']);
    }

    // postEvent({
    //   event: 'howfinder_userGet',
    //   date: Date.now(),
    //   payload: user
    // });

    res.status(200).json({
      user
    });
  } catch(e) {
    next(e);
  }
};

module.exports = getUserController;
