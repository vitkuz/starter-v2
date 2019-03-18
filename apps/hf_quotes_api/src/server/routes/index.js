const express = require('express');
const router = express.Router();

const quoteGetController = require('../controllers/quote.get.controller');
const quotePostController = require('../controllers/quote.post.controller');
const quotePutController = require('../controllers/quote.put.controller');
const quoteDeleteController = require('../controllers/quote.delete.controller');

router.get('/quote/:quoteId',
  // isAuthorized,
  // sanitizeRequest,
  // checkValidationErrors,
  quoteGetController);

router.post('/quote',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
  quotePostController);

router.put('/quote',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
  quotePutController);

router.delete('/quote',
    // isAuthorized,
    // sanitizeRequest,
    // checkValidationErrors,
  quoteDeleteController);


module.exports = router;
