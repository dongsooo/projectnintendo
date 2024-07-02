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

// 클릭시 스크롤 이벤트
// pc 버전
// 공통 스크롤 함수 정의
function scrollToElement(targetId, logMessage) {
  document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  console.log(logMessage);
}

// scrollLink2에 이벤트 리스너 추가
document
  .getElementById("scrollLink2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollToElement("bestSoftware", "클릭됨");
  });

// scrollLink3에 이벤트 리스너 추가
document
  .getElementById("scrollLink3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    scrollToElement("news", "클릭됨");
  });

// 모바일 버전
// 공통 스크롤 함수 정의
function scrollToElement(targetId, logMessage) {
  document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  console.log(logMessage);
}

// 이벤트 리스너를 추가하는 함수
function addScrollEventListener(linkId, targetId, logMessage) {
  document.getElementById(linkId).addEventListener("click", function (event) {
    event.preventDefault();
    scrollToElement(targetId, logMessage);
  });
}

// 각 스크롤 링크에 대해 이벤트 리스너 추가
addScrollEventListener("scrollLink2-2", "bestSoftware2", "클릭됨");
addScrollEventListener("scrollLink3-3", "news2", "클릭됨");
