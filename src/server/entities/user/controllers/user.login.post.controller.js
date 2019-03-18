const debug = require('debug')('app:user.login.post.controller');
const _ = require('lodash');

const UserService = require('../../../services/user.service');

module.exports = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const { data } = await UserService.login({ email, password});
    const { user } = data;
    debug(data);

    req.session.user = _.pick(user, ['_id','username','email','limits']);;

    res.json(data);

  } catch (e) {
    debug(e);
    const data = e.response.data;
    return res.status(e.response.status).json(data);

    // next(e);
  }
};
