const debug = require('debug')('app:book.read.get.controller');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('book.read.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
