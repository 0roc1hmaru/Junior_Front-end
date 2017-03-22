app.service('app4Servise', function () {
    function useSlider() {
        $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        });
        $('.slider-2').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            infinite: true,
            speed: 1500,
            fade: true,
            cssEase: 'linear',
            arrows: false
        });
        $('.slider-3').slick({
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
    },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
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
        $('.slider-five').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1500,
            fade: true,
            cssEase: 'linear'
        });
    }
    return {
        useSlider: useSlider
    }
})