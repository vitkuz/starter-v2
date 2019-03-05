const debug = require('debug')('app:tool.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('tool.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
