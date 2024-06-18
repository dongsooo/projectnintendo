let nth = 0;
let pos = 0;

$('.btn>li').first().addClass('check');

$('.btn>li').click(function () {
    nth = $(this).index();
    pos = -100 * nth + '%';
    $('.art2').animate({left:pos},500);
    $('.btn>li').removeClass('check').eq(nth).addClass('check');
});


