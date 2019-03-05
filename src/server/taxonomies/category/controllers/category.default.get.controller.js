const debug = require('debug')('app:category.default.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('category.default.pug', {});
  } catch (e) {
    debug(e);
  }
};
