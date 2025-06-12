$(document).ready(function () {
  $('.line').click(function () {
    let parentDiv = $(this).parent();
    if ($(this).find('i').hasClass('fa-plus')) {
      $('i').addClass('fa-plus');
      $(this).find('i').removeClass('fa-plus');
      $(this).find('i').addClass('fa-minus');
      $('.top').find('.hidden').removeClass('open');
      $('.top').find('.line').removeClass('open');
      parentDiv.find('.hidden').addClass('open');
      parentDiv.find('.line').addClass('open');
    } 
    else {
      $('i').addClass('fa-minus');
      $(this).find('i').removeClass('fa-minus');
      $(this).find('i').addClass('fa-plus');
      parentDiv.find('.hidden').removeClass('open');
      parentDiv.find('.line').removeClass('open');
    }
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $('.btn').click(function () {
  const parentDiv = $(this).parent().parent();
  const hiddenItems = parentDiv.find('li.hid');
  let flag=1;
  for (let i=0;i<hiddenItems.length;i++) {
    if (!$(hiddenItems[i]).hasClass('open')) {
      $(hiddenItems[i]).addClass('open');
      flag=0;
      break;
    }
  }
  const name = parentDiv.attr('id');
  if(flag ===1){
    alert('No ' + name + ' left');
  }
  else{
    alert('Added a ' + name);
  }
});
////////////////////////////////////////////////////////////////////
 $(".dialog").dialog({
  draggable: false,
  dialogClass: "custom-dialog-1",
  open: function() {
      $(".page").addClass("backgd");
    },
    close: function() {
      $(".page").removeClass("backgd");
    }
  });
    $(".page").click(function() {
    $(".dialog").dialog("close");
  });
  
  //'//
 $(".dialog2").dialog({
  autoOpen: false, 
  draggable: false,
  dialogClass: "custom-dialog-2",
  open: function() {
    $(".page").addClass("backgd");
  },
  close: function() {
    $(".page").removeClass("backgd");
  }
});
$(".btn4dia").click(function () {
  $(".dialog2").dialog("open");
});
 //////////////////////////////////////

});
$(document).on('click', 'li', function () {
  $(this).remove();
});






// ////////////////////////////////////////////////////////////////////
// <div class="page">
//   <div id="dialog1" class="dialog" title="Dialog One" data-style="dialog-style-1">
//     This is the first dialog.
//   </div>

//   <div id="dialog2" class="dialog" title="Dialog Two" data-style="dialog-style-2">
//     This is the second dialog.
//   </div>

//   <button data-target="#dialog1">Open Dialog 1</button>
//   <button data-target="#dialog2">Open Dialog 2</button>
// </div>
// ///////////////////////////////
// <div class="page">
//   <div id="dialog1" class="dialog" title="Dialog One" data-style="dialog-style-1">
//     This is the first dialog.
//   </div>

//   <div id="dialog2" class="dialog" title="Dialog Two" data-style="dialog-style-2">
//     This is the second dialog.
//   </div>

//   <button data-target="#dialog1">Open Dialog 1</button>
//   <button data-target="#dialog2">Open Dialog 2</button>
// </div>
// //////////////////////////
// .backgd {
//   background-color: rgba(0, 0, 0, 0.3);
// }

// .dialog-style-1 .ui-dialog-content {
//   background-color: lightblue;
//   border: 2px solid navy;
// }

// .dialog-style-2 .ui-dialog-content {
//   background-color: lightgreen;
//   border: 2px solid green;
// }
