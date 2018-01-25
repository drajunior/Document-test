$(function(){
    // Initiate datepicker
    $('.input-group.date').datepicker({
        format: 'dd/mm/yyyy',
        todayBtn: "linked",
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    });

    // Address management functions
    $('#btn-add-address').on('click', function(e){
        e.preventDefault();

        var content = $('.address-section').first().clone();
        var last_address = $('.address-section').last();

        $(content).find('input, select, textarea').val('');

        last_address.after(
            '<div class="form-section address-section">' +
                $(content).html() +
            '</div>'
        );

        reorderAddress();
    });

    $('.form-horizontal').on('click', '.btn-remove-address', function(e){
        e.preventDefault();

        if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบที่อยู่นี้?')){
            if ($('.address-section').length == 1){
                $(this).parent().parent().parent().parent().find('input, textarea').val('');
                $(this).parent().parent().parent().parent().find('select option').each(function () {
                    if (this.defaultSelected) {
                        this.selected = true;
                        return false;
                    }
                });
            }
            else{
                $(this).parent().parent().parent().parent().remove();
                reorderAddress();
            }
        }
    });

    function reorderAddress(){
        $('.address-section').each(function(index, item){
            $(item).find('span.address-id').text(index+1);
        });
    }

    // Phone number management functions
    $('#btn-add-phone').on('click', function(e){
        e.preventDefault();

        var content = $('.phone-section').first().clone();
        var last_phone = $('.phone-section').last();

        $(content).find('input, select, textarea').val('');

        last_phone.after(
            '<div class="form-section phone-section">' +
                $(content).html() +
            '</div>'
        );

        reorderPhone();
    });

    $('.form-horizontal').on('click', '.btn-remove-phone', function(e){
        e.preventDefault();

        if (confirm('คุณแน่ใจหรือไม่ว่าต้องการลบเบอร์โทรศัพท์นี้?')){
            if ($('.phone-section').length == 1){
                $(this).parent().parent().parent().parent().find('input, textarea').val('');
                $(this).parent().parent().parent().parent().find('select option').each(function () {
                    if (this.defaultSelected) {
                        this.selected = true;
                        return false;
                    }
                });
            }
            else{
                $(this).parent().parent().parent().parent().remove();
                reorderPhone();
            }
        }
    });

    function reorderPhone(){
        $('.phone-section').each(function(index, item){
            $(item).find('span.phone-id').text(index+1);
        });
    }
})
