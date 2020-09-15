$(document).ready(function () {
    console.log('스크립트연결됨')
    $('.message').animate({'top':'200px'},1000);
    
})
/**************************************open클릭**/
$('.open').click(function () {
    $('.black').fadeIn(500);
    $('.mail_bundle').delay(100).fadeIn(500);
})

dnum = 0
$('.down').click(function () {
    dnum = dnum + 1
    dnum = dnum % 6
    console.log('down클릭,dnum:' + dnum)
    $('.img_box').animate({
        'top': '700' * -dnum
    }, 500)
})
