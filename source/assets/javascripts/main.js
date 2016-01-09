$(document).ready(function() {
  $("#slide").backstretch("assets/images/slide.jpg");

  $("#owl-brand").owlCarousel({
      //autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });

})
