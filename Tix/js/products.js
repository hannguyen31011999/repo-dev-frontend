// product show menu
$(document).ready(function () {
    $('.products__homeTool--list').on('click', function (e) {
        $('.products__submenu').toggle()
    });
    $('.theater').on('click', function (e) {
        $('.products__theater--submenu').toggle();
    });
    $('.date').on('click', function (e) {
        $('.products__date--submenu').toggle();
    });
    $('.showtime').on('click', function (e) {
        $('.products__showtime--submenu').toggle();
    });
})
$(document).mouseup(function (e) {
    let products = $(".products__list");
    let theater = $(".theater");
    let date = $(".date");
    let showTime = $(".showtime");
    if (!products.is(e.target) && products.has(e.target).length === 0) {
        $('.products__submenu').removeClass('show');
        $('.products__submenu').css('display', 'none');
    }
    if (!theater.is(e.target) && theater.has(e.target).length === 0) {
        $('.products__theater--submenu').removeClass('show');
        $('.products__theater--submenu').css('display', 'none');
    }
    if (!date.is(e.target) && date.has(e.target).length === 0) {
        $('.products__date--submenu').removeClass('show');
        $('.products__date--submenu').css('display', 'none');
    }
    if (!showTime.is(e.target) && showTime.has(e.target).length === 0) {
        $('.products__showtime--submenu').removeClass('show');
        $('.products__showtime--submenu').css('display', 'none');
    }
});

// product carousel
$('.presentFilms').slick({
    slidesPerRow: 4,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "<img src='./img/back-session.png' class='slick-prev' alt=''>",
    nextArrow: "<img src='./img/next-session.png' class='slick-next' alt=''>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                prevArrow: "",
                nextArrow: "",
            }
        },
        {
            breakpoint: 876,
            settings: {
                slidesPerRow: 3,
                rows: 2,
                prevArrow: "",
                nextArrow: "",
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesPerRow: 2,
                rows: 2,
                prevArrow: "",
                nextArrow: "",
            }
        }
    ],
});

$('.futureFilms').slick({
    slidesPerRow: 4,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: "<img src='./img/back-session.png' class='slick-prev' alt=''>",
    nextArrow: "<img src='./img/next-session.png' class='slick-next' alt=''>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                prevArrow: "",
                nextArrow: "",
            }
        },
        {
            breakpoint: 876,
            settings: {
                slidesPerRow: 3,
                rows: 2,
                prevArrow: "",
                nextArrow: "",
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesPerRow: 2,
                rows: 2,
                prevArrow: "",
                nextArrow: "",
            }
        }
    ],
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.desktop').slick('setPosition');
})

var responsive = window.innerWidth;

if (responsive < 576) {
    // play video carousel
    $('[data-fancybox]').fancybox({
        toolbar: false,
        smallBtn: true,
        // fitToView: true,
        iframe: {
            scrolling: 'no',
            preload: false,

        },
        width: 300,
        height: 200,
    })
} else {
    // play video carousel
    $('[data-fancybox]').fancybox({
        toolbar: false,
        smallBtn: true,
        // fitToView: true,
        iframe: {
            scrolling: 'no',
            preload: false,

        },
        width: 800,
        height: 500,
    })
}
