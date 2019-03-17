import $ from 'jquery';

//Register Form
const $formRegister = $('.form-register');
$formRegister.on("submit", function (event) {
  event.preventDefault();
  console.log($(this).serializeArray());
  const data = $(this).serializeArray();
  const request = $.ajax({
    url: "/user/register",
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
        $formRegister.append(`<div class="alert alert-danger">${message}</div>`)
      }
    }

    if(info.length > 0) {
      for (let message of info) {
        $formRegister.append(`<div class="alert alert-secondary">${message}</div>`)
      }
    }

    if(success.length > 0) {
      for (let message of success) {
        $formRegister.append(`<div class="alert alert-success">${message}</div>`)
      }
    }

    if(warning.length > 0) {
      for (let message of warning) {
        $formRegister.append(`<div class="alert alert-warning">${message}</div>`)
      }
    }

    // console.log(msg)
  });

  request.fail(function (jqXHR, textStatus) {
    const response = jqXHR.responseJSON;
    $formRegister.append(`<div class="alert alert-danger">${response.error}</div>`)
  });

});
