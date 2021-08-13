window.onscroll = function () {
    scrollHeader();
    scrollButton();
};

// menu
document.getElementById('show-menu').addEventListener('click', function (e) {
    let main = document.getElementById('menu-mobile');
    let header = document.getElementById('header');
    main.classList.add('active');
    header.style.transform = 'translateX(250px)';
});

document.getElementById('menu-overlay').addEventListener('click', function (e) {
    let main = document.getElementById('menu-mobile');
    let header = document.getElementById('header');
    if (this.contains(e.target)) {
        main.classList.remove('active');
        header.style.transform = 'translateX(0)';
    }
});

document.getElementById('menu-close').addEventListener('click', function (e) {
    e.preventDefault();
    let main = document.getElementById('menu-mobile');
    let header = document.getElementById('header');
    main.classList.remove('active');
    header.style.transform = 'translateX(0)';
});



document.getElementById('nav-home-tab').addEventListener('click', function (event) {
    let query = document.querySelectorAll('.tab-pane .header__navItem .fa-angle-down');
    let menu = document.querySelectorAll('.tab-pane .header__submenu');
    if (this.contains(event.target)) {
        query.forEach((item, index) => {
            if (item.getAttribute('isCheck')) {
                vitri = index;
                item.removeAttribute('isCheck');
                item.classList.remove('rotote');
                menu[index].classList.remove('active');
            }
        });
        document.getElementById('nav-profile-tab').classList.remove('navs-active');
        this.classList.add('navs-active');
    }
});

document.getElementById('nav-profile-tab').addEventListener('click', function (event) {
    let query = document.querySelectorAll('.tab-pane .header__navItem .fa-angle-down');
    let menu = document.querySelectorAll('.tab-pane .header__submenu');
    if (this.contains(event.target)) {
        query.forEach((item, index) => {
            if (item.getAttribute('isCheck')) {
                item.removeAttribute('isCheck');
                item.classList.remove('rotote');
                menu[index].classList.remove('active');
            }
        });
        document.getElementById('nav-home-tab').classList.remove('navs-active');
        document.getElementById('nav-home-tab').classList.remove('nav-first');
        this.classList.add('navs-active');
    }
});
const openMenu = (_this) => {
    let query = document.querySelectorAll('.tab-pane .header__navItem .fa-angle-down');
    let menu = document.querySelectorAll('.tab-pane .header__submenu');
    let vitri = -1;
    menu.forEach(item => {
        item.classList.remove('active');
    });
    if (_this.classList.contains('rotote')) {
        query.forEach((item, index) => {
            if (item.getAttribute('isCheck')) {
                vitri = index;
            }
        });
        _this.removeAttribute('isCheck');
        _this.classList.remove('rotote');
        menu[vitri].classList.remove('active');
    } else {
        _this.setAttribute('isCheck', true);
        query.forEach((item, index) => {
            if (item.getAttribute('isCheck')) {
                vitri = index;
            }
        });
        _this.classList.add('rotote');
        menu[vitri].classList.add('active');
    }
}
// cart
document.getElementById('open-cart').addEventListener('click', function (e) {
    document.getElementById('cart-mobile').classList.add('cart-active');
});

document.getElementById('close-cart').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('cart-mobile').classList.remove('cart-active');
});

document.getElementById('cart-overlay').addEventListener('click', function (e) {
    if (this.contains(e.target)) {
        document.getElementById('cart-mobile').classList.remove('cart-active');
    }
});

function scrollHeader() {
    if (document.documentElement.scrollTop > 100) {
        document.getElementById('header__bot').classList.add('header__fixed');
        document.getElementById('header').classList.add('header__custom');
        document.getElementById('header').style.transform = null;
    } else {
        document.getElementById('header__bot').classList.remove('header__fixed');
        document.getElementById('header').classList.remove('header__custom');
        document.getElementById('header').style.transform = null;
    }
}

function scrollButton() {
    if (document.documentElement.scrollTop > 700) {
        document.getElementById('scrollTop').style.opacity = "1";
    } else {
        document.getElementById('scrollTop').style.opacity = "0";
    }
}

document.getElementById('scrollTop').addEventListener('click', function (e) {
    document.documentElement.scrollTop = 0;
});