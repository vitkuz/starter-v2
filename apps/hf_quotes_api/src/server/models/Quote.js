const mongoose = require('mongoose');

const uuid = require('uuid/v1');

const QuoteSchema = new mongoose.Schema({
  uuid: {
    type: String,
    unique: true
  },
  textRu: {
    type: String,
    trim: true,
    required: true
  },
  textEn: {
    type: String,
    trim: true,
  },
  authorsRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Author'
  }],
  topicsRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Topic'
  }],
  tagsRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Tag'
  }],
  booksRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Book'
  }],
  moviesRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Movie'
  }],
  videosRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Video'
  }],

  nounsRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Noun'
  }],
  verbsRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Verb'
  }],
  adjectivesRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Adjective'
  }],

  articlesRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Question'
  }],
  storiesRef: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Story'
  }],
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now}
});


const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;
