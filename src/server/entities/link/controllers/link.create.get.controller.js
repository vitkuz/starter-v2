const debug = require('debug')('app:infographic.create.get');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('infographic.create.get.pug', {});
  } catch (e) {
    debug(e);
  }
};
