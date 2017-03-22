$(document).ready(function () {

    /*DropDown */
    function showOnDrop($toggle, $target) {
        var bg = $('#bg-mist');
        $toggle.on('click', function () {
            bg.css('display', 'block');
            $target.slideDown('fast').css('display', 'flex');
            $('#bg-mist').click(function (event) {
                if (!$target.is(event.target) && $target.has(event.target).length === 0) {
                    $($target).slideUp("fast");
                    event.stopPropagation();
                    bg.hide();
                }
            });
        });
    }

    function dropDown() {
        var menu = $('.nav-menu'),
            basket = $('.buy-menu'),
            menuBtn = $(".menu-btn"),
            basketBtn = $('.buy-nag');
        showOnDrop(menuBtn, menu);
        showOnDrop(basketBtn, basket);
    }

    dropDown();

    /*flyMan*/

    function interval() {
        setInterval(function () {
            var showFighter = $('.container-frame').addClass('frame');
            setTimeout(function () {
                clearInterval(showFighter);
                $('.container-frame').removeClass('frame');
            }, 2001);
        }, 10000)
    }
    interval();


    /*Sliders*/

    $('.main-slider').slick({
        arrows: false,
        dots: true

    });


    $('.items-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 6,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 4
                }
    }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 3
                }
    }, {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '70px',
                    slidesToShow: 2
                }
    }, {
                breakpoint: 465,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 390,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '70px',
                    slidesToShow: 1
                }
    }
  ]
    });

    $('.instagramm').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5,
        arrows: false,
        /* autoplay: true,
         autoplaySpeed: 1500,*/
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 5
                }
    },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    }, {
                breakpoint: 370,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '70px',
                    slidesToShow: 1
                }
    }
  ]
    });
    $('.quem').slick({
        slidesToShow: 4,
        arrows: false,
        /*autoplay: true,
        autoplaySpeed: 2000,*/
        pauseOnHover: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerMode: true,
                    centerPadding: '80px',
                    arrows: false,
                    centerMode: false,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 3
                }
    }, {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 2
                }
    }, {
                breakpoint: 465,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
    }, {
                breakpoint: 380,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
    }
  ]
    });

});