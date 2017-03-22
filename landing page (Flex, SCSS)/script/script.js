$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });

    /*video*/
    var overlay = document.getElementById('btn-play');
    var vid = document.getElementById('video');

    if (overlay.addEventListener) {
        overlay.addEventListener("click", play, false)
    } else if (overlay.attachEvent) {
        overlay.attachEvent("onclick", play)
    }

    function play() {
        if (vid.paused) {
            vid.play();
            overlay.className = "o";
        } else {
            vid.pause();
            overlay.className = "";
        }
    }
    /*tabs & PoP*/

    function togglePopUP() {
        $('.active').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>this one!</small>';
                }
            }
        });
    }
    togglePopUP();

    $('.tabbet').click(function () {
        var click_id = $(this).attr('id');
        if (click_id != $('.tabbs a.active').attr('id')) {
            $('a').removeClass('active');
            $(this).addClass('active');
            $('.gallery').removeClass('active').hide('active');
            $('#con_' + click_id).addClass('active').show().css('display', 'flex');
        }
        togglePopUP();
    });

    /*blog pop-up */

    $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }

    });


    /*slider*/

    $('.slider').slick({
        dots: false,
        infinite: true,
        /*autoplay: true,
        speed: 250,*/
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: 2000
    });

    $('.second-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
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

    $('.mastery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.third-slider'
    });
    $('.third-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.mastery ',
        dots: true,
        arrows: false,
    });

    /*map*/
    $('.maps').click(function () {
        $('.map').fadeToggle();
    })
});
/*var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 49,
            lng: 33.5
        },
        scrollwheel: false,
        zoom: 7
    });

    google.maps.event.addDomListener(window, 'load', initMap);
}*/