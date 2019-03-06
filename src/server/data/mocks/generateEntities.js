function getBooks(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample BOOK title',
      });
    }

    resolve(result);
  });
}

function getChannels(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample CHANNEL title',
      });
    }

    resolve(result);
  });
}

function getCourses(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample COURSES title',
      });
    }

    resolve(result);
  });
}

function getFiles(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample FILE title',
      });
    }

    resolve(result);
  });
}

function getIdeas(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample IDEA title',
      });
    }

    resolve(result);
  });
}

function getInfographics(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample INFOGRAPICS title',
      });
    }

    resolve(result);
  });
}

function getMovies(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample MOVIE title',
      });
    }

    resolve(result);
  });
}

function getQuotes(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample QUOTE title',
      });
    }

    resolve(result);
  });
}

function getStories(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample STORY title',
      });
    }

    resolve(result);
  });
}

function getTools(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample TOOLS title',
      });
    }

    resolve(result);
  });
}

function getVideos(number) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let i = 0; i <= number; i++) {
      result.push({
        title: 'Sample VIDEO title',
      });
    }

    resolve(result);
  });
}


module.exports = {
  getBooks,
  getChannels,
  getCourses,
  getFiles,
  getIdeas,
  getInfographics,
  getMovies,
  getQuotes,
  getStories,
  getTools,
  getVideos,
};
