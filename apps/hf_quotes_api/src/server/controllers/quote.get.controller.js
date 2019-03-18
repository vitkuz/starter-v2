const Quote = require('../models/Quote');
const _ = require('lodash');
const CONFIG = require('../setup/config');

module.exports = (req, res, next) => {
  try {


    res.status(200).json({

    });
  } catch(e) {
    next(e);
  }
};
