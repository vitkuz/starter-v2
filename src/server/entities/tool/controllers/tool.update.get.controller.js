const debug = require('debug')('app:tool.update.get');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('tool.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

