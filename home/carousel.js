$(document).ready(function() {
 
  $("#carousel").owlCarousel({
  	  navigation : false, // Show next and prev buttons
      slideSpeed : 500,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true
  });

  var mn = $(".nav-bar");
  $(window).scroll(function() {
  	if($(this).scrollTop() > 275) {
  		mn.addClass("main-nav-scrolled");
  		$("header").fadeOut();
  	} else {
  		mn.removeClass("main-nav-scrolled");
  		$("header").fadeIn();
  	}
  })
 
});

