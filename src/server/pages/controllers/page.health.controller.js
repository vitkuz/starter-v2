const debug = require('debug')('app:page.health.controller');

module.exports = async (req, res) => {
  try {
    res.json({
      message: 'App is healthy'
    })
  } catch (e) {
    debug(e);
  }
};
