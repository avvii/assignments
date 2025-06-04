$(document).ready(function () {
  $('.menu').click(function () {
    const id = $(this).attr('id');
    $('.main').hide();
    $('.main.' + id).show();
    $('.menu').removeClass('active');
    $(this).addClass('active');
  });
});

