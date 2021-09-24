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