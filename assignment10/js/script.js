$(document).ready(function () {
  $(".dialog2").dialog({
    autoOpen: false,
    draggable: false,
    dialogClass: "mydialog1",
     close: function () {
      $(".video-wrapper").addClass("hidden");
      $(".img-wrapper").addClass("hidden");
      $(".load-img").show();
    }
  });
  $(".btn4dia").click(function () {
    $(".dialog2").dialog("open");
    var src = $(".video-crop iframe").attr("src");
    $(".video-crop iframe").attr("src", ""); 
    $(".video-crop iframe").attr("src", src);
  });
  /////
  
  $(".load-img").click( function () {
    $(".load-img").hide();
    $(".img-wrapper").removeClass("hidden");
  });


  $(".play-button").click( function () {
    $(".img-wrapper").addClass("hidden");
    $(".video-wrapper").removeClass("hidden");
  });


  $(".play-button2").click( function () {
    $(".img-wrapper2").addClass("hidden");
    $(".video-wrapper2").removeClass("hidden");
  });
});