const debug = require('debug')('app:article.read.get.controller');

const PageModelBuilder = require('../../../builders/page.model.builder');
const getContentService = require('../../../services/getContentService');

module.exports = async (req, res) => {
  try {
    const { articleId } = req.params;

    if (!articleId) {
      // You need to provide valid article id
      return res.status(500).render('page.500.pug');
    }

    const { article } = await getContentService.article(articleId);

    if (!article) {
      // Article with this id doesnt exist
      return res.status(500).render('page.500.pug');
    }

    const rawResponses = await Promise.all([
      getContentService.books(articleId),
      getContentService.channels(articleId),
      getContentService.courses(articleId),
      getContentService.events(articleId),
      getContentService.files(articleId),
      getContentService.ideas(articleId),
      getContentService.infographics(articleId),
    ]);

    const content = {};

    for (const response of rawResponses) {
      Object.assign(content, response);
    }

    const {
      books,
      channels,
      courses,
      events,
      files,
      ideas,
      infographics
    } = content;

    const pageModel = new PageModelBuilder(req)
      .withArticle(article)
      .withContent(content)
      .withArticleMenu()
      .build();

    console.log(pageModel);

    // const pageModel = await builder();
    // debug(pageModel);
    // debug(pageModel.content);
    res.render('article.read.get.pug', pageModel);
  } catch (e) {
    debug(e);
  }
};
