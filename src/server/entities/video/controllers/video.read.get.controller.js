const debug = require('debug')('app:video.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('video.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
