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
  readMenuArr,
  createMenuArr,
  updateMenuArr,
  listsMenuArr,
  categoriesMenu
};

function generateArticleMenu(keys, path) {
  return keys.map((key) => {
    return {
      text: key,
      href: path+'/'+key
    }
  })
}

function createBodyClasses(path) {
  const words = path.split('/');
  if (!words) {
    return '';
  }
  const classes = [];
  let currentPrefix = '';
  // TODO: use reduce here
  // TODO: use session to create additional classes
  for(let i = 0; i < words.length; i++) {
    if (words[i] !== '') {
      classes.push(currentPrefix+words[i]);
      currentPrefix = words[i]+'-';
    }
  }
  return classes;
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
    this.lang = this.req.session.lang;
    this.currentYear = new Date().getFullYear();
    this.bodyTag = {
      classes: createBodyClasses(req.path)
    }
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
    Object.assign(this.content, content);
    return this;
  }

  withArticleMenu(keys) {
    this.articleMenu = generateArticleMenu(keys,this.req.path);
    return this;
  }

  build() {
    return new PageModel(this);
  }
}

module.exports = PageModelBuilder;
