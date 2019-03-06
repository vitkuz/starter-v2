const generateEntities = require('./entities/generateEntities')

const data = {
  books: generateEntities.getBooks,
  channels: generateEntities.getChannels,
  courses: generateEntities.getCourses,
  files: generateEntities.getFiles,
  ideas: generateEntities.getIdeas,
  infographics: generateEntities.getInfographics,
  movies: generateEntities.getMovies,
  quotes: generateEntities.getQuotes,
  stories: generateEntities.getStories,
  tools: generateEntities.getTools,
  video: generateEntities.getVideos,
};


function fetch(key, number) {
  return data[key](number);
}

function add(entityType, body) {
  return new Promise((resolve, reject) => {
    resolve({
      entityType,
      body,
    });
  });
}

function remove(entityType, entityId) {
  return new Promise((resolve, reject) => {
    resolve({
      entityType,
      entityId,
      title: 'Title',
    });
  });
}

// fetch('books', 10)

module.exports = {
  fetch,
  add,
  remove,
};
