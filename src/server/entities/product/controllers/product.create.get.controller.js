const debug = require('debug')('app:product.create.get');

const PageModelBuilder = require('../../../builders/page.model.builder');

module.exports = async (req, res) => {
  try {
    const pageModel = new PageModelBuilder(req).build();
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('product.create.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
