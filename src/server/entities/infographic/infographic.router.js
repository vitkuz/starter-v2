const express = require('express');
const router = express.Router();

const debug = require('debug')('app:infographic.router');

const infographicReadGetController = require('./controllers/infographic.read.get.controller');
const infographicCreateGetController = require('./controllers/infographic.create.get.controller');

function createRouter() {

  router.get('/infographic/:infographicId', infographicReadGetController);
  router.get('/user/add/infographic', infographicCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
