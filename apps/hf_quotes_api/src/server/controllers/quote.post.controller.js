const Quote = require('../models/Quote');
const _ = require('lodash');
const CONFIG = require('../setup/config');
const debug = require('debug')('app:quote.post.controller');

module.exports = async (req, res, next) => {
  try {
    debug(req.body);

    const newQuote = new Quote(req.body);

    const savedQuote = await newQuote.save();

    res.status(200).json({
      savedQuote
    });
  } catch(e) {
    debug(e);
    next(e);
  }
};
