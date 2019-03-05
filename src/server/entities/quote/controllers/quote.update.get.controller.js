const debug = require('debug')('app:quote.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('quote.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

