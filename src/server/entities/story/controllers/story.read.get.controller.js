const debug = require('debug')('app:story.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('story.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};