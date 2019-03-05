const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:file.router');

const fileReadGetController = require('./controllers/file.read.get.controller');
const fileCreateGetController = require('./controllers/file.create.get.controller');
const fileUpdateGetController = require('./controllers/file.update.get.controller');

function createRouter() {

  router.get('/file/:fileId', fileReadGetController);
  router.get('/user/create/file', fileCreateGetController);
  router.get('/user/update/file/:fileId', fileUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
