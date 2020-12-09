console.log("test");
var resolution = $(window).width();
if (resolution > 767) {

    $(document).ready(function () {
        $('#dropD').css({
            display: "none",
            left: "auto"
        });
        $('.dropD').hover(function () {
            $(this)
                .find('#dropD')
                .stop(true, true)
                .slideDown('fast');
        }, function () {
            $(this)
                .find('#dropD')
                .stop(true, true)
                .fadeOut('fast');
        });
    });
}
if(resolution < 768){
    $(document).ready(function () {
        $('#dropD').css('position', 'relative');
    });
}
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: true,
        navContainer: '.owl-nav',
        dotsContainer: '.owl-dots',
        navText: ['<img src="img/left.gif"/>',
                    '<img src="img/right.gif"/>']
        
    })
  });