const debug = require('debug')('app:user.password.controller');

const PageModelBuilder = require('../../../builders/page.model.builder');
const getContentService = require('../../../services/getContentService');
const { promiseAll } = require('../../../utils/utils');

const UserService = require('../../../services/user.service');

module.exports = async (req, res) => {
  try {
    const { email } = req.body;

    const result = await UserService.sendResetPasswordLink({ email });

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
