$(document).ready(function () {
  $(window).resize(function () {
    $(".main .column").each(function () {
      $(this).text(Math.round($(this).width() * 10) / 10);
    });
  });
});
