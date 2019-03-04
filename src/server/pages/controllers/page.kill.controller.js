const debug = require('debug')('app:page.kill.controller');

module.exports = async (req, res) => {
  try {
    debug('Application was killed');
    process.exit(1);
  } catch (e) {
    debug(e);
  }
};
