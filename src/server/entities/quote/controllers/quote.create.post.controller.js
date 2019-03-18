const debug = require('debug')('app:quote.create.post.controller');
const _ = require('lodash');

const QuotesService = require('../../../services/quotes.service');

module.exports = async (req, res, next) => {
  try {

    debug(req.body);

    const { email, password } = req.body;

    const { data } = await QuotesService.createQuote(req.body);

    res.json(data);

  } catch (e) {
    debug(e);
    const data = e.response.data;
    return res.status(e.response.status).json(data);

    // next(e);
  }
};
