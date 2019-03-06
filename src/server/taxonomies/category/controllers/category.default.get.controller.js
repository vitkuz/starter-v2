const debug = require('debug')('app:category.default.get.controller');

const pageModelBuilder = require('../../../builders/page.model.builder');

module.exports = async (req, res) => {
  try {
    const pageModel = new PageModelBuilder(req).build();
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('category.default.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
