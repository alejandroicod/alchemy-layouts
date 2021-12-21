
function updateSize() {
  $(".main .column").each(function () {
    $(this).text(Math.round($(this).width() * 10) / 10 + "px");
    $('.main .column').removeClass("last");
    $('.main .column:visible:last').addClass("last");
  });
}
$(document).ready(function () {
  updateSize();
  $(window).resize(function () {
    updateSize();
  });
});
