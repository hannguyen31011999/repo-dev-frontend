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