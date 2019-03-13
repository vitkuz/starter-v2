const debug = require('debug')('app:session');

module.exports = () => {
  return (req, res, next) => {
    req.session = req.session || {};

    if (!req.session.user) {
      debug('Unauthorised');
    } else {
      debug('Authorized', req.session.user);
    }

    next();
  }
};
