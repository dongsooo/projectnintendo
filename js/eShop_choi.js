//$('.btn').click(function () {
//  $('.line1').toggleClass('deg45');
//  $('.line2').toggleClass('y90deg');
//  $('.line3').toggleClass('deg-45');
//  $('.menu').toggle(500);
//});
//
//$('.menu>li>a').click(function () {
//  if (parseInt($(window).width()) < 768) {
//    $('.menu').hide();
//    $('.line1').removeClass('deg45');
//    $('.line2').removeClass('y90deg');
//    $('.line3').removeClass('deg-45');
//  };
//})

$(".swBtn>li").slice(4).hide();
$(".sw_more").click(function () {
  $(".swBtn > li:hidden").slice(0, 4).show();

  if ($(".swBtn > li:hidden").length == 0) {
    $(".sw_more").hide();
  }
});

$(".news>li").slice(4).hide();
$(".newsBtn").click(function () {
  $(".news > li:hidden").slice(0, 4).show();

  if ($(".news > li:hidden").length == 0) {
    $(".newsBtn").hide();
  }
});
