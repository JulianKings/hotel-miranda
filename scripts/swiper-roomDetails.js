const slideLeft = document.querySelector('.room-detail__related__swiper-prev');
const slideRight = document.querySelector('.room-detail__related__swiper-next');

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

const swiper = new Swiper('.room-detail__related__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,

    // Navigation arrows
    navigation: {
      nextEl: '.room-detail__related__swiper-next',
      prevEl: '.room-detail__related__swiper-prev'
    },
});
