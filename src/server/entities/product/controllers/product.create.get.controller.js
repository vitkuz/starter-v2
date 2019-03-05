const debug = require('debug')('app:product.create.get');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('product.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
