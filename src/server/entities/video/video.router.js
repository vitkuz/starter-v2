const express = require('express');
const router = express.Router();

const debug = require('debug')('app:video.router');

const videoReadGetController = require('./controllers/video.read.get.controller');
const videoCreateGetController = require('./controllers/video.create.get.controller');

function createRouter() {

  router.get('/video/:videoId', videoReadGetController);
  router.get('/user/add/video', videoCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
