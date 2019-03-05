const debug = require('debug')('app:event.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('event.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
