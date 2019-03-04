const debug = require('debug')('app:user.activation.controller');

module.exports = async (req, res) => {

  const { verificationKey } = req.params;
  debug(verificationKey);

  try {
    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);

    if (verificationKey) {
      res.render('user.verify.success.pug', {});
    } else {
      res.render('user.verify.fail.pug', {});
    }
  } catch (e) {
    debug(e);
  }
};
