const express = require('express');
const router = express.Router();

const debug = require('debug')('app:article.router');

const articleReadGetController = require('./controllers/article.read.get.controller');
const articleCreateGetController = require('./controllers/article.create.get.controller');

function createRouter() {

  router.get('/article/:articleId', articleReadGetController);
  router.get('/user/add/article', articleCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
