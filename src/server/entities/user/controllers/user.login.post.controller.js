const debug = require('debug')('app:user.login.post.controller');

const UserService = require('../../../services/user.service');

module.exports = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const result = await UserService.login({ email, password});

    debug(result);

    if (req.body) {

      req.session.user = req.body;

      // res.redirect('/user/profile');
    } else {
      res.render('user.login.pug', {});
    }
  } catch (e) {
    debug(e);
    next(e);
  }
};
