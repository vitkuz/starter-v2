const express = require('express');
const router = express.Router();const CONFIG = require('../../setup/config');
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:article.router');

const articleReadGetController = require('./controllers/article.read.get.controller');
const articleCreateGetController = require('./controllers/article.create.get.controller');

function createRouter() {

  router.get('/article/:articleId', articleReadGetController);
  router.get('/user/add/article', articleCreateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
