const debug = require('debug')('app:course.create.post.controller');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('course.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
