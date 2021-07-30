// feature menu
$(document).ready(function () {
    $('.header__menu--overlay').on('click', function (e) {
        $('.header__menu--content').css('transform', 'translateX(100%)');
        $('.header__menu--content').css('transition', 'all 0.3s');
        setTimeout(function () {
            $('.header__menu').removeClass('show');
        }, 300);
        e.preventDefault();
    });

    $('#closeMenu').on('click', function (e) {
        $('.header__menu--content').css('transform', 'translateX(100%)');
        $('.header__menu--content').css('transition', 'all 0.3s');
        setTimeout(function () {
            $('.header__menu').removeClass('show');
        }, 300);
        e.preventDefault();
    })

    $('#showMenu').on('click', function (e) {
        $('.header__menu--content').css('transform', 'translateX(0)');
        $('.header__menu').addClass('show');
    })
})