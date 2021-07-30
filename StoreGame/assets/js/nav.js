document.getElementById('home-tab').addEventListener('click', function (e) {
    document.getElementById('show').classList.add('show');
    document.getElementById('show1').classList.remove('show');
    document.getElementById('show2').classList.remove('show');
});

document.getElementById('profile-tab').addEventListener('click', function (e) {
    document.getElementById('show').classList.remove('show');
    document.getElementById('show1').classList.add('show');
    document.getElementById('show2').classList.remove('show');
});

document.getElementById('contact-tab').addEventListener('click', function (e) {
    document.getElementById('show').classList.remove('show');
    document.getElementById('show1').classList.remove('show');
    document.getElementById('show2').classList.add('show');
});

$('.product__info--list').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: "<img src='./assets/img/back-session.png' class='slick-prev' alt=''>",
    nextArrow: "<img src='./assets/img/next-session.png' class='slick-next' alt=''>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 998,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});