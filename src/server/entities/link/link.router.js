const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:link.router');

const linkReadGetController = require('./controllers/link.read.get.controller');
const linkCreateGetController = require('./controllers/link.create.get.controller');
const linkUpdateGetController = require('./controllers/link.update.get.controller');

function createRouter() {

  router.get('/link/:linkId', linkReadGetController);
  router.get('/user/create/link', linkCreateGetController);
  router.get('/user/update/link/:linkId', linkUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
