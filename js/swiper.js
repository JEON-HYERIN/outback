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
  // autoplay: true,
  loop: true,
  breakpoints: {

    320: {
      slidesPerView: 1,
    },
    850.1: {
      slidesPerView: 2,
    }
  },
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