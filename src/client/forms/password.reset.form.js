import $ from 'jquery';

//Login Form
const $formSignin = $('.form-password-reset');
$formSignin.on("submit", function (event) {
  event.preventDefault();
  console.log($(this).serializeArray());
  const data = $(this).serializeArray();
  const request = $.ajax({
    url: "/user/password/reset",
    method: "POST",
    data
  });

  request.done(function (response) {
    const messages = response.messages;

    const error = messages.error;
    const info = messages.info;
    const success = messages.success;
    const warning = messages.warning;

    if(error.length > 0) {
      for (let message of error) {
        $formSignin.append(`<div class="alert alert-danger">${message}</div>`)
      }
    }

    if(info.length > 0) {
      for (let message of info) {
        $formSignin.append(`<div class="alert alert-secondary">${message}</div>`)
      }
    }

    if(success.length > 0) {
      for (let message of success) {
        $formSignin.append(`<div class="alert alert-success">${message}</div>`)
      }
    }

    if(warning.length > 0) {
      for (let message of warning) {
        $formSignin.append(`<div class="alert alert-warning">${message}</div>`)
      }
    }
  });

  request.fail(function (jqXHR, textStatus) {
    const response = jqXHR.responseJSON;
    $formSignin.append(`<div class="alert alert-danger">${response.error}</div>`)
  });

});
