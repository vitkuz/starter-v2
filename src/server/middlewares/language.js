module.exports = () => {
  return (req, res, next) => {
    req.session = req.session || {};
    const browserLanguage = req.acceptsLanguages('ru', 'en');
    const forcedLanguage = req.query.lang || req.body.lang || req.params.lang;
    const sessionLanguage = req.session.lang;
    const lang = forcedLanguage || sessionLanguage || browserLanguage || 'ru';
    req.session.lang = lang; // set language in session
    next();
  }
};
