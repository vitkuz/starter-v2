const express = require('express');
const router = express.Router();

const debug = require('debug')('app:category.router');

const { menu } = require('../../data/categoriesMenu');
const categoryDefaultGetController = require('./controllers/category.default.get.controller');

const override = { }; // key value overrides

function createRouter() {

  for(let menuItem of menu) {
    const controller = override[menuItem.href] ? override[menuItem.href] : categoryDefaultGetController;
    router.get(menuItem.href, controller)
  }

  if (process.env.NODE_ENV === 'development') {

  }

  if (process.env.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
