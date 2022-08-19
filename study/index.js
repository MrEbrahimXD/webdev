$(document).ready( function() {
    $(".nav-button").click( function() {
      $(this).toggleClass("open");
      $('.ul').toggleClass("open");
      $('.nav-ul').toggleClass("open");
    });
  });