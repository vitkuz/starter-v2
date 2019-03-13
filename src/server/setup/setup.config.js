const path = require('path');
const express = require('express');

const debug = require('debug')('app:setup.config');

function setupConfig(app) {

  app.enable('trust proxy', 1);

  const staticPath = path.join(__dirname, '..', '..', '..', 'public');
  app.use(express.static(staticPath));

  const viewsPaths = [
    path.join(__dirname, '..', 'views'),

    path.join(__dirname, '..', 'pages', 'views'),

    path.join(__dirname, '..', 'taxonomies', 'category', 'views'),

    path.join(__dirname, '..', 'entities', 'user', 'views'),
    path.join(__dirname, '..', 'entities', 'article', 'views'),
    path.join(__dirname, '..', 'entities', 'book', 'views'),
    path.join(__dirname, '..', 'entities', 'channel', 'views'),
    path.join(__dirname, '..', 'entities', 'course', 'views'),
    path.join(__dirname, '..', 'entities', 'event', 'views'),
    path.join(__dirname, '..', 'entities', 'file', 'views'),
    path.join(__dirname, '..', 'entities', 'idea', 'views'),
    path.join(__dirname, '..', 'entities', 'infographic', 'views'),
    path.join(__dirname, '..', 'entities', 'link', 'views'),
    path.join(__dirname, '..', 'entities', 'movie', 'views'),
    path.join(__dirname, '..', 'entities', 'product', 'views'),
    path.join(__dirname, '..', 'entities', 'quote', 'views'),
    path.join(__dirname, '..', 'entities', 'story', 'views'),
    path.join(__dirname, '..', 'entities', 'summary', 'views'),
    path.join(__dirname, '..', 'entities', 'tool', 'views'),
    path.join(__dirname, '..', 'entities', 'video', 'views'),
  ];

  // debug(staticPath, viewsPaths);

  app.set('views',viewsPaths);
  app.set('view engine', 'pug');
}

module.exports = setupConfig;
