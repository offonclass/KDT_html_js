// alert('test')

$(function () {

    $('.navbar_toggleBtn').click(() => {
        $('.navbar_menu').toggle('active');
    })

    $(window).resize(() => {
        if (parseInt($('nav').css('width')) > 768) {
            // 보이기는 display: flex, 숨기기는 display: none
            $('.navbar_menu').css('display', 'flex');
        }
    })

})