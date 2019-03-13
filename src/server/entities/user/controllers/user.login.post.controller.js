const debug = require('debug')('app:user.login.post.controller');

module.exports = async (req, res) => {
  try {

    const { email, password } = req.body;

    debug({
      query: req.query,
      params: req.params,
      body: req.body,
    });

    if (req.body) {

      req.session.user = req.body;

      // res.redirect('/user/profile');
    } else {
      res.render('user.login.pug', {});
    }
  } catch (e) {
    debug(e);
  }
};
