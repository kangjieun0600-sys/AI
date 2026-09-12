// 헤더/푸터가 삽입된 뒤에 실행되어야 하는 로직 (모바일 메뉴 토글, 현재 페이지 표시, 히어로 스와이퍼).
document.addEventListener("partials:loaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 현재 페이지에 해당하는 내비게이션 링크를 강조 표시
  const current = document.body.dataset.page;
  if (current) {
    const link = document.querySelector(`#main-nav a[data-page="${current}"]`);
    if (link) link.classList.add("active");
  }
});

// 히어로 스와이퍼 (index.html에만 있음)
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".hero-swiper");
  if (el && window.Swiper) {
    new Swiper(".hero-swiper", {
      loop: true,
      autoplay: { delay: 3500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
    });
  }
});
