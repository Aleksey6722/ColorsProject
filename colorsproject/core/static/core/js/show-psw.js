$('#form').on('click', '#password-checkbox', function(){
    if ($(this).is(':checked')){
        $('#password-input').attr('type', 'text');
        // $('#password-input2').attr('type', 'text');
    } else {
        $('#password-input').attr('type', 'password');
        // $('#password-input2').attr('type', 'password');
    }

}); 

