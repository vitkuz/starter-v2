const User = require('../models/User');
const { postEvent } = require('../utils/utils');
// const CONFIG = require('../setup/config');
const CONFIG = require('../setup/config');

async function deleteUserController(req,res) {
  try {
    const id = req.params.id;

    const deletedUser = await User.findOneAndDelete({_id: id});
    if (!deletedUser) {
      return res.status(400).json({error: req.getLabel('User not found')});
    }

    res.addMessage('success', req.getLabel('User was deleted'));

    let user;

    if (CONFIG.NODE_CONFIG.NODE_ENV === 'development') {
      user = deletedUser;
    } else {
      user = _.pick(deletedUser, ['_id','username','email','limits']);
    }

    postEvent({
      event: 'howfinder_userDeleted',
      date: Date.now(),
      payload: user
    });

    res.status(200).json({
      user
    });
  } catch(e) {
    next(e);
  }
}

module.exports = deleteUserController;
