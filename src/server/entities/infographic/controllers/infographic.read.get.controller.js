const debug = require('debug')('app:infographic.read.get.controller');

const pageModel = require('../../../builders/page.builder');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('infographic.read.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
