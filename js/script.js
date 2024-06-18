$(".mobile-top-bar").hide();
$(".mobile-menu_box").hide();

$(".mobile-header > ul").click(function () {
  $(".mobile-header > ul> li").toggleClass("active");
  let isHas = $(".mobile-header > ul> li").hasClass("active");
  if (isHas) {
    $(".mobile-top-bar").show();
    $(".mobile-menu_box").show();
  } else {
    $(".mobile-top-bar").hide();
    $(".mobile-menu_box").hide();
  }
});
