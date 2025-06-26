// $(document).ready(function () {
//   let $requiredFields = $('.form1 input[required], .form1 select[required], .form2 input[type="radio"][required]');
//   $(".have2hide1").removeClass('hidden');
//   //bullet color change
//   function markcolor() {
//   $('.main li').each(function () {
//     if (!$(this).hasClass('custom-bullet')) {
//       $(this).addClass('custom-bullet');
//       return false; 
//     }
//   });
// }
//   // Show shipping form
//   $(".continuepay").click(function () {
//     $(".have2hide1").slideUp(200);
//     $(".have2hide2").slideDown(200);
//     markcolor();
//   });
//   // show address Line 2
//   $(".show-address").click(function () {
//     $(this).hide();
//     $(".hidden-address").slideDown(200);
//   });




//   // Show review section
//   $(".continuereviewbtn").click(function () {
//     $(".have2hide2").slideUp(200);
//     $(".have2hide3").slideDown(200);
//     markcolor();
//   });
//   //done
//   $(".placeorderbtn").click(function () {
//     $(".have2hide3").slideUp(200);
//     markcolor();
//   });



//   // validate individual field on blur/change
//   $requiredFields.on('blur change', function () {
//     validateField($(this));
//     toggleContinueButton();
//   });
//   // Enable/disable button on input/change
//   $requiredFields.on('input change', function () {
//     toggleContinueButton();
//   });
//   function validateField(field) {
//     const errorSpan = field.next('.error-message');
//     $('.error-message').addClass('hidden'); 

//     if (!field.val()) {
//       field.addClass('redborder');
//       errorSpan.removeClass('hidden');
//     } else {
//       field.removeClass('redborder');
//     }
//   }
//   function isFormValid() {
//     let isValid = true;
//     $requiredFields.each(function () {
//       if (!$(this).val()) {
//         isValid = false;
//       }
//     });
//   // Check if a shipping radio is selected
//   if (!($('.form2 input[type="radio"]:checked').length > 0)) {
//     isValid = false;
//   }
//     return isValid;
//   }
//   $(".continuepaybtn").prop('disabled', true);
//     function toggleContinueButton() {
//     $(".continuepaybtn").prop('disabled', !isFormValid());
//   }
//   // Payment method toggles
//   $("#option1-method").click(function () {
//     $(".credit-detail").slideUp(200);
//     $(".torrid-detail").slideToggle(200);
//    // Validate individual field on blur/change
//    $requiredFields = $('.form3 input[required2]');
//    $requiredFields.on('blur change', function () {
//     validateField($(this));
//       $(".continuereviewbtn").prop('disabled', !isFormValid());
//     });
//     // Enable/disable button on input/change
//     $requiredFields.on('input change', function () {
//       $(".continuereviewbtn").prop('disabled', !isFormValid());
//     });
//   });
//   $(".continuereviewbtn").prop('disabled', true);
//   $("#option2-method").click(function () {
//     $(".torrid-detail").slideUp(200);
//     $(".credit-detail").slideToggle(200);
//      // Validate individual field on blur/change
//      $requiredFields = $('.form3 input[required3]');
//   $requiredFields.on('blur change', function () {
//     validateField($(this));
//     $(".continuereviewbtn").prop('disabled', !isFormValid());
//   });
//   // Enable/disable button on input/change
//   $requiredFields.on('input change', function () {
//     $(".continuereviewbtn").prop('disabled', !isFormValid());
//   });
//   });
  
// });


