$('.review__list').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
    ]
});