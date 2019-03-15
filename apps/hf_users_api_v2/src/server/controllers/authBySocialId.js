const User = require('../models/User');
const _ = require('lodash');
const { postEvent } = require('../utils/utils');

const CONFIG = require('../setup/config');

async function authBySocialId(req, res) {
  try {
    const { provider, id, profile } = req.body;

    const foundOrCreatedUser = await User.findOrCreate(provider, id, profile);

    const jwtToken = foundOrCreatedUser.generateToken();

    res.header('x-auth', jwtToken);
    res.cookie('_jwt',jwtToken, { maxAge: 900000, httpOnly: true });

    res.addMessage('success', req.getLabel('You have successfully login'));

    let user;

    if (CONFIG.NODE_ENV === 'development') {
      user = foundOrCreatedUser;
    } else {
      user = _.pick(foundOrCreatedUser, ['_id','username','email','limits','roles','_jwt']);
    }

    postEvent({
      event: 'howfinder_userAuthBySocial',
      date: Date.now(),
      payload: user
    });

    res.status(200).json({
      user,
      jwtToken
    });
  } catch(e) {
    next(e);
  }
};

module.exports = authBySocialId;
