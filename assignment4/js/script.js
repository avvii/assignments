$(document).ready(function () {
  $('.menu').hover(function () {
      $(this).find('.drop').addClass('newclass');
      $(this).find('.dropdown').show();
    },
    function () {
      $(this).find('.drop').removeClass('newclass');
      $(this).find('.dropdown').hide();
    }
  );
});

