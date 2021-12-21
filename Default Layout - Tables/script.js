$(document).ready(function () {
  $(".form-footer .text-button").on("click", function () {
    $(".form-footer .text-button").removeClass("selected");
    $(this).addClass("selected");
    $(".form-footer, .backdrop").toggleClass("expanded");
  });

  $(".backdrop").on("click", function () {
    $(".form-footer, .backdrop").toggleClass("expanded");
  });
});
