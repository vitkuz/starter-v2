const debug = require('debug')('app:user.register.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('user.register.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
