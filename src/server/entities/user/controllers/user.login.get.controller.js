const debug = require('debug')('app:user.login.get.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    return res.render('user.login.pug', {});
  } catch (e) {
    debug(e);
  }
};
