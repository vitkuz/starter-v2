const debug = require('debug')('app:product.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('product.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

