const debug = require('debug')('app:tool.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('tool.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

