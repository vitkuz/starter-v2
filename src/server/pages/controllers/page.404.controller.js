const debug = require('debug')('app:page.403.controller');

const pageModel = require('../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    res.render('page.404.pug');
  } catch (e) {
    debug(e);
  }
};
