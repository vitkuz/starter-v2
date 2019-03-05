const debug = require('debug')('app:idea.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('idea.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
