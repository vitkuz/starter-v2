const debug = require('debug')('app:session');
const UserService = require('../services/user.service')

module.exports = () => {
  return async (req, res, next) => {
    req.session = req.session || {};

    if (!req.session.user) {
      debug('Unauthorised');
    } else {
      debug('Authorized', req.session.user);
      try {
        const { data } = await UserService.getUserById(req.session.user._id);
        const { user } = data;
        req.user = user;
        res.locals.user = user;
        debug('Loaded user', user);
      } catch (e) {
        debug('cant load user')
      }
    }

    req.session.visits = req.session.visits ? req.session.visits + 1 : 1;

    //req.session.resetPasswordAttempts = req.session.resetPasswordAttempts ? req.session.resetPasswordAttempts + 1 : 1;

    next();
  }
};
