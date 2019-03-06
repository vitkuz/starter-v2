const _ = require('lodash');

const keys = ['articles','books','channels','courses','events','files','ideas','infographics','links','movies', 'products','quotes','stories','summaries','tools','users','videos'];

const { readMenuArr,
  createMenuArr,
  updateMenuArr,
  listsMenuArr } = require('../_sandbox/sandbox.generate.menu');
const { menu: categoriesMenu } = require('../data/categoriesMenu');

const defaultPage = {
  lang: 'ru',
  title: 'Samaple title',
  pageTitle: 'Samaple page title',
  bodyClasses: ['test-body-class-1', 'test-body-class-2'],
  readMenuArr,
  createMenuArr,
  updateMenuArr,
  listsMenuArr,
  categoriesMenu
};

function generateArticleMenu(path) {
  return keys.map((key) => {
    return {
      text: key,
      href: path+'/'+key
    }
  })
}

class PageModel {
  constructor(page) {
    Object.assign(this, defaultPage, page);
  }

  toString() {
    return JSON.stringify(this);
  }
}

class PageModelBuilder {
  constructor(req){
    this.content = {};
    this.req = _.pick(req, ['params', 'body', 'query', 'session', 'cookies', 'signedCookies', 'path']);
  }

  withArticle(article) {
    this.content.article = article;
    return this;
  }

  withBooks(books) {
    this.content.books = books;
    return this;
  }

  withChannels(channels) {
    this.content.channels = channels;
    return this;
  }

  withContent(content) {
    Object.assign(this.content, content)
    return this;
  }

  withArticleMenu() {
    this.articleMenu = generateArticleMenu(this.req.path);
    return this;
  }

  build() {
    return new PageModel(this);
  }
}

module.exports = PageModelBuilder;
