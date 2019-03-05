const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:movie.router');

const movieReadGetController = require('./controllers/movie.read.get.controller');
const movieCreateGetController = require('./controllers/movie.create.get.controller');

function createRouter() {

  router.get('/movie/:movieId', movieReadGetController);
  router.get('/user/create/movie', movieCreateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
