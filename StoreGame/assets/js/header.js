window.onscroll = function () {
    scrollHeader();
    scrollButton();
};
function scrollHeader() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('header__bot').classList.add('header__fixed');
        document.getElementsByClassName('header__bot--content')[0].style.borderBottom = "none";
    } else {
        document.getElementById('header__bot').classList.remove('header__fixed');
        document.getElementsByClassName('header__bot--content')[0].style.borderBottom = "";
    }
}

function scrollButton() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById('scrollTop').style.opacity = "1";
    } else {
        document.getElementById('scrollTop').style.opacity = "0";
    }
}

document.getElementById('scrollTop').addEventListener('click', function (e) {
    document.documentElement.scrollTop = 0;
});