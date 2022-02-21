window.addEventListener('load', () => {

    //Slider
    const slideNames = document.querySelectorAll('[data-slideName]');
    const sliderItems = document.querySelectorAll('[data-slideImg]');
    const circleBtns = document.querySelectorAll('[class="js-btn round_btn"]');
    const descrItem = document.querySelectorAll('[data-descrItem]');
    const arrowLeft = document.querySelector('#arrowLeft');
    const arrowRight = document.querySelector('#arrowRight');

    let count = 0;

    const paragraphs = [
        [
            'Rostov-on-Don <br \/> LCD admiral',
            '81 m2',
            '3.5 months'
        ],

        [
            'Sochi <br \/> Thieves',
            '105 m2',
            '4 months'
        ],

        [
            'Rostov-on-Don <br \/> Patriotic',
            '93 m2',
            '3 months'
        ]
    ];

    const changeSlide = index => {
        slideNames.forEach((elem, i) => {
            if (i === index) {
                elem.className = 'added_link_style';
                sliderItems[i].style.opacity = 100;
                circleBtns[i].className = 'added_round_btn';
            } else {
                elem.className = 'reset_link_style';
                sliderItems[i].style.opacity = 0;
                circleBtns[i].className = 'round_btn';
            };
        });
        paragraphs[index].forEach((item, inx) => {
            descrItem[inx].innerHTML = item;
            descrItem[inx].style.marginRight = index === 1 && '15px';
        });
    };

    slideNames.forEach((elem, index) => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            changeSlide(index);
            count = index;
        });
    });

    circleBtns.forEach((circle, index) => {
        circle.addEventListener('click', () => {
            changeSlide(index);
            count = index;
        });
    });

    const increment = e => {
        e.preventDefault();
        if (count < 2) {
            ++count;
        } else {
            count = 0;
        };
        changeSlide(count);
    };

    const decrement = e => {
        e.preventDefault();
        if (count !== 0) {
            --count;
        } else {
            count = 2;
        };
        changeSlide(count);  
    }; 

    arrowRight.addEventListener('click', increment);
    arrowLeft.addEventListener('click', decrement);


    //
});