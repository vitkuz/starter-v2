const debug = require('debug')('app:users.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('users.pug', {});
  } catch (e) {
    debug(e);
  }
};

