const axios = require('axios');
const debug = require('debug')('app:quotes.service');
const CONFIG = require('../setup/config');


function getQuoteById(quoteId) {
  return new Promise((resolve, reject) => {

    const path = `${CONFIG.HF_QUOTES_API}/api/v1/quote/${quoteId}?apiKey=${CONFIG.HF_QUOTES_API_KEY}`;

    debug(`Making GET request to: 
    ${path}`);

    axios.post(path).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  });
}

function createQuote(quote) {
  return new Promise((resolve, reject) => {

    const path = `${CONFIG.HF_QUOTES_API}/api/v1/quote?apiKey=${CONFIG.HF_QUOTES_API_KEY}`;

    debug(`Making POST request to: 
    ${path}`, quote);

    axios.post(path, quote).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  });
}

function updateQuoteById(quote) {
  return new Promise((resolve, reject) => {

    const path = `${CONFIG.HF_QUOTES_API}/api/v1/quote?apiKey=${CONFIG.HF_QUOTES_API_KEY}`;

    debug(`Making PUT request to: 
    ${path}`, quote);

    axios.put(path, quote).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  });
}

function deleteQuoteById(quoteId) {
  return new Promise((resolve, reject) => {

    const path = `${CONFIG.HF_QUOTES_API}/api/v1/quote/${quoteId}?apiKey=${CONFIG.HF_QUOTES_API_KEY}`;

    debug(`Making DELETE request to: 
    ${path}`);

    axios.delete(path).then((response) => {
      resolve(response);
    }).catch(err => {
      debug(err);
      reject(err)
    });
  });
}


module.exports = {
  deleteQuoteById,
  updateQuoteById,
  createQuote,
  getQuoteById
}
