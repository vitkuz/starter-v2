const debug = require('debug')('app:page.500.controller');

const pageModel = require('../../builders/page.builder');

module.exports = async (req, res) => {
  try {

    const page = { readMenuArr,
      createMenuArr,
      updateMenuArr,
      listsMenuArr };

    res.render('page.home.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
