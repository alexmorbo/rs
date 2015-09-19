$(document).ready(function(){

    // products slider
    (function() {
        var $sliderWrapper = $('.b-slider.slider-products'),
            $slider = $sliderWrapper.find('.slider-list'),
            $showDots = !$sliderWrapper.hasClass('slider-recommended');

        $slider.slick({
            dots: $showDots,
            customPaging: function(slider, i) {
                return '<div class="slider-dot"></div>';
            },
            arrows: true,
            prevArrow: '<div class="slider-nav nav-left"></div>',
            nextArrow: '<div class="slider-nav nav-right"></div>',
            slidesToShow: 5,
            slidesToScroll: 5,
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

    // login forms
    (function() {

        var openClass = 'is-open',
            targetActiveClass = 'login-link-active';

        $('.js-login-open').on('click', function(e) {
            e.preventDefault();
            $('.js-login-panel').toggleClass(openClass);
        });

        var $loginTargetButtons = $('.js-login-target-button');

        $loginTargetButtons.on('click', function(e) {
            e.preventDefault();

            var $this = $(this),
                $thisTarget = $($this.data('target')),
                $thisTargetButton = $($this.data('target-button')),
                $thisTargetGroup = $("[data-target-group='" + $thisTarget.data('target-group') + "']");

            if (!$thisTargetButton.length) {
                $thisTargetButton = $this;
            }

            $loginTargetButtons.removeClass(targetActiveClass);
            $thisTargetButton.addClass(targetActiveClass);
            $thisTargetGroup.removeClass(openClass);
            $thisTarget.addClass(openClass);
        });

        $loginTargetButtons.eq(0).trigger('click');

    })();

    //hidden search
    (function() {

        var $searchButton = $('.js-search-open'),
            $searchContent = $('.js-search-content'),
            openClass = 'is-open';

        $searchButton.on('click', function(e) {
            $searchContent.toggleClass(openClass);
        });
    })();

    // offcanvas menu
    (function() {

        var $menuSwitcher = $('.js-offcanvas-button'),
            $menuInstance = $('.b-offcanvas'),
            $menuContent = $menuInstance.find('.offcanvas-content'),
            $menuItem = $menuInstance.find('.offcanvas-menu'),
            menuOpenClass = 'is-open';

        var closeListener = function (e) {
            e.preventDefault();
            console.log('click');
            $menuInstance.removeClass(menuOpenClass);
        };

        $menuSwitcher.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            if ($menuInstance.hasClass(menuOpenClass)) {
                $menuContent.off('click', closeListener);
            }
            else {
                $menuContent.on('click', closeListener);
            }

            $menuInstance.toggleClass(menuOpenClass);
        });

        $menuItem.on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });

    })();

    // popup
    (function() {
        var $link = $('.js-popup');

        $link.each(function(_, item) {
            var $item = $(item);

            if ($item.hasClass('popup-fastview')
                ||
                $item.hasClass('popup-telephone')
                ||
                $item.hasClass('popup-cart')
            ) {
                $item.magnificPopup({
                    type: 'ajax'
                });
            }
            else if ($item.hasClass('popup-callback')) {
                $item.magnificPopup({
                    type: 'ajax',
                    items: {
                        src: 'popup-callback.html',
                    },
                    callbacks: {
                        ajaxContentAdded: function() {
                            $(document).trigger('init-masks');
                        }
                    }
                });
            }
        });
    })();

    //datepicker
    (function() {
        var $items = $('.js-datepicker'),
            defaultSettings = {
                format: 'Y-m-d',
                locale: {
                    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
                    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
                }
            };

        var getSettings = function (settings) {
            return $.extend(defaultSettings, settings);
        };

        $items.each(function(_, item) {
            var $item = $(item),
                settings = {};

            if ($item.hasClass('js-datepicker-start')) {
                var $end = $item.parents('.js-datepicker-group').find('.js-datepicker-end');
                settings["change"] = function (date) {
                    $end.pickmeup('destroy');
                    $end.pickmeup(getSettings({'min': date}));
                };
            }

            $item.pickmeup(getSettings(settings));
        });
    })();

    // input mask
    (function() {

        var initMasks = function () {
            var $input = $('.js-input-mask');

            $input.each(function() {
                var $this = $(this);

                if ($this.hasClass('input-mask-phone')) {
                    $this.val("").mask("+7 (000) 000-00-00", {placeholder: "+7 (   )    -  -  "});
                }
            });
        };

        $(document).on('init-masks', function() {
            initMasks();
        });

        initMasks();

    })();

});