const express = require('express');
const router = express.Router();

const debug = require('debug')('app:summary.router');

const summaryReadGetController = require('./controllers/summary.read.get.controller');
const summaryCreateGetController = require('./controllers/summary.create.get.controller');

function createRouter() {

  router.get('/summary/:summaryId', summaryReadGetController);
  router.get('/user/add/summary', summaryCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
