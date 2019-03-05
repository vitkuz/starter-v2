const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:link.router');

const toolReadGetController = require('./controllers/tool.read.get.controller');
const toolCreateGetController = require('./controllers/tool.create.get.controller');

function createRouter() {

  router.get('/tool/:toolId', toolReadGetController);
  router.get('/user/create/tool', toolCreateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
