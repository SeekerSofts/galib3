$( document ).ready(function() {
    console.log( "ready!" );
  // Get the current year for the copyright
  $('#year').text(new Date().getFullYear());

  //Testimonial Section
   $('.slider').slick({
     infinite: true,
     slideToShow: 1,
     slideToScroll: 1
   });
});