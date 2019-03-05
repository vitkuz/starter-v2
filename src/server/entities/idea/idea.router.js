const express = require('express');
const router = express.Router();

const debug = require('debug')('app:idea.router');

const ideaReadGetController = require('./controllers/idea.read.get.controller');
const ideaCreateGetController = require('./controllers/idea.create.get.controller');

function createRouter() {

  router.get('/idea/:ideaId', ideaReadGetController);
  router.get('/user/add/idea', ideaCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
