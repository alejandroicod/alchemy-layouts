
function updateSize() {
  $(".main .column").each(function () {
    let width = Math.round($(this).width() * 10) / 10;
    $(this).text(width + "px");
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
