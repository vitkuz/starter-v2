const debug = require('debug')('app:infographic.update.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('infographic.update.get.pug', {});
  } catch (e) {
    debug(e);
  }
};

