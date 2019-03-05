const debug = require('debug')('app:user.edit.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('user.edit.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
