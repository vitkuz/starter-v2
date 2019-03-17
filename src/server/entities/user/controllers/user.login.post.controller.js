const debug = require('debug')('app:user.login.post.controller');

const UserService = require('../../../services/user.service');

module.exports = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const result = await UserService.login({ email, password});

    debug(result.data);

    req.session.user = result.data.user;

    res.json(result.data);

  } catch (e) {
    debug(e);
    const data = e.response.data;
    return res.status(e.response.status).json(data);

    // next(e);
  }
};
