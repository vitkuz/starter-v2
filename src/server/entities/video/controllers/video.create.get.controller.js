const debug = require('debug')('app:video.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('video.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
