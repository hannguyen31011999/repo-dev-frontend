// feature carousel
$('.carousel__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: "<img src='./img/back-session.png' class='slick-prev' alt=''>",
    nextArrow: "<img src='./img/next-session.png' class='slick-next' alt=''>"
});

// play video carousel
$('[data-fancybox]').fancybox({
    toolbar: false,
    smallBtn: true,
    iframe: {
        preload: false
    },
    width: 800,
    height: 500,
})