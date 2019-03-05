const userRouter = require('../entities/user/user.router');

const pagesRouter = require('../pages/pages.router');

const categoryRouter = require('../taxonomies/category/category.router');

const articleRouter = require('../entities/article/article.router');
const bookRouter = require('../entities/book/book.router');
const channelRouter = require('../entities/channel/channel.router');
const courseRouter = require('../entities/course/course.router');
const eventRouter = require('../entities/event/event.router');
const fileRouter = require('../entities/file/file.router');
const ideaRouter = require('../entities/idea/idea.router');
const infographicRouter = require('../entities/infographic/infographic.router');
const linkRouter = require('../entities/link/link.router');
const movieRouter = require('../entities/movie/movie.router');
const productRouter = require('../entities/product/product.router');
const quoteRouter = require('../entities/quote/quote.router');
const storyRouter = require('../entities/story/story.router');
const summaryRouter = require('../entities/summary/summary.router');
const toolRouter = require('../entities/tool/tool.router');
const videoRouter = require('../entities/video/video.router');

function setupRoutes(app) {
  app.use(userRouter());

  app.use(pagesRouter());

  app.use(categoryRouter());

  app.use(articleRouter());
  app.use(bookRouter());
  app.use(channelRouter());
  app.use(courseRouter());
  app.use(eventRouter());
  app.use(fileRouter());
  app.use(ideaRouter());
  app.use(infographicRouter());
  app.use(linkRouter());
  app.use(movieRouter());
  app.use(productRouter());
  app.use(quoteRouter());
  app.use(storyRouter());
  app.use(summaryRouter());
  app.use(toolRouter());
  app.use(videoRouter());
}

module.exports = setupRoutes;
