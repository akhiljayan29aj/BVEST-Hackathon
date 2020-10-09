var h = window.innerHeight;

// Navbar Sticking
$(document).ready(function () {
  $(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > h - 40) {
      $("#main-nav").addClass("navbar-fixed");
    }
    if ($(window).scrollTop() < h - 41) {
      $("#main-nav").removeClass("navbar-fixed");
    }
  });
});

// Smooth Scrolling
$("#main-nav a, .btn, #footer a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 60,
      },
      800
    );
  }
});
