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

  $(".continuepaybtn").click(function () {
  const { isValid, firstInvalid } = isFormValid(); 
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
  let torridSelected = $("#option1-method").is(":checked");
  let creditSelected = $("#option2-method").is(":checked");

  // 👉 If no payment selected, auto-select Torrid and validate its fields
  if (!torridSelected && !creditSelected) {
    $("#option1-method").prop("checked", true);
    $(".torrid-detail").slideDown(200, function () {
      // After opening, validate visible required fields inside Torrid section
      const torridFields = $('.form3 input[required2]:visible');
      let firstInvalid = null;

      torridFields.each(function () {
        const $field = $(this);
        validateField($field);
        if (!firstInvalid && $field.hasClass('redborder')) {
          firstInvalid = $field;
        }
      });

      // Focus first invalid if found
      if (firstInvalid) {
        if (firstInvalid.is('select')) {
          const customSelect = firstInvalid.closest('.custom-select').find('.select-selected');
          customSelect.focus();
        } else {
          firstInvalid.focus();
        }
      }
    });

    return; // 🚫 Don't continue
  }

  // 👉 If selected section is hidden, open it
  if (torridSelected && $(".torrid-detail").is(":hidden")) {
    $(".torrid-detail").slideDown(200);
    return;
  }
  if (creditSelected && $(".credit-detail").is(":hidden")) {
    $(".credit-detail").slideDown(200);
    return;
  }

  // ✅ Validate everything visible
  const { isValid, firstInvalid } = isFormValid();

  if (!isValid) {
    validateField(firstInvalid);

    if (firstInvalid.is('select')) {
      const customSelect = firstInvalid.closest('.custom-select').find('.select-selected');
      customSelect.focus();
    } else {
      firstInvalid.focus();
    }

    return;
  }

  // 🎉 Move to Review Section
  $(".have2hide2").slideUp(200);
  $(".have2hide3").slideDown(200);
  markcolor();
});




  $(".placeorderbtn").click(function () {
    $(".have2hide3").slideUp(200);
    markcolor();
  });
  $requiredFields.on('blur change input', function () {
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
  const isalphabet = (val) => /^[A-Za-z]*$/.test(val);
  const isnumber = (val) => /^[1-9][0-9]*$/.test(val);

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
      if (!isalphabet(val)) {
        hideError(field, errorSpan2);
        showError(field, errorSpan3);
      } else {
        hideError(field, errorSpan2, errorSpan3);
      }
    }
    else if (id === 'zip') {
      if (!isnumber(val)) {
        hideError(field, errorSpan2);
        showError(field, errorSpan3);
      } else if (val.length!== 5) {
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

    const hasError = $field.hasClass('redborder') || ($field.is('select') && $field.closest('.custom-select').find('.select-selected').hasClass('redborder'));

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

  if (!isValid && firstInvalid) {
  if (firstInvalid.is('select')) {
    const customSelect = firstInvalid.closest('.custom-select').find('.select-selected');
    $('html, body').animate({
      scrollTop: $(customSelect).offset().top - 250
    }, 500, function () {
    customSelect.focus();
});
  } 
  else {
    $('html, body').animate({
      scrollTop: $(firstInvalid).offset().top - 250 
    }, 500, function () {
    firstInvalid.focus();
    });
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