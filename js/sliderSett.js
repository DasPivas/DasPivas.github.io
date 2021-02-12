$(function(){
 $('.slider-gallery').slick({
	infinite: true,
	dots: false,
	slidesToScroll: 1,
     speed: 1000,
     autoplay: 10,
	responsive: [
	    {
	      breakpoint: 250,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});
});
