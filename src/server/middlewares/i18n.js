const labels = {
  'user.register.form.title': {
    'en': 'Register',
    'ru': 'Регистрация',
  }
};

function get(key, lang) {
  return labels[key][lang];
}

console.log(get('user.register.form.title', 'ru'));


