const debug = require('debug')('app:channel.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('channel.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
