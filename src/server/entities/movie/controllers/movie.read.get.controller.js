const debug = require('debug')('app:movie.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('movie.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
