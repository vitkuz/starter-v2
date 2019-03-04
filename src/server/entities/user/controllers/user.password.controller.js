const debug = require('debug')('app:user.password.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('user.password.pug', {});
  } catch (e) {
    debug(e);
  }
};
