console.log('slide');
var swiper01 = new Swiper('.home-slider .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: { "delay": 100000 },
});

var swiper02 = new Swiper('.pricing .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: { "delay": 100000 },
});

var swiper03 = new Swiper('.testimonials .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: { "delay": 100000 },
});
