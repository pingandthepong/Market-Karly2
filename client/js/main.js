// header sticky!
const $nav = document.querySelector(".header-nav");
const navHandler = (_) => {
  $nav.classList.toggle("active", pageYOffset >= 92);
  if ($nav.classList.contains("active")) [...$nav.children].forEach((el) => el.classList.add("active"));
  else [...$nav.children].forEach((el) => el.classList.remove("active"));
};
addEventListener("scroll", navHandler);

const swiper1 = new Swiper(".swiper-1", {
  autoplay: {
    speed: 500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper1-button-next",
    prevEl: ".swiper1-button-prev",
  },
  a11y: {
    prevSlideMessage: "메인 배너 다음으로 넘기기",
    nextSlideMessage: "메인 배너 이전으로 넘기기",
    // slideLabelMessage: "총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.",
  },
});
