$(document).ready(function(){

    // rproducts slider
    (function() {
        var $sliderWrapper = $('.b-slider.slider-products'),
            $slider = $sliderWrapper.find('.slider-list');

        $slider.slick({
            dots: true,
            arrows: true,
            prevArrow: '<div class="slider-nav nav-left"></div>',
            nextArrow: '<div class="slider-nav nav-right"></div>',
            slidesToShow: 5,
            swipeToSlid: true,
            responsive: [
                {
                    breakpoint: 1070,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 890,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 660,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    })();

    // reviews slider
    (function() {
        var $sliderWrapper = $('.b-slider.slider-reviews'),
            $slider = $sliderWrapper.find('.slider-list');

        $slider.slick({
            //slide: '.slider-item',
            dots: false,
            arrows: true,
            prevArrow: '<div class="slider-nav nav-left"></div>',
            nextArrow: '<div class="slider-nav nav-right"></div>',
        });
    })();

});