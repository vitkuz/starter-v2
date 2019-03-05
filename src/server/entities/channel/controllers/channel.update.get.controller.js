const debug = require('debug')('app:channel.update.get');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('channel.update.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
