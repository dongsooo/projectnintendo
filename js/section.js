$(document).ready(function () {
  function applyMediaQuery() {
    var isMobileView = window.matchMedia("(max-width: 1023px)").matches;

    // contents 항목 처리
    var itemsToShowContents = isMobileView ? 9 : 8;
    $(".contents > li").hide().slice(0, itemsToShowContents).show();
    if ($(".contents > li:hidden").length > 0) {
      $(".morebtn").show();
    } else {
      $(".morebtn").hide();
    }
    $(".morebtn")
      .off("click")
      .on("click", function () {
        $(".contents > li:hidden").slice(0, itemsToShowContents).show();
        if ($(".contents > li:hidden").length == 0) {
          $(".morebtn").hide();
        }
      });

    // contents2 항목 처리
    var itemsToShowContents2 = isMobileView ? 9 : 4;
    $(".contents2 > li").hide().slice(0, itemsToShowContents2).show();
    if ($(".contents2 > li:hidden").length > 0) {
      $(".morebtn2").show();
    } else {
      $(".morebtn2").hide();
    }
    $(".morebtn2")
      .off("click")
      .on("click", function () {
        $(".contents2 > li:hidden").slice(0, itemsToShowContents2).show();
        if ($(".contents2 > li:hidden").length == 0) {
          $(".morebtn2").hide();
        }
      });

    // swBtn 항목 처리
    $(".swBtn > li").hide().slice(0, 4).show();
    $(".sw_more")
      .off("click")
      .on("click", function () {
        $(".swBtn > li:hidden").slice(0, 4).show();
        if ($(".swBtn > li:hidden").length == 0) {
          $(".sw_more").hide();
        }
      });

    // news 항목 처리
    $(".news > li").hide().slice(0, 4).show();
    $(".newsBtn")
      .off("click")
      .on("click", function () {
        $(".news > li:hidden").slice(0, 4).show();
        if ($(".news > li:hidden").length == 0) {
          $(".newsBtn").hide();
        }
      });
  }

  // 초기 실행
  applyMediaQuery();

  // 화면 크기 변경 감지
  $(window).resize(function () {
    applyMediaQuery();
  });
});
