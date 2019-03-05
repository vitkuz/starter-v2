const debug = require('debug')('app:quote.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('quote.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
