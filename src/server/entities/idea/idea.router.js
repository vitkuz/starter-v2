const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:idea.router');

const ideaReadGetController = require('./controllers/idea.read.get.controller');
const ideaCreateGetController = require('./controllers/idea.create.get.controller');

function createRouter() {

  router.get('/idea/:ideaId', ideaReadGetController);
  router.get('/user/add/idea', ideaCreateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
