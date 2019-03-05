const debug = require('debug')('app:quote.create.get');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('quote.create.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
