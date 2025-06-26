$(document).ready(function () {
if ($(window).width() < 767) {
  $('.allclose').appendTo('body');
  $(".allclose").hide();
  $(".in-inside").hide();
  $(".bars").click(function () {
    $(".page").hide();
    $(".in-inside").hide();
    $(".boxes").show();
    $(".bar-page").slideDown(500);
  });

  $('.boxes .main-new-box').on('click', function () {
    const id = $(this).attr('id'); 
    const pageClass = '.' + id + '-page';    
    $('.bar-page').hide();
    $(pageClass).show();    
  });
$('.new-box').on('click', function() {
  const $submenu = $(this).find('.in-inside');
    if (!$submenu.data('orgP')) {
      $submenu.data('orgP', $submenu.parent());
    }
    $submenu.appendTo('body').show();
    $(this).closest('.allclose').hide();
});
$('.backbtn2').on('click', function() {
  const $submenu = $(this).closest('.in-inside');
  $submenu.hide();
  const $orgPar = $submenu.data('orgP');
  $submenu.prependTo($orgPar);
  $orgPar.closest('.allclose').show();
});


  $('.closebtn').on('click', function () {
    $('.allclose').hide();
    $('.page').show();
  });

  $('.backbtn').on('click', function () {
    $(".allclose").hide();
    $('.bar-page').show();
  });
}
else {
  $('.second').appendTo('.main-inside');
  $('.main-new-box').hover(
  function () {
    const targetClass = '.' + $(this).attr('id') + '-page';
    $('.allclose').hide();         
    $(targetClass).show();        
    $('.after').addClass('hidden');
  },
  function () {
    const targetClass = '.' + $(this).attr('id') + '-page';
    $(targetClass).hide();  
    $('.after').removeClass('hidden');             
  }
);
$('.allclose').hover(
  function () {
     $(this).show();   
  },
  function () {
    $(this).hide();         
    $('.after').removeClass('hidden');
  }
);
}
});
