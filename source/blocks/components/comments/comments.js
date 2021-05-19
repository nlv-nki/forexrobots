let swiper = new Swiper('.swiper-container', {
  breakpoints: {
// when window width is >= 320px
320: {
  direction: 'vertical', // вертикальная прокрутка
  slidesPerColumnFill: 'row',
  slidesPerView: 2,
  autoHeight: true,
  spaceBetween: 20
},
// when window width is >= 480px
480: {
  slidesPerView: 3,
  spaceBetween: 20,
  direction: 'vertical', // вертикальная прокрутка
  slidesPerColumnFill: 'row',

},
// when window width is >= 640px
640: {
  slidesPerView: 3,
  spaceBetween: 20,
  direction: 'vertical',
},

768: {
  slidesPerView: 3,
  direction: 'horizontal',}

},
direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
