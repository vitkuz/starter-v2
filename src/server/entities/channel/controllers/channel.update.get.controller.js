const debug = require('debug')('app:channel.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('channel.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
