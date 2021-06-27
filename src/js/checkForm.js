$(document).ready(function(){
    var phone = $('.popup-form-tel');
    if(phone !== null){
        phone.mask('+7(999) 999-9999');
        phone.on('focus click',function(event){
            $(this).val('');

        });
        }else{
        console.error('Plugin is not loaded:(!');
    }

});