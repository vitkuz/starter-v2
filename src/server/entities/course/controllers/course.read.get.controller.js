const debug = require('debug')('app:course.read.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('course.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
