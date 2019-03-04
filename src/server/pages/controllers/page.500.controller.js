const debug = require('debug')('app:page.500.controller');

module.exports = async (req, res) => {
  try {
    res.render('page.500.pug');
  } catch (e) {
    debug(e);
  }
};
