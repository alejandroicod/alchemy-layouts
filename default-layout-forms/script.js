$(document).ready(function () {
  $(".floating-summary").on("click", function () {
    $(".floating-summary .toggle").toggleClass("active");
    $(".floating-summary .dropdown").toggle();
  });
  $(".floating-summary .section-container").on("click", function () {
    $(".floating-summary .section-container").removeClass("selected");
    $(this).addClass("selected");
  });
});
