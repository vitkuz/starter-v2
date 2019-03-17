const labels = require('../locales/labels');

function getLabel(key, lang) {
  if (!labels[key]) {
    return 'no such key, no such label'
  } else {
    return labels[key][lang] ? labels[key][lang] : 'no such label';
  }
}

module.exports = () => {
  return (req, res, next) => {
    req.getLabel = getLabel;
    res.locals.__ = getLabel;
    next();
  }
};

//console.log(get('user.register.form.title', 'ru'));


