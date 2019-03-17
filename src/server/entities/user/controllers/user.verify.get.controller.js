const debug = require('debug')('app:user.activation.controller');

const PageModelBuilder = require('../../../builders/page.model.builder');
const UserService = require('../../../services/user.service');

module.exports = async (req, res) => {
  const pageModel = new PageModelBuilder(req)
    .build();

  const { activationToken } = req.params;

  try {

    const result = await UserService.verifyEmail({ activationToken });
    debug(result);

    const successMessage = result.data.messages.success[0];
    pageModel.successMessage = successMessage;
    res.render('user.verify.success.pug', pageModel);
  } catch (e) {
    debug(e);
    const errorMessage = e.response.data.error;
    pageModel.errorMessage = errorMessage;
    res.render('user.verify.fail.pug', pageModel);
  }
};
