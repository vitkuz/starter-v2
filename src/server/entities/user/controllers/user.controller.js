const debug = require('debug')('app:user.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('user.pug', {});
  } catch (e) {
    debug(e);
  }
};

