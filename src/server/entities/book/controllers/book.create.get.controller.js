const debug = require('debug')('app:book.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('book.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
