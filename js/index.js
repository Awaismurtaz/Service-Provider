$(document).ready(function () {
    $('.owl-carousel_Demo01').owlCarousel({
        loop: false,
        margin: 30,
        items: 4,
        nav: false,
        autoplay: false,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            800: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.owl-carousel_Demo02').owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        nav: false,
        autoplay: true,
        autoplaySpeed: 20000,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            800: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
});