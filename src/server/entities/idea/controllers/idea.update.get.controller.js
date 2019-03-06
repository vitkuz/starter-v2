const debug = require('debug')('app:idea.update.get');

const PageModelBuilder = require('../../../builders/page.model.builder');

module.exports = async (req, res) => {
  try {
    const pageModel = new PageModelBuilder(req).build();
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('idea.update.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};

