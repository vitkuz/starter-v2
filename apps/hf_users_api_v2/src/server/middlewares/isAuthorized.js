const CONFIG = require('../setup/config');

module.exports = function isAuthorized() {

  return function(req, res, next) {
    const apiKey = req.query.apiKey;
    if (apiKey === CONFIG.API_AUTH_KEY) {
      next();
    } else {
      return res.send('You didn\'t provided valid auth key');
    }
  }
};
