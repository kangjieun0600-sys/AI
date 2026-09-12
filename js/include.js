// 공통 헤더/푸터를 각 페이지의 #header, #footer 자리에 끼워 넣는다.
// 끼워 넣기가 끝나면 "partials:loaded" 이벤트를 쏴서 main.js가 그때 내비게이션 등을 초기화하게 한다.
async function includeHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(url);
  el.innerHTML = await res.text();
}

Promise.all([
  includeHTML("#header", "components/header.html"),
  includeHTML("#footer", "components/footer.html"),
]).then(() => {
  document.dispatchEvent(new CustomEvent("partials:loaded"));
});
