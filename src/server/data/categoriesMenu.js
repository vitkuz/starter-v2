const menu = [
  {
    text: 'Политика & Общество',
    text_en: 'Политика & Общество',
    weight: 10,
    href: '/politics-society',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Религия & Духовность',
    text_en: 'Религия & Духовность',
    weight: 20,
    href: '/religion-spirituality',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Технологии & Интернет',
    text_en: 'Технологии & интернет',
    weight: 30,
    href: '/technology-internet',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Стиль жизни & Спорт',
    text_en: 'Стиль жизни & спорт',
    weight: 40,
    href: '/lifestyle-sport',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Дом & Хозяйство',
    text_en: 'House & household',
    weight: 50,
    href: '/house-household',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Науки & Обучение',
    text_en: 'Science & Education',
    weight: 60,
    href: '/science-education',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Красота & Здоровье',
    text_en: 'Health & Beauty',
    weight: 70,
    href: '/health-beauty',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Отношения & Секс',
    text_en: 'Relationships & Sex',
    weight: 80,
    href: '/relationships-sex',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Семья & Дети',
    text_en: 'Family & Children',
    weight: 90,
    href: '/family-children',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Психология & развитие',
    text_en: 'Psychology & development',
    weight: 100,
    href: '/psy-development',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Деньги и Бизнес',
    text_en: 'Money and Business',
    weight: 110,
    href: '/money-business',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Карьера & Работа',
    text_en: 'Career & Job',
    weight: 120,
    href: '/career-job',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Авто & Мото',
    text_en: 'Auto & Moto',
    weight: 130,
    href: '/auto-moto',
    enable: true,
    roles: ['*']
  },
  {
    text: 'Еда и рецепты',
    text_en: 'Food & recipes',
    weight: 140,
    href: '/food-recipes',
    enable: true,
    roles: ['*']
  },
];

// const slugs = categoriesMenu.map(item => item.href.replace('/', ''));
const urls = menu.map(menuItem => menuItem.href);

module.exports = {
  menu,
  urls,
};
