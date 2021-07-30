function Card(_src, _isChecked) {
    this.src = _src;
    this.isChecked = _isChecked;
}

const listImage = [
    './img/ban-tay-diet-quy.png',
    './img/chien-binh-cuoi-cung.png',
    './img/detective-conan.png',
    './img/godzilla-vs-kong.jpg',
    './img/nguoi-nhan-ban.jpg',
    './img/lat-mat-48h.png',
    './img/ke-vo-danh-nobody.png',
    './img/hung-than-tran.png',
];


var randomListCard = function (lengthList) {
    var listCard = [];
    for (let i = 0; i < lengthList; i++) {
        listCard.push(new Array());
        var dem = 0;
        for (let j = i; j < listImage.length; j++) {
            if (dem > 3) {
                break;
            } else if (j / 2 === 1) {
                listCard[i].push(new Card(listImage[1], false));
            } else {
                listCard[i].push(new Card(listImage[j], false));
            }
            dem++;
        }
    }
    return listCard;
}

var startGame = function () {
    var row = document.getElementsByClassName('list')[0];
    var doDai = parseInt(document.getElementById('dodai').value);
    var list = randomListCard(doDai);
    var temp = '';
    var dem = 0;
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            temp += '<div class="col-3 item mt-2">' + '<div class="card__item">' + '<img src="' + list[i][j].src + '" alt="" class="listImage">' + '</div>' + '<div class="overlay" isChecked="false"> ' + '<div class="overlay__item" onclick="openCard(' + dem + ')">' + '<h4>Mở thẻ</h4>' + '</div>' + '</div>' + '</div>';
            dem++;
        }
    }
    row.innerHTML = temp;
    return list;
}

var openCard = function (dem) {
    var overlay = document.getElementsByClassName('overlay');
    var image = document.getElementsByClassName('listImage');
    overlay[dem].style.display = "none";
    overlay[dem].setAttribute('isChecked', 'true');
    var count = 0;
    for (let i = 0; i < overlay.length; i++) {
        if (overlay[i].getAttribute('isChecked') === "true") {
            if (count < 3) {
                for (let j = i + 1; j < overlay.length; j++) {
                    if (j - i === 1) {
                        if (overlay[i].getAttribute('isChecked') === overlay[j].getAttribute('isChecked') && overlay[i].getAttribute('isChecked') === "true" && image[i].src === image[j].src) {
                            alert('Chúc mừng bạn đã chiến thắng game');
                            setTimeout(function () {
                                startGame();
                            }, 2000);
                            break;
                        }
                    } else if (j > 3 && (j + i) % 2 === 0) {
                        if (overlay[i].getAttribute('isChecked') === overlay[j].getAttribute('isChecked') && overlay[i].getAttribute('isChecked') === "true" && image[i].src === image[j].src) {
                            alert('Chúc mừng bạn đã chiến thắng game');
                            setTimeout(function () {
                                startGame();
                            }, 2000);
                            break;
                        }
                    }
                }
            } else {
                alert('Bạn đã thất bại');
                setTimeout(function () {
                    startGame();
                }, 2000);
                break;
            }
            count++;
        }
    }
}

