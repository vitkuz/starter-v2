const express = require('express');
const router = express.Router();

const debug = require('debug')('app:event.router');

const eventReadGetController = require('./controllers/event.read.get.controller');
const eventCreateGetController = require('./controllers/event.create.get.controller');

function createRouter() {

  router.get('/event/:eventId', eventReadGetController);
  router.get('/user/add/event', eventCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
