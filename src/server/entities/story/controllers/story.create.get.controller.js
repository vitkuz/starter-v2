const debug = require('debug')('app:story.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('story.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
