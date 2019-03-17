const express = require('express');
const router = express.Router();const CONFIG = require('../../setup/config');

const debug = require('debug')('app:user.router');

const { sanitizeBody } = require('express-validator/filter');

const userController = require('./controllers/user.controller');
const userLoginGetController = require('./controllers/user.login.get.controller');
const userLoginPostController = require('./controllers/user.login.post.controller');
const userRegisterGetController = require('./controllers/user.register.get.controller');
const userRegisterPostController = require('./controllers/user.register.post.controller');

const userVerificationGetController = require('./controllers/user.verify.get.controller');

const userPasswordGetController = require('./controllers/user.password.get.controller');
const userPasswordPostController = require('./controllers/user.password.post.controller');

const userPasswordResetGetController = require('./controllers/user.password.reset.get.controller');
const userPasswordResetPostController = require('./controllers/user.password.reset.post.controller');

const userProfileController = require('./controllers/user.profile.controller');
const userEditController = require('./controllers/user.edit.controller');

const usersController = require('./controllers/users.controller');

const userCreateController = require('./controllers/user.create.controller');
const userUpdateController = require('./controllers/user.update.controller');
const userDeleteController = require('./controllers/user.delete.controller');

function createRouter() {
  router.get('/user/login', userLoginGetController);
  router.post('/user/login',
    sanitizeBody(['username', 'email'])
      .trim().escape(),
    userLoginPostController);

  router.get('/user/register', userRegisterGetController);
  router.post('/user/register',
    sanitizeBody(['username', 'email'])
      .trim().escape(),
    userRegisterPostController);

  router.get('/user/verify/:activationToken',
    userVerificationGetController);

  router.get('/user/password', userPasswordGetController);
  router.post('/user/password', userPasswordPostController);

  router.get('/user/password/reset/:resetPasswordToken', userPasswordResetGetController);
  router.post('/user/password/reset', userPasswordResetPostController);

  router.get('/user/profile', userProfileController);
  router.get('/user/edit', userEditController);

  router.get('/users/', usersController);
  router.get('/user', userController);
  router.get('/user/:userId', userController);

  router.post('/user', userCreateController);
  router.put('/user', userUpdateController);
  router.delete('/user', userDeleteController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
