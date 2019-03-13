const uuid = require('uuid/v1');

module.exports = () => {
  return (req, res, next) => {
    req.session = req.session || {};

    if (!req.session.uuid) {
      req.session.uuid = uuid();
    }

    next();
  }
};
