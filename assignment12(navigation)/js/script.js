$(document).ready(function () {
  $(".bar-page").hide();
  $(".bars").click(function () {
    $(".bar-page").slideDown(500);   
    $(".page").hide();               
  });

  $('.boxes .new-box').on('click', function () {
    const id = $(this).attr('id'); 
    const pageClass = '.' + id + '-page';    
    $('.bar-page').hide();
    $(pageClass).show();    
  });
    $('.closebtn').on('click', function () {
        $('.allclose').hide();
        $('.page').show();
    });
    $('.backbtn').on('click', function () {
        $(".allclose").hide();
        $('.bar-page').show();
    });
});
