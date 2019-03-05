const debug = require('debug')('app:video.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('video.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

