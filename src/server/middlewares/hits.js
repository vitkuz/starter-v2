module.exports = () => {
  return (req, res, next) => {
    req.session = req.session || {};
    req.session.hits = req.session.hits ? req.session.hits : 0;
    req.session.hits += 1;
    next();
  }
};
