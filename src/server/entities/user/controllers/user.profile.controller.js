const debug = require('debug')('app:user.profile.controller');

module.exports = async (req, res) => {
  try {

    if (req.session.user) {
      res.render('user.profile.pug', {});
    } else {
      res.redirect('/user/login')
    }

    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);

  } catch (e) {
    debug(e);
  }
};
