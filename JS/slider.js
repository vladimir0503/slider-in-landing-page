const imgSlider1 = document.getElementById('imgSlider1');
const imgSlider2 = document.getElementById('imgSlider2');
const imgSlider3 = document.getElementById('imgSlider3');
let imgArr = [imgSlider1, imgSlider2, imgSlider3];

const mobSlider1 = document.getElementById('mobSlider1');
const mobSlider2 = document.getElementById('mobSlider2');
const mobSlider3 = document.getElementById('mobSlider3');
let mobImgArr = [mobSlider1, mobSlider2, mobSlider3];

const sity = document.getElementById('city');
const apartamentAera = document.getElementById('apartament');
const repairTime = document.getElementById('repair');

const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
let linkArr = [link1, link2, link3];

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
let btnArr = [btn1, btn2, btn3];

const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

const mobBtnLeft = document.getElementById('mobBtnLeft');
const mobBtnRight = document.getElementById('mobBtnRight');

let aparAera = document.getElementById('apartament_aera');

let click = 0;

let imgAnimCheck = 1;

function replaceTect(sityStile, aera, duration, margin) {
    sity.innerHTML = sityStile;
    apartamentAera.innerHTML = aera;
    repairTime.innerHTML = duration;
    sity.style.marginBottom = margin;
};

function transpUp(img) {
    let transp = 0
    let t = setInterval(anim, 1);

    function anim() {
        if (transp >= 100) {
            clearInterval(t);
        } else {
            transp += 1;
            img.style.opacity = transp + '%';
            img.style.zIndex = 1;
        }
    }
}

function transpReset(img) {
    img.style.opacity = 0 + '%';
}

function imgAnim(arr) {
    if (click == 0) {
        if (imgAnimCheck == 1) {
            return
        }
        imgAnimCheck = 1;
        transpUp(arr[0]);
        transpReset(arr[1]);
        transpReset(arr[2]);
    } else if (click == 1) {
        if (imgAnimCheck == 2) {
            return
        }
        imgAnimCheck = 2;
        transpReset(arr[0]);
        transpUp(arr[1]);
        transpReset(arr[2]);
    } else if (click == 2) {
        if (imgAnimCheck == 3) {
            return
        }
        imgAnimCheck = 3;
        transpReset(arr[0]);
        transpReset(arr[1]);
        transpUp(arr[2]);
    }
}

function btnStyle(arr, btnNum, addStyle, removeStyle) {
    for (let i = 0; i < arr.length; i++) {
        if ([i] == btnNum) {
            arr[btnNum].className = addStyle;
        } else {
            arr[i].className = removeStyle
        }
    }
}

function slider1() {
    imgAnim(imgArr);
    replaceTect(
        'Rostov-on-Don <br \/> LCD admiral',
        '81 m2',
        '3.5 months',
        19 + 'px'
    );
};

function slider2() {
    imgAnim(imgArr);
    replaceTect(
        'Sochi Thieves',
        '105 m2',
        '4 months',
        45 + 'px'
    );
};

function slider3() {
    imgAnim(imgArr);
    replaceTect(
        'Rostov-on-Don <br \/> Patriotic',
        '93 m2',
        '3 months',
        19 + 'px'
    );
};

function clickCountUp() {
    if (click >= 2) {
        click = 0;
    } else {
        click += 1
    };
}

function clickCountDown() {
    if (click <= 0) {
        click = 2;
    } else {
        click -= 1
    };
}

function arrowSwitching() {
    if (click == 0) {
        slider1();
        btnStyle(linkArr, 0, 'added_link_style', 'reset_link_style');
        btnStyle(btnArr, 0, 'added_round_btn', 'round_btn');
    } else if (click == 1) {
        slider2();
        btnStyle(linkArr, 1, 'added_link_style', 'reset_link_style');
        btnStyle(btnArr, 1, 'added_round_btn', 'round_btn');
    } else {
        slider3();
        btnStyle(linkArr, 2, 'added_link_style', 'reset_link_style');
        btnStyle(btnArr, 2, 'added_round_btn', 'round_btn');
    }
}

function mobReplaceTect() {
    if (click == 0) {
        replaceTect(
            'Rostov-on-Don <br \/> LCD admiral',
            '81 m2',
            '3.5 months',
        );
    } else if (click == 1) {
        aparAera.style.marginLeft = 34 + 'px';
        replaceTect(
            'Sochi <br \/> Thieves',
            '105 m2',
            '4 months',
        );
    } else {
        replaceTect(
            'Rostov-on-Don <br \/> Patriotic',
            '93 m2',
            '3 months',
        );
    }
}

linkArr[0].addEventListener('click', function (event) {
    event.preventDefault();
    click = 0;
    slider1();
    btnStyle(linkArr, 0, 'added_link_style', 'reset_link_style');
    btnStyle(btnArr, 0, 'added_round_btn', 'round_btn');
});

linkArr[1].addEventListener('click', function (event) {
    event.preventDefault();
    click = 1;
    slider2();
    btnStyle(linkArr, 1, 'added_link_style', 'reset_link_style');
    btnStyle(btnArr, 1, 'added_round_btn', 'round_btn');
});

linkArr[2].addEventListener('click', function (event) {
    event.preventDefault();
    click = 2;
    slider3();
    btnStyle(linkArr, 2, 'added_link_style', 'reset_link_style');
    btnStyle(btnArr, 2, 'added_round_btn', 'round_btn');
});

btnArr[0].addEventListener('click', function () {
    click = 0;
    slider1();
    btnStyle(linkArr, 0, 'added_link_style', 'reset_link_style');
    btnStyle(btnArr, 0, 'added_round_btn', 'round_btn');
});

btnArr[1].addEventListener('click', function () {
    click = 1;
    slider2();
    btnStyle(linkArr, 1, 'added_link_style', 'reset_link_style');
    btnStyle(btnArr, 1, 'added_round_btn', 'round_btn');
});

btnArr[2].addEventListener('click', function () {
    click = 2;
    slider3();
    btnStyle(linkArr, 2, 'added_link_style', 'reset_link_style');
    btnStyle(btnArr, 2, 'added_round_btn', 'round_btn');
});

arrowLeft.addEventListener('click', function (event) {
    event.preventDefault();
    clickCountDown();
    arrowSwitching();
});

arrowRight.addEventListener('click', function (event) {
    event.preventDefault();
    clickCountUp();
    arrowSwitching();
});

mobBtnLeft.addEventListener('click', function () {
    clickCountDown();
    imgAnim(mobImgArr);
    mobReplaceTect();
});

mobBtnRight.addEventListener('click', function () {
    clickCountUp();
    imgAnim(mobImgArr);
    mobReplaceTect();
})