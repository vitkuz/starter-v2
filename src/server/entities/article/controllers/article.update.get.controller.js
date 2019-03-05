const debug = require('debug')('app:article.update.get');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('article.update.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
