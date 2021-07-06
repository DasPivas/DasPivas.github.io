function myFunction() {
            var x = document.getElementById("nav-top");
            if (x.className === "nav-link") {
                x.className += " responsive";
            } else {
                x.className = "nav-link";
            }
        }

$(function(){
 $('.slider').slick({
     lazyLoad: 'ondemand',
	infinite: false,
	dots: false,
     arrows: true,
	slidesToScroll: 1,
     autoplaySpeed: 3500,
     speed: 700,
     autoplay: false,
	responsive: [
	    {
	      breakpoint: 4000,
	      settings: {
	        slidesToShow: 4,
	      }
	    },
        {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
        {
	      breakpoint: 465,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});
}); 
