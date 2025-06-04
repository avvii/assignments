const swiper = new Swiper('.swiper', {
  speed: 800,
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    }
  },
  navigation: {
    nextEl: '.nextbtn',
    prevEl: '.prevbtn'
  }
});
