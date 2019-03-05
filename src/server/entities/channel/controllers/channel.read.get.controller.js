const debug = require('debug')('app:channel.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('channel.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
