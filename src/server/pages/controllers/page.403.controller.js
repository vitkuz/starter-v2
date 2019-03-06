const debug = require('debug')('app:page.404.controller');

const PageModelBuilder = require('../../builders/page.model.builder');

module.exports = async (req, res) => {
  try {
    const pageModel = new PageModelBuilder(req).build();
    res.render('page.403.pug');
  } catch (e) {
    debug(e);
  }
};
