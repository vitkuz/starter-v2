const express = require('express');
const router = express.Router();

const debug = require('debug')('app:movie.router');

const movieReadGetController = require('./controllers/movie.read.get.controller');
const movieCreateGetController = require('./controllers/movie.create.get.controller');

function createRouter() {

  router.get('/movie/:movieId', movieReadGetController);
  router.get('/user/add/movie', movieCreateGetController);

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
