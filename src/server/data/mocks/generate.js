const faker = require('faker/locale/ru');

function generate(type, number = 10) {
  const Entity = entitiesFactory(type);
  const entities = [];

  if (number === 1) {
    return new Entity();
  } else {
    for (let i = 0; i < number; i++) {
      entities.push(new Entity());
    }
  }

  return entities;
}

function Category() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.word(),
    title_en: faker.lorem.word(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Book() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    seoTitle: faker.lorem.words(),
    slug: faker.lorem.slug(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    subtitle: faker.lorem.sentence(),
    subtitle_en: faker.lorem.sentence(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),

    categoriesRef: generate('categories', 2),

    articlesRef: generate('articles', 3),

    authorRef: `${faker.name.firstName()} ${faker.name.lastName()}`,
    cover: faker.random.image(),

    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    ownedBy: [{}],

    likes: faker.random.number(),
    bookmarks: faker.random.number(),

    content: {
      summaries: [{}], // summaries of the book
      quotes: [{}],
      ideas: [{}],
      videos: [{}],
      files: [{}],
    },
  };
}

function Channel() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Course() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Summary() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Event() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function File() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Idea() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Infographic() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Movie() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Product() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Quote() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Story() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Tool() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Video() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),
  };
}

function Article() {
  return {
    _id: faker.random.uuid(),
    uuid: faker.random.uuid(),

    title: faker.lorem.words(),
    title_en: faker.lorem.words(),

    subtitle: faker.lorem.words(),
    subtitle_en: faker.lorem.words(),

    description: faker.lorem.paragraph(),
    description_en: faker.lorem.paragraph(),

    createdAt: new Date(),
    updatedAt: new Date(),

    categories: generate('categories', 2),
  };
}

function entitiesFactory(type) {
  switch (type) {
    case 'categories':
      return Category;
    case 'articles':
      return Article;
    case 'books':
      return Book;
    case 'channels':
      return Channel;
    case 'courses':
      return Course;
    case 'events':
      return Event;
    case 'files':
      return File;
    case 'ideas':
      return Idea;
    case 'infographics':
      return Infographic;
    case 'movies':
      return Movie;
    case 'products':
      return Product;
    case 'quotes':
      return Quote;
    case 'stories':
      return Story;
    case 'tools':
      return Tool;
    case 'videos':
      return Video;
    case 'summaries':
      return Summary;
    default:
      console.log(type);
      throw Error('There is no such entity yet', type);
  }
}

// console.log(generate('categories', 10));

module.exports = generate;
