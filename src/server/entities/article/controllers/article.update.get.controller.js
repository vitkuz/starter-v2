const debug = require('debug')('app:article.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('article.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
