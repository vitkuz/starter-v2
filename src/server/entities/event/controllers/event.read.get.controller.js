const debug = require('debug')('app:event.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('event.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
