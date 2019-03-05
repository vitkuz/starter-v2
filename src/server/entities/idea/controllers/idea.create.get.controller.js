const debug = require('debug')('app:file.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('idea.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
