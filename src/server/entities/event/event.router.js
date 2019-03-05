const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:event.router');

const eventReadGetController = require('./controllers/event.read.get.controller');
const eventCreateGetController = require('./controllers/event.create.get.controller');
const eventUpdateGetController = require('./controllers/event.update.get.controller');

function createRouter() {

  router.get('/event/:eventId', eventReadGetController);
  router.get('/user/create/event', eventCreateGetController);
  router.get('/user/update/event/:eventId', eventUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
