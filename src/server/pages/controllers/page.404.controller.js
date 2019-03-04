const debug = require('debug')('app:page.403.controller');

module.exports = async (req, res) => {
  try {
    res.render('page.404.pug');
  } catch (e) {
    debug(e);
  }
};
