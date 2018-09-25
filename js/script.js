  // ---------------------------------------------- //
  // Minimilize Navbar on Scroll
  // ---------------------------------------------- //
 var w = screen.width;
 var ow;

 $(document).ready(function() {
    $(window).on("scroll", function() {
      if(w>968){
        ow = 600;
      }
      if(580<w&&w<968){
        ow = 400;
      }
      if(w<580){
        ow = 250;
      }
      if ($(window).scrollTop() >= ow) {
        $(".navbar").addClass("compressed");
      }
      else {
        $(".navbar").removeClass("compressed");
      }
    });
  });
  

  // ---------------------------------------------- //
  // Lightbox
  // ---------------------------------------------- //
  
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


  // ---------------------------------------------- //
  // Navbar-Toggle-Menu
  // ---------------------------------------------- //
  
 $('.navbar-nav>li>a').on('click', function(){
       $('.navbar-collapse').collapse('hide');
    });
 
  
  // ---------------------------------------------- //
  // Navbar-Stick
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
      target: ".navbar", 
      offset: 50
    });   


// ---------------------------------------------- //
  // Smooth Scroll
  // ---------------------------------------------- //
  

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

