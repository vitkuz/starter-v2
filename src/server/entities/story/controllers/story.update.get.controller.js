const debug = require('debug')('app:story.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('story.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
