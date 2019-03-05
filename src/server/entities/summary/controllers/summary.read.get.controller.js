const debug = require('debug')('app:summary.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('summary.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
