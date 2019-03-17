const debug = require('debug')('app:session');

module.exports = () => {
  return (req, res, next) => {
    req.session = req.session || {};

    if (!req.session.user) {
      debug('Unauthorised');
    } else {
      debug('Authorized', req.session.user);
    }

    req.session.visits = req.session.visits ? req.session.visits + 1 : 1;

    //req.session.resetPasswordAttempts = req.session.resetPasswordAttempts ? req.session.resetPasswordAttempts + 1 : 1;

    next();
  }
};
