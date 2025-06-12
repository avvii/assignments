$(document).ready(function () {
  const imgWidth = $('.slide img:first').width();
  $('.slide img').css('width', imgWidth);
  const imgH = $('.slide img:first').height();
  $('.slide img').css('height', imgH);
    ///////////////////
    
  ///////////////////////////////////////////////////
  $('.add').click(function () {
    // const $button = $(this);
    // $button.hide();
    $('.add').hide(); 
    $('.loader').show(); 
    setTimeout(function () {
      $('<div>').load('diffimg.html', function () {
        const slides = $(this).find('.slide');
        $('.allimages').append(slides);
        const newImgWidth = $('.slide img:first').width();
        $('.slide img').css('width', newImgWidth);
        const imgH = $('.slide img:first').height();
  $('.slide img').css('height', imgH);
        $('.loader').hide(); 
        $('.add').show();
      });
    }, 2000); 
  });



  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.BackTop').fadeIn();
    } 
    else {
      $('.BackTop').fadeOut();
    }
  });

  $('.BackTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
});



