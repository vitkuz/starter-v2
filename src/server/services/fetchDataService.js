const generate = require('../mocks/generate');
const CONFIG = require('../setup/config');

const getContent = {
  book: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ book: generate('books', 1) });
      } else {

      }
    });
  },
  books: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ books: generate('books') });
      } else {

      }
    });
  },
  channel: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ channel: generate('channels', 1) });
      } else {

      }
    });
  },
  channels: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ channels: generate('channels') });
      } else  {

      }
    });
  },
  course: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ course: generate('courses', 1) });
      } else  {

      }
    });
  },
  courses: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ courses: generate('courses') });
      } else  {

      }
    });
  },
  event: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ event: generate('events', 1) });
      } else  {

      }
    });
  },
  events: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ events: generate('events') });
      } else  {

      }
    });
  },
  file: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ file: generate('files', 1) });
      } else {

      }
    });
  },
  files: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ files: generate('files') });
      } else {

      }
    });
  },
  idea: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ idea: generate('ideas', 1) });
      } else {

      }
    });
  },
  ideas: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ ideas: generate('ideas') });
      } else {

      }
    });
  },
  infographic: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ infographic: generate('infographics', 1) });
      } else {

      }
    });
  },
  infographics: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ infographics: generate('infographics') });
      } else {

      }
    });
  },
  movie: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ movie: generate('movies', 1) });
      } else {

      }
    });
  },
  movies: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ movies: generate('movies') });
      } else {

      }
    });
  },
  product: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ product: generate('products', 1) });
      } else {

      }
    });
  },
  products: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ products: generate('products') });
      } else {

      }
    });
  },
  quote: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ quote: generate('quotes', 1) });
      } else {

      }
    });
  },
  quotes: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ quotes: generate('quotes') });
      } else {

      }
    });
  },
  story: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ story: generate('stories', 1) });
      } else {

      }
    });
  },
  stories: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ stories: generate('stories') });
      } else {

      }
    });
  },
  tool: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ tool: generate('tools', 1) });
      } else {

      }
    });
  },
  tools: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ tools: generate('tools') });
      } else {

      }
    });
  },
  video: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ video: generate('videos', 1) });
      } else {

      }
    });
  },
  videos: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ videos: generate('videos') });
      } else {

      }
    });
  },
  summary: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ summary: generate('summaries', 1) });
      } else {

      }
    });
  },
  summaries: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ summaries: generate('summaries') });
      } else {

      }
    });
  },
  article: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ article: generate('articles', 1) });
      } else {

      }
    });
  },
  articles: () => {
    return new Promise((resolve, reject) => {
      if (CONFIG.USE_MOCKS) {
        resolve({ articles: generate('articles') });
      } else {

      }
    });
  },
};

module.exports = getContent;
