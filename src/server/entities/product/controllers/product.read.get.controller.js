const debug = require('debug')('app:product.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('product.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
