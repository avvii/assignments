$(document).ready(function () {
  $('.line').click(function () {
    let parentDiv = $(this).parent();
    if ($(this).find('i').hasClass('fa-plus')) {
      $('i').addClass('fa-plus');
      $(this).find('i').removeClass('fa-plus');
      $(this).find('i').addClass('fa-minus');
      $('.top').find('.hidden').slideUp(500);
      parentDiv.find('.hidden').slideDown(500);
    } else {
       $('i').addClass('fa-minus');
      $(this).find('i').removeClass('fa-minus');
      $(this).find('i').addClass('fa-plus');
      parentDiv.find('.hidden').slideUp(500);
    }
    /////////////////////////////////

  });

});