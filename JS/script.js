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


    //Repair carts


    class Card {
        constructor(parent, html) {
            this.parent = document.querySelector(parent);
            this.html = html;
        };

        render() {
            this.parent.insertAdjacentHTML('beforeend', this.html);
        }
    }

    class TypeCard extends Card {
        constructor(imgSrc, title, price, parent, html) {
            super(parent, html)
            this.imgSrc = imgSrc;
            this.title = title;
            this.price = price;
        }
    }

    fetch('/db.json')
        .then(res => res.json())
        .then(({ types }) => {
            types.forEach(({ imgSrc, title, price }) => new TypeCard(imgSrc, title, price, '.repair_block',
                `
                    <div class="repair_block__option">
                        <img class="repair_image" src=${imgSrc}>
                        <div class="repair_block__option__text">
                            <p>${title}</p>
                            <ul>
                                <li>Dismantling of old coatings</li>
                                <li>Wallpapering</li>
                                <li>Painting walls and ceilings</li>
                                <li>Laying flooring</li>
                                <li>Replacing plumbing</li>
                                <li>Replacing sockets and switches</li>
                                <li>Replacing doors</li>
                            </ul>
                            <div class="repair_block__price">
                                <h3 class="heading heading_price">from ${price} rub / m2</h3>
                            </div>
                        </div>
                    </div>
                `
            ).render())
        });


    // Client carts
    class ClientCard extends Card {
        constructor(name, avatar, meters, days, parent, html) {
            super(parent, html);
            this.name = name;
            this.avatar = avatar;
            this.meters = meters;
            this.days = days;
        }
    };

    fetch('/db.json')
        .then(res => res.json())
        .then(({ clients }) => {
            clients.forEach(({ name, avatar, meters, days, }) => new ClientCard(name, avatar, meters, days, '.section_3__block_2__clients_block',
                `
                    <div class="client">
                        <div class="client__content">
                            <div class="client_logo">
                                <img src=${avatar}>
                                <h3 class="heading heading_7">${name}</h3>
                            </div>
                            <p class="paragraph client_review">I want to thank the guys for their work. We put your<br>
                                shoer part in repair. I am very grateful that I referred<br>
                                to the repair as to my own. Great thanks i express the<br>
                                project to georgia for its professionalism and approach.</p>
                            <p class="paragraph client_review">The repair process was turned out in terms, faster
                                than<br>
                                anticipated. Yeam mobile and professionalism. Works<br>
                                performed qualitatively without comments. Quality<br>
                                satisfied. Prices democratic. I recommend these<br> masters.</p>
                        </div>
                        <button class="button client_block__button" name="button"><img class="button_vector"
                                src="./images/button_vect1.svg">
                            <span class="button__text client_block__button_text">${meters} m2</span>
                            <div class="delimiter"></div><img class="button_vector" src="./images/button_vect2.svg">
                            <span class="button__text client_block__button_text">${days} DAYS</span>
                        </button>
                    </div>
                `
            ).render())
        });
});