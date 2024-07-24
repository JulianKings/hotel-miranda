const slideLeft = document.querySelector('.index__rooms__swiper-prev');
const slideRight = document.querySelector('.index__rooms__swiper-next');
const slideBigLeft = document.querySelector('.index__menu__left');
const slideBigRight = document.querySelector('.index__menu__right');

// small buttons
slideLeft.addEventListener('mouseover', () => {
    const element = document.querySelector('#rooms-slide-left');
    element.src = './assets/left_white.png';
});

slideLeft.addEventListener('mouseout', () => {
    const element = document.querySelector('#rooms-slide-left');
    element.src = './assets/left.png';
});

slideRight.addEventListener('mouseover', () => {
    const element = document.querySelector('#rooms-slide-right');
    element.src = './assets/right_white.png';
});

slideRight.addEventListener('mouseout', () => {
    const element = document.querySelector('#rooms-slide-right');
    element.src = './assets/right.png';
});

// big buttons
slideBigLeft.addEventListener('mouseover', () => {
    const element = document.querySelector('#menu-slide-left');
    element.src = './assets/bigleft_white.png';
});

slideBigLeft.addEventListener('mouseout', () => {
    const element = document.querySelector('#menu-slide-left');
    element.src = './assets/bigleft.png';
});

slideBigRight.addEventListener('mouseover', () => {
    const element = document.querySelector('#menu-slide-right');
    element.src = './assets/bigright_white.png';
});

slideBigRight.addEventListener('mouseout', () => {
    const element = document.querySelector('#menu-slide-right');
    element.src = './assets/bigright.png';
});

const swiper = new Swiper('.index__rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.index__rooms__swiper-next',
      prevEl: '.index__rooms__swiper-prev'
    },
});

const coreSwiper = new Swiper('.index__facilities__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.index__facilities__pagination',
        bulletClass: 'index__facilities__bullet',
        bulletActiveClass: 'index__facilities__bullet--active',
        clickable: true,
      },
});

const menuSwiper = new Swiper('.index__menu__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,

    navigation: {
        nextEl: '.index__menu__right',
        prevEl: '.index__menu__left'
    },
});

const imagesSwiper = new Swiper('.index__images__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    initialSlide: 1,
    spaceBetween: 10,

    pagination: {
        el: '.index__images__pagination',
        bulletClass: 'index__images__bullet',
        bulletActiveClass: 'index__images__bullet--active',
        clickable: true,
      },
});