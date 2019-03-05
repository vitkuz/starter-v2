const debug = require('debug')('app:book.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('book.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
