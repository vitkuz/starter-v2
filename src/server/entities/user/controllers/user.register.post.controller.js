const debug = require('debug')('app:user.register.controller');

const userService = require('../../../services/user.service');

module.exports = async (req, res) => {
  try {

    const { username, email, password, password2 } = req.body;

    const { user, messages } = await userService.register(username, email, password, password2);


    debug(user);

    if (user) {

      req.session.user = user;

      res.render('user.register.success.pug', pageModel);
    } else {
      res.render('user.register.pug', pageModel);
    }
  } catch (e) {
    debug(e);
  }
};
