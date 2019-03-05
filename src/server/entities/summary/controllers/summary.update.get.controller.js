const debug = require('debug')('app:summary.update.get');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('summary.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

