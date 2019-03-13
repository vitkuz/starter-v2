const labels = {
  'user.register.form.title': {
    'en': 'Register',
    'ru': 'Регистрация',
  },
  'user.register.form.subtitle': {
    'en': 'Smth very important',
    'ru': 'Что-то очень важное',
  },
  //-
  'user.register.form.input.username.label': {
    'en': 'User name',
    'ru': 'Имя пользователя',
  },
  'user.register.form.input.username.placeholder': {
    'en': 'Username',
    'ru': 'Имя пользователя',
  },
  'user.register.form.input.username.tip': {
    'en': 'Enter user name',
    'ru': 'Введите имя пользователя',
  },
  //-
  'user.register.form.input.email.label': {
    'en': 'Email',
    'ru': 'Электронный адрес',
  },
  'user.register.form.input.email.placeholder': {
    'en': 'Email',
    'ru': 'Электронный адрес',
  },
  'user.register.form.input.email.tip': {
    'en': 'Enter email',
    'ru': 'Введите электронный адрес',
  },
  //-
  'user.register.form.input.password.label': {
    'en': 'Password',
    'ru': 'Пароль',
  },
  'user.register.form.input.password.placeholder': {
    'en': 'Password',
    'ru': 'Пароль',
  },
  'user.register.form.input.password.tip': {
    'en': 'Enter password',
    'ru': 'Введите пароль',
  },
  //-
  'user.register.form.input.password2.label': {
    'en': 'Password confirmation',
    'ru': 'Подтверждение пароля',
  },
  'user.register.form.input.password2.placeholder': {
    'en': 'Password confirmation',
    'ru': 'Подтверждение пароля',
  },
  'user.register.form.input.password2.tip': {
    'en': 'Enter password confirmation',
    'ru': 'Введите пароль второй раз',
  },
  //-
  'user.register.form.submit.text': {
    'en': 'Register',
    'ru': 'Зарегистрироваться',
  },
  //-
  'user.login.form.title': {
    'en': 'Login',
    'ru': 'Вход',
  },
  'user.login.form.subtitle': {
    'en': 'Smth very important',
    'ru': 'Что-то очень важное',
  },
  'user.login.form.submit.text': {
    'en': 'Login',
    'ru': 'Войти',
  },
  'user.login.form.input.email.label': {
    'en': 'Email',
    'ru': 'Электронный адрес',
  },
  'user.login.form.input.email.placeholder': {
    'en': 'Email',
    'ru': 'Электронный адрес',
  },
  'user.login.form.input.email.tip': {
    'en': 'Enter email',
    'ru': 'Введите электронный адрес',
  },
  //-
  'user.login.form.input.password.label': {
    'en': 'Password',
    'ru': 'Пароль',
  },
  'user.login.form.input.password.placeholder': {
    'en': 'Password',
    'ru': 'Пароль',
  },
  'user.login.form.input.password.tip': {
    'en': 'Enter password',
    'ru': 'Введите пароль',
  },
};

function getLabel(key, lang) {
  if (!labels[key]) {
    return 'no such key, no such label'
  } else {
    return labels[key][lang] ? labels[key][lang] : 'no such label';
  }
}

module.exports = () => {
  return (req, res, next) => {
    req.getLabel = getLabel;
    res.locals.__ = getLabel;
    next();
  }
};

//console.log(get('user.register.form.title', 'ru'));


