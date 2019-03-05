const debug = require('debug')('app:article.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('article.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
