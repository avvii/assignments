$(document).ready(function () {
  let $requiredFields = $('.form1 input[required], .form1 select[required], .form2 input[type="radio"][required]');
  $(".have2hide1").removeClass('hidden');
  //bullet color change
  function markcolor() {
  $('.main li').each(function () {
    if (!$(this).hasClass('custom-bullet')) {
      $(this).addClass('custom-bullet');
      return false; 
    }
  });
}
  // Show shipping form
  $(".continuepay").click(function () {
    $(".have2hide1").slideUp(200);
    $(".have2hide2").slideDown(200);
    markcolor();
  });
  // show address Line 2
  $(".show-address").click(function () {
    $(this).hide();
    $(".hidden-address").slideDown(200);
  });
  // validate individual field on blur/change
  $requiredFields.on('blur change', function () {
    validateField($(this));
    toggleContinueButton();
  });
  // Enable/disable button on input/change
  $requiredFields.on('input change', function () {
    toggleContinueButton();
  });
  function validateField(field) {
    const errorSpan = field.next('.error-message');
    $('.error-message').addClass('hidden'); 

    if (!field.val()) {
      field.addClass('redborder');
      errorSpan.removeClass('hidden');
    } else {
      field.removeClass('redborder');
    }
  }
  function isFormValid() {
    let isValid = true;
    $requiredFields.each(function () {
      if (!$(this).val()) {
        isValid = false;
      }
    });
  // Check if a shipping radio is selected
  if (!($('.form2 input[type="radio"][name="shipping"]:checked').length > 0)) {
    isValid = false;
  }

    return isValid;
  }
  $(".continuepaybtn").prop('disabled', true);
    function toggleContinueButton() {
    $(".continuepaybtn").prop('disabled', !isFormValid());
  }
  // Payment method toggles
  $("#option1-method").click(function () {
    $(".credit-detail").slideUp(200);
    $(".torrid-detail").slideToggle(200);
   // Validate individual field on blur/change
   $requiredFields = $('.form3 input[required2]');
   $requiredFields.on('blur change', function () {
    validateField($(this));
      $(".continuereviewbtn").prop('disabled', !isFormValid());
    });
    // Enable/disable button on input/change
    $requiredFields.on('input change', function () {
      $(".continuereviewbtn").prop('disabled', !isFormValid());
    });
  });
  $(".continuereviewbtn").prop('disabled', true);
  $("#option2-method").click(function () {
    $(".torrid-detail").slideUp(200);
    $(".credit-detail").slideToggle(200);
     // Validate individual field on blur/change
     $requiredFields = $('.form3 input[required3]');
  $requiredFields.on('blur change', function () {
    validateField($(this));
    $(".continuereviewbtn").prop('disabled', !isFormValid());
  });
  // Enable/disable button on input/change
  $requiredFields.on('input change', function () {
    $(".continuereviewbtn").prop('disabled', !isFormValid());
  });
  });
  // Show review section
  $(".continuereviewbtn").click(function () {
    $(".have2hide2").slideUp(200);
    $(".have2hide3").slideDown(200);
    markcolor();
  });
  $(".placeorderbtn").click(function () {
    $(".have2hide3").slideUp(200);
    markcolor();
  });
});
