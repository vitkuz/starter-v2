const debug = require('debug')('app:user.register.controller');

const userService = require('../../../services/user.service');

module.exports = async (req, res) => {
  try {

    const { username, email, password, password2 } = req.body;

    const result = await userService.register({ username, email, password, password2 });

    return res.json(result.data);
  } catch (e) {
    debug(e);
    const data = e.response.data;
    return res.status(e.response.status).json(data);
  }
};
