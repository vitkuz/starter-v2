const debug = require('debug')('app:user.controller');

const PageModelBuilder = require('../../../builders/page.model.builder');
const getContentService = require('../../../services/getContentService');
const { promiseAll } = require('../../../utils/utils');

module.exports = async (req, res) => {
  try {
    const pageModel = new PageModelBuilder(req)
      .build();

    // debug(pageModel);

    res.render('user.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};

