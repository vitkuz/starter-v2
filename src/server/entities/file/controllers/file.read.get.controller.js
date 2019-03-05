const debug = require('debug')('app:file.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('file.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
