
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
  },
  pagination: {
    el: '.swiper-pagination',  
    type: 'progressbar'           
  }
});


///////////////////////////////////
$(document).ready(function () {
  $('.changeimg').click(function () {
    $('.swiper-slide img').first().attr('src', '../image/image2.jpg');
    $('.swiper-slide p').first().text("changed image");
    });
    console.log("hi");
});