$(document).ready(function () {
  let $requiredFields = $('.form1 input[required], .form1 select[required], .form2 input[type="radio"][required]');
  $(".have2hide1").removeClass('hidden');

  // Bullet color change
  function markcolor() {
    $('.main li').each(function () {
      if (!$(this).hasClass('custom-bullet')) {
        $(this).addClass('custom-bullet');
        return false;
      }
    });
  }

  // Show shipping form
  $(".continuepaybtn").click(function () {
    const { isValid, firstInvalid } = isFormValid();
    if (!isValid ) {
      firstInvalid.focus();
      validateField(firstInvalid);
      return;
    }
    $(".have2hide1").slideUp(200);
    $(".have2hide2").slideDown(200);
    markcolor();
  });

  // Show address Line 2
  $(".show-address").click(function () {
    $(this).hide();
    $(".hidden-address").slideDown(200);
  });

  // Show review section
  $(".continuereviewbtn").click(function () {
    const { isValid, firstInvalid } = isFormValid();
    if (!isValid ) {
      firstInvalid.focus();
      validateField(firstInvalid);
      return;
    }
    $(".have2hide2").slideUp(200);
    $(".have2hide3").slideDown(200);
    markcolor();
  });

  // Done / place order
  $(".placeorderbtn").click(function () {
    $(".have2hide3").slideUp(200);
    markcolor();
  });

  // Validate individual field on blur/change
  $requiredFields.on('blur change', function () {
    validateField($(this));
  });

  // Enable/disable visual cue only — no button disabling
  $requiredFields.on('input change', function () {
    validateField($(this));
  });

function validateField(field) {
  let errorSpan;

  if ( field.is('select')) {
    errorSpan = field.closest('.custom-select').nextAll('.error-message').first();
    const customSelected = field.closest('.custom-select').find('.select-selected');
    if (!(field.val() )) {
      customSelected.addClass('redborder');
      errorSpan.removeClass('hidden');
    } else {
      customSelected.removeClass('redborder');
      errorSpan.addClass('hidden');
    }

  } else if (field.attr('type') === 'radio') {
    const them=$('.form2 input[type="radio"][required]');
    const isChecked = them.is(':checked');//gives true false
    errorSpan = $('.form2').prev('p').find('.error-message');
    if (!isChecked) {
      them.addClass('redborder');
      errorSpan.removeClass('hidden');
    } else {
      them.removeClass('redborder');
      errorSpan.addClass('hidden');
    }

  } 
  else {
    errorSpan = field.nextAll('.error-message').first();
    const errorSpan2=field.nextAll('.error-message-size').first();
    const errorSpan3=field.nextAll('.error-message-alpha').first();
    if (!field.val()) {
      field.addClass('redborder');
      errorSpan.removeClass('hidden');
      errorSpan2.addClass('hidden');
      errorSpan3.addClass('hidden');
    } 
    else {
      errorSpan.addClass('hidden');
      field.removeClass('redborder');
      if((field.attr('id')==='first-name' || field.attr('id')==='last-name' || field.attr('id')==='city')){
        if(field.val().length > 15) {
          errorSpan2.removeClass('hidden'); 
          errorSpan3.addClass('hidden'); 
          field.addClass('redborder');
        } 
        else if(!/^[A-Za-z]*$/.test(field.val())){
          errorSpan3.removeClass('hidden');
          errorSpan2.addClass('hidden');
          field.addClass('redborder');
        } 
        else {
          errorSpan2.addClass('hidden'); 
          errorSpan3.addClass('hidden');
          field.removeClass('redborder');
        }
        // if (errorSpan2.hasClass('hidden') && errorSpan3.hasClass('hidden')) {
        //   field.removeClass('redborder');
        // }
      }
      else if(field.attr('id') ==='address'){
        if (field.val().length > 25) {
          errorSpan2.removeClass('hidden'); 
          field.addClass('redborder');
        } 
        else{
          errorSpan2.addClass('hidden'); 
          field.removeClass('redborder');
        }
      }
      else if(field.attr('id')==='zip') {
        if(field.val().length !== 5) {
          errorSpan2.removeClass('hidden'); 
          errorSpan3.addClass('hidden'); 
          field.addClass('redborder');
        } 
        else if(!/^[1-9][0-9]*$/.test(field.val())) {
          errorSpan3.removeClass('hidden'); 
          errorSpan2.addClass('hidden'); 
          field.addClass('redborder');
        } 
        else{
          errorSpan2.addClass('hidden'); 
          errorSpan3.addClass('hidden');
          field.removeClass('redborder');
        }
      }
      else if(field.attr('id')==='phone') {
        if (field.val().length!==10) {
          errorSpan2.removeClass('hidden'); 
          errorSpan3.addClass('hidden'); 
          field.addClass('redborder');
        } 
        else if(!/^[1-9][0-9]*$/.test(field.val())) {
          errorSpan3.removeClass('hidden'); 
          errorSpan2.addClass('hidden'); 
          field.addClass('redborder');
        } 
        else{
          errorSpan2.addClass('hidden'); 
          errorSpan3.addClass('hidden');
          field.removeClass('redborder');
        }
      }
    }
  }
}




  function isFormValid() {
  let isValid = true;
  let firstInvalid = null;

  $requiredFields.each(function () {
    const $field = $(this);
    const isFieldValid = $field.val() ;

    if (!isFieldValid) {
        firstInvalid = $field;
        validateField($field);
      isValid = false;
      return false;
    }
  });

  // Check radio group in .form2
  const $radioFields = $('.form2 input[type="radio"][required]');
  if ( !$radioFields.is(':checked')) {
    if (!firstInvalid) {
      firstInvalid = $radioFields.first();
      validateField(firstInvalid); 
    }
    isValid = false;
  }

  // Focus or scroll to first invalid field
  if (!isValid ) {
    if (firstInvalid.is('select')) {
      firstInvalid.closest('.custom-select').find('.select-selected').focus();
    } 
    else {
      firstInvalid.focus();
    }
  }
  return { isValid, firstInvalid };
}



  // Payment method toggles
  $("#option1-method").click(function () {
    $(".credit-detail").slideUp(200);
    $(".torrid-detail").slideToggle(200);

    $requiredFields = $('.form3 input[required2]');
    $requiredFields.on('blur change input', function () {
      validateField($(this));
    });
  });

  $("#option2-method").click(function () {
    $(".torrid-detail").slideUp(200);
    $(".credit-detail").slideToggle(200);

    $requiredFields = $('.form3 input[required3]');
    $requiredFields.on('blur change input', function () {
      validateField($(this));
    });
  });


   





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  $('.custom-select').each(function () {
    const $wrapper = $(this);
    const $select = $wrapper.find('select').first();
    const $options = $select.find('option');

    // Hide native select
    $select.hide();

    // Create div to show selected value
    const $selected = $('<div class="select-selected" tabindex="0"></div>').text($select.find('option:selected').text());
    $wrapper.append($selected);

    
    const $dropdown = $('<div class="select-items hidden"></div>');
    $options.each(function (index) {
      if (index === 0) return;
      const $optionDiv = $('<div></div>').text($(this).text());
      $dropdown.append($optionDiv);
      $optionDiv.on('click', function () {
        const selectedText = $(this).text();

        $select.prop('selectedIndex', index).trigger('change');;
        $selected.text(selectedText);
        $dropdown.find('.same-as-selected').removeClass('same-as-selected');
        $(this).addClass('same-as-selected');
      });
    });

    $wrapper.append($dropdown);

    // Toggle dropdown on click
    $selected.on('click', function (e) {
      e.stopPropagation();
      closedrop($(this));
      $dropdown.toggleClass('hidden');
      $(this).toggleClass('select-arrow-active');
       const $originalSelect = $wrapper.find('select');

      $(document).one('click', function () {
      const val = $originalSelect.val();
      if (!val) {
        validateField($originalSelect);
      }
    });
    });
  });

  function closedrop(current) {
    $('.select-items').each(function () {
      if (!$(this).prev().is(current)) {
        $(this).addClass('hidden');
      }
    });
    $('.select-selected').not(current).removeClass('select-arrow-active');
  }
  $(document).on('click', function () {
    closedrop(null);
  });
});



