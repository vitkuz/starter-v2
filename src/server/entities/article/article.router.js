const express = require('express');
const router = express.Router();
const CONFIG = require('../../setup/config');

const debug = require('debug')('app:article.router');

const articleReadGetController = require('./controllers/article.read.get.controller');
const articleCreateGetController = require('./controllers/article.create.get.controller');
const articleUpdateGetController = require('./controllers/article.update.get.controller');

const articleBooksReadGetController = require('./controllers/article.books.read.get.controller');
const articleChannelsReadGetController = require('./controllers/article.channels.read.get.controller');
const articleCoursesReadGetController = require('./controllers/article.courses.read.get.controller');
const articleEventsReadGetController = require('./controllers/article.events.read.get.controller');
const articleFilesReadGetController = require('./controllers/article.files.read.get.controller');
const articleIdeasReadGetController = require('./controllers/article.ideas.read.get.controller');
const articleInfographicsReadGetController = require('./controllers/article.infographics.read.get.controller');
const articleLinksReadGetController = require('./controllers/article.links.read.get.controller');
const articleMoviesReadGetController = require('./controllers/article.movies.read.get.controller');
const articleProductsReadGetController = require('./controllers/article.products.read.get.controller');
const articleQuotesReadGetController = require('./controllers/article.quotes.read.get.controller');
const articleStoriesReadGetController = require('./controllers/article.stories.read.get.controller');
const articleSummariesReadGetController = require('./controllers/article.summaries.read.get.controller');
const articleToolsReadGetController = require('./controllers/article.tools.read.get.controller');
const articleVideosReadGetController = require('./controllers/article.videos.read.get.controller');


function createRouter() {

  router.get('/article/:articleId/books', articleBooksReadGetController);
  router.get('/article/:articleId/channels', articleChannelsReadGetController);
  router.get('/article/:articleId/courses', articleCoursesReadGetController);
  router.get('/article/:articleId/events', articleEventsReadGetController);
  router.get('/article/:articleId/files', articleFilesReadGetController);
  router.get('/article/:articleId/ideas', articleIdeasReadGetController);
  router.get('/article/:articleId/infographics', articleInfographicsReadGetController);
  router.get('/article/:articleId/links', articleLinksReadGetController);
  router.get('/article/:articleId/movies', articleMoviesReadGetController);
  router.get('/article/:articleId/products', articleProductsReadGetController);
  router.get('/article/:articleId/quotes', articleQuotesReadGetController);
  router.get('/article/:articleId/stories', articleStoriesReadGetController);
  router.get('/article/:articleId/summaries', articleSummariesReadGetController);
  router.get('/article/:articleId/tools', articleToolsReadGetController);
  router.get('/article/:articleId/videos', articleVideosReadGetController);


  router.get('/article/:articleId', articleReadGetController);
  router.get('/user/create/article', articleCreateGetController);
  router.get('/user/update/article/:articleId', articleUpdateGetController);

  if (CONFIG.NODE_ENV === 'development') {

  }

  if (CONFIG.NODE_ENV === 'production') {

  }

  return router;
}

module.exports = createRouter;
