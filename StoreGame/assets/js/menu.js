document.getElementById('showMenu').addEventListener('click', function (e) {
    var menu = document.getElementById('menu-mobile');
    var header = document.getElementById('header');
    var overlay = document.getElementById('overlay');
    menu.classList.add('menu__mobile--show');
    header.classList.add('header__show');
    overlay.style.display = "block";
});

document.getElementById('menu__mobile--close').addEventListener('click', function (e) {
    isRemove();
});

document.getElementById('overlay').addEventListener('click', function (e) {
    isRemove();
});

function isRemove() {
    var menu = document.getElementById('menu-mobile');
    var header = document.getElementById('header');
    var overlay = document.getElementById('overlay');
    menu.classList.remove('menu__mobile--show');
    header.classList.remove('header__show');
    overlay.style.display = "none";
}

window.addEventListener("resize", function (event) {
    var header = document.getElementById('header');
    if (header.clientWidth > 1199) {
        isRemove();
    }
})

var clickSubmenu = function (index) {
    var submenu = document.getElementsByClassName('submenu--item');
    var childmenu = document.getElementsByClassName('childmenu');
    for (let i = 0; i < submenu.length; i++) {
        if (i === index) {
            childmenu[i].classList.toggle('childmenu__show');
        }
    }
}