////////////////////new//////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  let $requiredFields = $('.form1 input[required], .form1 select[required], .form2 input[type="radio"][required]');
  $(".have2hide1").removeClass('hidden');

  function markcolor() {
    $('.main li').each(function () {
      if (!$(this).hasClass('custom-bullet')) {
        $(this).addClass('custom-bullet');
        return false;
      }
    });
  }

  // $(".continuepaybtn").click(function () {
  //   const { isValid, firstInvalid } = isFormValid();
  //   if (!isValid ) {
  //     firstInvalid.focus();
  //     validateField(firstInvalid);
  //     return;
  //   }
  //   $(".have2hide1").slideUp(200);
  //   $(".have2hide2").slideDown(200);
  //   markcolor();
  // });
  $(".continuepaybtn").click(function () {
  const { isValid, firstInvalid } = isFormValid(); 
  $('.error-message, .error-message-size, .error-message-alpha').addClass('hidden'); 
  if (!isValid) {
    $('.common-error-message').removeClass('hidden');
    if (firstInvalid ) {
      if (firstInvalid.is('select')) {
        firstInvalid.closest('.custom-select').find('.select-selected').focus();
      } else {
        firstInvalid.focus();
      }
    }
    return;
  }
  $(".have2hide1").slideUp(200);
  $(".have2hide2").slideDown(200);
  markcolor();
});

