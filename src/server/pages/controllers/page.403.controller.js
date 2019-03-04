const debug = require('debug')('app:page.404.controller');

module.exports = async (req, res) => {
  try {
    res.render('page.403.pug');
  } catch (e) {
    debug(e);
  }
};
