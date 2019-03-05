const debug = require('debug')('app:movie.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('movie.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

