$(document).ready(function () {
  console.log("hi");
  
  $('#registerBtn').click(function () {
    $('.hidee').show(); 
    $('.now').hide();
  });
  $('#signup').click(function () {
    $('.now').show(); 
    $('.hidee').hide();
  });
///////////////////////////////////////////////////


$('#but').click(function (e) {
        e.preventDefault();
        const email = $('#ee').val(); 
        $('.textboxx1').text(email); 
        const password = $('.password').val(); 
        $('.textboxx2').text(password); 
        const content = $('.full2').text();
        alert('Your account details : ' + content);
        
      });                                                                   
////////////////////////////////////////////////
  $('#btn').click(function () {
    $('.validate').each(function () {
      const vari=$(this);
      const value=$(this).val();
      const id=$(this).attr('id');
      const msg=$('#message_' + id); 
      if(value===''){
        msg.show();
        vari.addClass('error');
      } 
      else if(vari.attr('type') === 'email' && !vari[0].checkValidity()){
        msg.hide(); 
        $('#message_mail2').show(); 
        vari.addClass('error');
      } 
      else {
        msg.hide();
        if(id === 'mail'){
          $('#message_mail2').hide();
        }
        vari.removeClass('error');
      }
    });
  });
});