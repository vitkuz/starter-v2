const debug = require('debug')('app:user.password.reset.post.controller');

const UserService = require('../../../services/user.service');

module.exports = async (req, res, next) => {
  try {
    const { resetPasswordToken, password, password2 } = req.body;

    const result = await UserService.resetPassword({ resetPasswordToken, password, password2 });

    debug(result.data);

    res.json(result.data);

  } catch (e) {
    debug(e);
    const data = e.response.data;
    return res.status(e.response.status).json(data);

    // next(e);
  }
};
