const debug = require('debug')('app:category.default.get.controller');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('category.default.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
