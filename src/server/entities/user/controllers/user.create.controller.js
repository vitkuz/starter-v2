const debug = require('debug')('app:user.create.controller');

module.exports = async (req, res) => {
  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);

    debug({
      query: req.query,
      params: req.params,
      body: req.body,
    });

    res.json({
      query: req.query,
      params: req.params,
      body: req.body,
    });
    // res.render('user.edit.info.pug', {});
  } catch (e) {
    debug(e);
  }
};
