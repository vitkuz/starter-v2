const debug = require('debug')('app:tool.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('tool.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
