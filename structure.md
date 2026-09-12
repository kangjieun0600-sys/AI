# 사이트 구조 문서

## 목적
소규모 비즈니스/상점 소개 사이트. 프레임워크 없이 순수 HTML/CSS/JS로만 제작한다.

## 사이트맵 (4페이지)

| 페이지 | 파일명 | 목적 |
|---|---|---|
| 홈 | `index.html` | 첫인상 히어로, 핵심 소개, 다른 페이지로 유도 |
| 소개 | `about.html` | 가게/브랜드 스토리, 위치·연혁 등 |
| 서비스/메뉴 | `services.html` | 취급 상품·서비스 목록 |
| 오시는 길/문의 | `contact.html` | 주소, 영업시간, 연락처, 지도, 문의 폼 |

필요해지면 `gallery.html`(사진), `reviews.html`(후기) 등을 같은 패턴으로 추가한다.

## 폴더 구조

```
web/
├── structure.md          # 이 문서
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   └── style.css         # 전체 공통 스타일 (변수·리셋·레이아웃·컴포넌트)
├── js/
│   ├── include.js        # 공통 헤더/푸터를 각 페이지에 끼워 넣는 스크립트
│   └── main.js           # 페이지 공통 동작 (모바일 메뉴 토글 등)
├── components/
│   ├── header.html       # 로고 + 내비게이션 (모든 페이지 공통)
│   └── footer.html       # 주소/연락처/저작권 (모든 페이지 공통)
└── assets/
    └── images/           # 사진, 아이콘 등
```

## 공통 요소를 반복 작성하지 않는 방법

프레임워크가 없으면 헤더/푸터를 페이지마다 복사해 넣기 쉬운데, 그러면 메뉴 하나 고칠 때 4개 파일을 다
고쳐야 한다. 대신 각 html에는 껍데기만 두고, `include.js`가 `fetch()`로 `components/header.html`,
`components/footer.html`을 읽어와 끼워 넣는다.

```html
<!-- 각 페이지 공통 패턴 -->
<div id="header"></div>
...본문...
<div id="footer"></div>
<script src="js/include.js"></script>
```

> 주의: `fetch()`로 로컬 파일을 읽는 건 `file://`로 직접 열면 브라우저 보안 정책 때문에 막힐 수 있다.
> 확인할 땐 `python -m http.server` 같은 걸로 로컬 서버를 띄워서 열어야 한다.

## 페이지별 기본 섹션 구성

- **index.html**: 헤더 → 히어로(가게 이름+한 줄 소개+CTA 버튼) → 강점/특징 3~4개 카드 → 대표 상품 미리보기 → 오시는 길 요약 → 푸터
- **about.html**: 헤더 → 브랜드 스토리 → 연혁/이력(선택) → 대표/팀 소개(선택) → 푸터
- **services.html**: 헤더 → 서비스/메뉴 목록(카드 또는 표) → 가격(선택) → 푸터
- **contact.html**: 헤더 → 주소·영업시간·전화번호 → 지도(정적 이미지 또는 iframe 임베드) → 문의 폼(선택, 프레임워크 없으니 실제 전송은 mailto: 링크나 외부 폼 서비스 연동으로 대체) → 푸터

## 네이밍/스타일 규칙

- 파일명: 소문자, 하이픈 구분 없이 단어 하나로 (`about.html`처럼 짧게 유지, 여러 단어면 `-`로 연결)
- CSS 클래스: BEM까지는 안 가고 `섹션명-요소` 정도의 단순 네이밍 (`hero-title`, `card-desc`)
- 색상/여백/폰트 크기는 `style.css` 최상단에 CSS 변수(`:root`)로 모아두고 전 페이지가 공유

## 반응형 기준

- 데스크톱 기준으로 만들고, `max-width: 700px` 한 지점만 미디어쿼리로 모바일 대응 (과하게 여러 브레이크포인트 안 둠)
- 내비게이션은 모바일 폭에서 햄버거 토글로 전환 (`main.js`에서 처리)

## 다음 단계

이 구조에 동의하면 순서대로 진행:
1. `components/header.html`, `components/footer.html` 작성
2. `css/style.css`에 공통 변수·리셋·헤더/푸터 스타일 작성
3. `js/include.js` 작성 (헤더/푸터 삽입 로직)
4. `index.html`부터 순서대로 본문 작성
