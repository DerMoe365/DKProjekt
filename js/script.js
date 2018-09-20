 $(document).ready(function() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() >= 600) {
        $(".navbar").addClass("compressed");
      } else {
        $(".navbar").removeClass("compressed");
      }
    });
  });
  
  $(document).ready(function() {
    $(window).on("scroll", function() {
      if ($(window).scrollTop() >= 400) {
        $(".navbar").addClass("shrink");
      } else {
        $(".navbar").removeClass("shrink");
      }
    });
  });
 
      $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
      });
 
  
  // ---------------------------------------------- //
  // Navbar
  // ---------------------------------------------- //
  
  $(document).scroll(function () {
      if ($(window).scrollTop() >= $('header').offset().top) {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  });
  
  
  // ---------------------------------------------- //
  // Scroll Spy
  // ---------------------------------------------- //
  
  $('body').scrollspy({
      target: '.navbar',
      offset: 80
  });