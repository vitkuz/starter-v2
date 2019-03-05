const express = require('express');
const router = express.Router();

const debug = require('debug')('app:file.router');

const fileReadGetController = require('./controllers/file.read.get.controller');
const fileCreateGetController = require('./controllers/file.create.get.controller');

function createRouter() {

  router.get('/file/:fileId', fileReadGetController);
  router.get('/user/add/file', fileCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
