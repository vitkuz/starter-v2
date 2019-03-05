const debug = require('debug')('app:summary.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('summary.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
