$(function () {
  $('#contacts__form').submit(function (e) {
    e.preventDefault(); //это чтобы форма не отправлялась через браузер, только по AJAX
    var formdata = 'name=' + $('#name').val() + '&phone=' + $('#phone').val() + '&message=' + $('#message').val();
    //запишем все данные формы в переменную data
    $.ajax({
      url: 'send.php',
      data: formdata,
      type: 'post',
      success: function (respond) {
        $("#success-box").css('display', 'block') && $(".modal-background").css('display', 'block') && $("#name").val("") && $("#phone").val("") && $("#message").val("");
      },
      error: function () {
        $("#error-box").css('display', 'block') && $(".modal-background").css('display', 'block');
      }
    });
  });
});
