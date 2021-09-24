new Swiper('#visual .swiper', {
  autoplay: true,
  loop: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

new Swiper('#main .product .swiper', {
  autoplay: true,
  loop: true,
  slidesPerView: 2,
  // centeredSlides: true,
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});