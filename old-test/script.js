const toggleBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {
  // localStorage 접근 불가 시(프라이빗 모드 등) 기본값으로 진행
}

applyTheme(saved === "dark" ? "dark" : "light");

toggleBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // 저장 실패해도 페이지 동작에는 지장 없음
  }
});
