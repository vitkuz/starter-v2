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

  request.done(function (msg) {
    console.log(msg)
  });

  request.fail(function (jqXHR, textStatus) {
    console.error(textStatus)
  });

});
