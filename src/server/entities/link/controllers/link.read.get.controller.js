const debug = require('debug')('app:link.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('link.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};