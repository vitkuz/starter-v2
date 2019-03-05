const { readMenuArr,
  createMenuArr,
  updateMenuArr,
  listsMenuArr } = require('../_sandbox/sandbox.generate.menu');
const { menu: categoriesMenu } = require('../data/categoriesMenu');

const page = {
  lang: 'ru',
  title: 'Smaple title',
  pageTitle: 'Smaple page title',
  bodyClasses: ['test-body-class-1', 'test-body-class-2'],
  readMenuArr,
  createMenuArr,
  updateMenuArr,
  listsMenuArr,
  categoriesMenu
};

module.exports = page;
