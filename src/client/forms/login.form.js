import $ from 'jquery';

//Login Form
const $formSignin = $('.form-signin');
$formSignin.on("submit", function (event) {
  event.preventDefault();
  console.log($(this).serializeArray());
  const data = $(this).serializeArray();
  const request = $.ajax({
    url: "/user/login",
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
