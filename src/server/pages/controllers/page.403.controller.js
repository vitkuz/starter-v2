const debug = require('debug')('app:page.404.controller');

const pageModel = require('../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    res.render('page.403.pug');
  } catch (e) {
    debug(e);
  }
};
