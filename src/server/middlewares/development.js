const { readMenuArr,
  createMenuArr,
  updateMenuArr,
  listsMenuArr } = require('../_sandbox/sandbox.generate.menu');
function development() {
  return function (req, res, next) {
    res.locals.readMenuArr = readMenuArr;
    res.locals.createMenuArr = createMenuArr;
    res.locals.updateMenuArr = updateMenuArr;
    res.locals.listsMenuArr = listsMenuArr;
    next();
  };
}

module.exports = development;
