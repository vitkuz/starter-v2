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

class PageModel {
  constructor(page) {
    Object.assign(this, defaultPage, page);
  }

  toString() {
    return JSON.stringify(this);
  }
}

class PageModelBuilder {
  constructor(name){
    this.name = name;
  }

  build() {
    return new PageModel(this);
  }
}

module.exports = PageModelBuilder;
