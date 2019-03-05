const entities = ['article','book','channel','course','event','file','idea','infographic','link','movie','post','product','quote','story','summary','tool','user','video'];
const readMenuArr = [];
const createMenuArr = [];
const updateMenuArr = [];
const listsMenuArr = [];

for (let entityName of entities) {
  readMenuArr.push({
    text: `Read ${entityName} #1`,
    href: `${entityName}/1`,
    classes: `menu-item`
  });
  createMenuArr.push({
    text: `Create ${entityName}`,
    href: `/user/create/${entityName}`,
    classes: `menu-item`
  });
  updateMenuArr.push({
    text: `Edit ${entityName}`,
    href: `/user/edit/${entityName}/1`,
    classes: `menu-item`
  });
  listsMenuArr.push({
    text: `All ${entityName}s`,
    href: `/${entityName}s`,
    classes: `menu-item`
  });
}

console.log(createMenuArr);

module.exports = {
  readMenuArr,
  createMenuArr,
  updateMenuArr,
  listsMenuArr
};
