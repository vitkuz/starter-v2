const debug = require('debug')('app:channel.read.get.controller');

const PageModelBuilder = require('../../../builders/page.model.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('channel.read.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
