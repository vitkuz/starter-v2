const debug = require('debug')('app:movie.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('movie.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
