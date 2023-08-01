window.addEventListener("DOMContentLoaded", () => {
  // 글자 애니메이션 설정
  const textTimeline = gsap.timeline();
  textTimeline.fromTo(
    ".maintxt h1",
    {
      opacity: 0,
      y: -50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "bounce",
    }
  );

  // 이미지 애니메이션 설정
  const imageTimeline = gsap.timeline({});
  imageTimeline.from(
    ".sticker",
    {
      opacity: 0,
      z: 0,
      duration: 1,
      stagger: 0.16,
    }
  );

  // 모든 이미지가 로드되었음을 확인하는 함수
  handleImageLoad();
});

// 모든 이미지가 로드되면 실행되는 함수
function handleImageLoad() {
  // 이미지 애니메이션 시작
  gsap.to(".sticker", {
    opacity: 1,
    z: 50,
    duration: 1,
    stagger: 0.16
  });
}


var s = skrollr.init();
let text = document.querySelector('.Fixtext')
window.addEventListener("scroll", function () {
    // pageYOffset : scroll의 top값을 window에 나타내겠다
    let wScroll = window.pageYOffset;
    text.innerHTML = parseInt(wScroll)
})