$requiredFields.on('input change blur', function () {
  const $field = $(this);
  validateField($field);
  let allValid = true;
  $requiredFields.each(function () {
    if ($(this).is('select') && !$(this).val()) {
      allValid = false;
    }
    if ($(this).hasClass('redborder')) {
      allValid = false;
    }
  });
  const $radioFields = $('.form2 input[type="radio"][required]');
  if (!$radioFields.is(':checked')) {
    allValid = false;
  }
  if (allValid) {
    $('.common-error-message').addClass('hidden');
  }
});




  $(".show-address").click(function () {
    $(this).hide();
    $(".hidden-address").slideDown(200);
  });

  $(".continuereviewbtn").click(function () {
    const { isValid, firstInvalid } = isFormValid();
    if (!isValid ) {
      firstInvalid.focus();
      validateField(firstInvalid);
      return;
    }
    $(".have2hide2").slideUp(200);
    $(".have2hide3").slideDown(200);
    markcolor();
  });

  $(".placeorderbtn").click(function () {
    $(".have2hide3").slideUp(200);
    markcolor();
  });
  $requiredFields.on('blur change', function () {
    validateField($(this));
    
  });

  $requiredFields.on('input change', function () {
    validateField($(this));
  });
  

function validateField(field) {
  const showError = (x, ...errors) => {
    x.addClass('redborder');
    errors.forEach(y => y.removeClass('hidden'));
  };

  const hideError = (x, ...errors) => {
    x.removeClass('redborder');
    errors.forEach(y => y.addClass('hidden'));
  };
   const val = field.val();
  const id = field.attr('id');
  const isalphabet = (val) => {/^[A-Za-z]*$/.test(val)};
  const isnumber = (val) => {/^[1-9][0-9]*$/.test(val)};

  let errorSpan = field.nextAll('.error-message').first();
  const errorSpan2 = field.nextAll('.error-message-size').first();
  const errorSpan3 = field.nextAll('.error-message-alpha').first();

   if (field.is('select')) {
    const customSelected = field.closest('.custom-select').find('.select-selected');
    errorSpan = field.closest('.custom-select').nextAll('.error-message').first();
    if (!val) {
      showError(customSelected, errorSpan);
    } else {
      hideError(customSelected, errorSpan);
    }
  }
  else if (field.attr('type') === 'radio') {
    const radios = $('.form2 input[type="radio"][required]');
    const isChecked = radios.is(':checked');
    errorSpan = $('.form2').prev('p').find('.error-message');
    if (!isChecked) {
      showError(radios, errorSpan);
    } else {
      hideError(radios, errorSpan);
    }
  }
  else{
  if (!val) {
    hideError(field, errorSpan2, errorSpan3);
    showError(field, errorSpan);
  } 
  else {
    hideError(field, errorSpan);
    if (id === 'first-name' || id === 'last-name' || id === 'city') {
      if (val.length>15) {
        hideError(field, errorSpan3);
        showError(field, errorSpan2);
      } else if (!isalphabet(val)) {
        hideError(field, errorSpan2);
        showError(field, errorSpan3);
      } else {
        hideError(field, errorSpan2, errorSpan3);
      }
    }
    else if (id === 'address') {
      if (val.length>25) {
        showError(field, errorSpan2);
      } else {
        hideError(field, errorSpan2);
      }
    }
    else if (id === 'zip') {
      if (!isnumber(val)) {
        hideError(field, errorSpan2);
        showError(field, errorSpan3);
      } else if (val.length!==5) {
        hideError(field, errorSpan3);
        showError(field, errorSpan2);
      } else {
        hideError(field, errorSpan2, errorSpan3);
      }
    }
    else if (id === 'phone') {
      if (!isnumber(val)) {
        hideError(field, errorSpan2);
        showError(field, errorSpan3);
      } else if (val.length !== 10) {
        hideError(field, errorSpan3);
        showError(field, errorSpan2);
      } else {
        hideError(field, errorSpan2, errorSpan3);
      }
    }
  }
}
  // else {
  //   hideError(field,errorSpan, errorSpan2, errorSpan3);
  // }
}

