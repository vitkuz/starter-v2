const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:article.router');

const articleReadGetController = require('./controllers/article.read.get.controller');
const articleCreateGetController = require('./controllers/article.create.get.controller');
const articleUpdateGetController = require('./controllers/article.update.get.controller');

function createRouter() {

  router.get('/article/:articleId', articleReadGetController);
  router.get('/user/create/article', articleCreateGetController);
  router.get('/user/edit/article/:articleId', articleUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
