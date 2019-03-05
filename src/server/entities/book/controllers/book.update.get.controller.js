const debug = require('debug')('app:book.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('book.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
