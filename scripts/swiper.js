const slideLeft = document.querySelector('.index__rooms__swiper-prev');
const slideRight = document.querySelector('.index__rooms__swiper-next');

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

const swiper = new Swiper('.index__rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.index__rooms__swiper-next',
      prevEl: '.index__rooms__swiper-prev',
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