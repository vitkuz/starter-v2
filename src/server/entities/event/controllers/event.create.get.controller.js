const debug = require('debug')('app:event.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('event.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
