const debug = require('debug')('app:file.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('file.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

