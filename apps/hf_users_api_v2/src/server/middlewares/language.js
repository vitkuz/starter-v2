module.exports = () => {
  return (req, res, next) => {
    const browserLanguage = req.acceptsLanguages('ru', 'en');
    const forcedLanguage = req.query.lang || req.body.lang || req.params.lang;
    const lang = forcedLanguage || browserLanguage || 'ru';
    req.lang = lang; // set language in session
    next();
  }
};
