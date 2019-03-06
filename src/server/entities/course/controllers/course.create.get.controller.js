const debug = require('debug')('app:course.create.post.controller');

const PageModelBuilder = require('../../../builders/page.model.builder');

module.exports = async (req, res) => {
  try {
    const pageModel = new PageModelBuilder(req).build();
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('course.create.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