$('#zip, #phone').on('input', function () {
  const original = $(this).val();
  const after = original.replace(/\D/, ''); 
  if (original !== after) {
    $(this).val(after);
  }
});
$('#first-name, #last-name, #city').on('input', function () {
  const original = $(this).val();
  const after = original.replace(/[^A-Za-z]/, ''); 
  if (original !== after) {
    $(this).val(after); 
  }
});


  function isFormValid() {
  let isValid = true;
  let firstInvalid = null;

  $requiredFields.each(function () {
    const $field = $(this);
    const isFieldValid = $field.val() ;
    validateField($field); 

    const hasError = $field.hasClass('redborder') || 
                    ($field.is('select') && $field.closest('.custom-select').find('.select-selected').hasClass('redborder'));

    if (hasError && !firstInvalid) {
      firstInvalid = $field;
      isValid = false;
    }
  });

  const $radioFields = $('.form2 input[type="radio"][required]');
  if ( !$radioFields.is(':checked')) {
    if (!firstInvalid) {
      firstInvalid = $radioFields.first();
      validateField(firstInvalid); 
    }
    isValid = false;
  }

  if (!isValid && firstInvalid ) {
    if (firstInvalid.is('select')) {
      firstInvalid.closest('.custom-select').find('.select-selected').focus();
    } 
    else {
      firstInvalid.focus();
    }
  }
  return { isValid, firstInvalid };
}


  $("#option1-method").click(function () {
    $(".credit-detail").slideUp(200);
    $(".torrid-detail").slideToggle(200);

    $requiredFields = $('.form3 input[required2]');
    $requiredFields.on('blur change input', function () {
      validateField($(this));
    });
  });

  $("#option2-method").click(function () {
    $(".torrid-detail").slideUp(200);
    $(".credit-detail").slideToggle(200);

    $requiredFields = $('.form3 input[required3]');
    $requiredFields.on('blur change input', function () {
      validateField($(this));
    });
  });


   


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  $('.custom-select').each(function () {
    const $wrapper = $(this);
    const $select = $wrapper.find('select').first();
    const $options = $select.find('option');
    $select.hide();
    const $selected = $('<div class="select-selected" tabindex="0"></div>').text($select.find('option:selected').text());
    $wrapper.append($selected);
    
    const $dropdown = $('<div class="select-items hidden"></div>');
    $options.each(function (index) {
      if (index === 0) return;
      const $optionDiv = $('<div></div>').text($(this).text());
      $dropdown.append($optionDiv);
      $optionDiv.on('click', function () {
        const selectedText = $(this).text();
        $select.prop('selectedIndex', index).trigger('change');
        $selected.text(selectedText);
        $dropdown.find('.same-as-selected').removeClass('same-as-selected');
        $(this).addClass('same-as-selected');
      });
    });
    $wrapper.append($dropdown);
    $selected.on('click', function (e) {
      e.stopPropagation();
      closedrop($(this));
      $dropdown.toggleClass('hidden');
      $(this).toggleClass('select-arrow-active');
       const $originalSelect = $wrapper.find('select');

      $(document).on('click',  function () {
        //  const $originalSelect = $(this).find('select');
      const val = $originalSelect.val();
        if (!val) {
          validateField($originalSelect);
        }
      });
      
    });
  });

  function closedrop(current) {
    $('.select-items').each(function () {
      if (!$(this).prev().is(current)) {
        $(this).addClass('hidden');
      }
    });
    $('.select-selected').not(current).removeClass('select-arrow-active');
  }
  $(document).on('click', function () {
    closedrop(null);
  });
});