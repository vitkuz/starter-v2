const debug = require('debug')('app:user.password.controller');

const PageModelBuilder = require('../../../builders/page.model.builder');
const getContentService = require('../../../services/getContentService');
const { promiseAll } = require('../../../utils/utils');


module.exports = async (req, res) => {
  try {

    const { resetPasswordToken } = req.params;

    // const result = await UserService.getUserByResetPasswordToken({resetPasswordToken});

    const pageModel = new PageModelBuilder(req)
      .build();

    pageModel.resetPasswordToken = resetPasswordToken;

    res.render('user.password.reset.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
