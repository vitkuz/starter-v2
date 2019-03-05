const debug = require('debug')('app:link.update.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('link.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

