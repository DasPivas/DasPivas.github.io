function myFunction(x) {
    x.classList.toggle("change");
}

$('.navbar-nav .closeble').on('click', function () {
    if ($('.navbar-toggle').css('display') != 'none') {
        $(".navbar-toggle").trigger("click");
    }
});

$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 0;
    $('html,body').stop().animate({
        scrollTop: $(this.hash).offset().top - fixed_offset
    }, 600);
    e.preventDefault();
});


