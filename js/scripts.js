$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").hide();
  });

  $(".fade").click(function() {
    $("#fade-in").toggle();
    $("#fade-out").hide();
  });
});