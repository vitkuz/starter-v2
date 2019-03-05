const debug = require('debug')('app:article.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('article.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
