const debug = require('debug')('app:link.update.get.controller');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('link.update.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};

