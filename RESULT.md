# RESULT.md — 세션 핸드오프

## 세션: 2026-09-05 — Portfolio Visual Redesign (Draft)

### 요약

기존 Business · Product · AI · Global 콘텐츠를 유지하면서 Hero, Featured Work, Experience, Capabilities, Contact를 editorial layout으로 재설계했습니다. 사용자가 지적한 기존 미디어/정보 구조 회귀를 수정해 Date-navi 앱 시연 MP4와 Next Challenge 라이브 홈페이지 iframe을 다시 명확히 노출하고, Experience에서는 프로젝트와 중복되는 Next Challenge 및 학력 성격의 NEOMA를 제거했습니다.

### 주요 변경

| 파일 | 내용 |
|---|---|
| `sections/hero.jsx` | 프로필 중심 Hero, CSS orbit, Product/Operations/Global/AI floating proof, 단일 proof strip |
| `sections/projects.jsx` | Date-navi/Next Challenge editorial case study. Date-navi 실제 화면 + playable MP4, Next Challenge `https://ncf-aroundx.com/` 라이브 iframe + 자동화/Figma 보조 화면 |
| `sections/experience.jsx` | Paris 2024 Featured Experience + HUFS Marathon supporting experience만 유지. Next Challenge 중복과 NEOMA 학력 항목 제거 |
| `sections/skills.jsx` | Capability pillars / Tools / Languages / Highlights로 재구성, 언어 퍼센트 바 제거 |
| `sections/contact.jsx` | 하나의 closing CTA와 `즉시 근무 가능 / Available immediately` 상태로 재구성 |
| `tokens.css` | editorial layout, device/browser frame, featured experience, CTA를 위한 디자인 토큰/스타일 확장 |
| `tests/visual-redesign.test.mjs` | 리디자인 구조, 라이브 iframe, 앱 데모 controls/poster, Experience scope 회귀 테스트 |
| `tests/browser-smoke.mjs` | 1280/768/375 반응형 렌더, KO·EN, overflow, 이미지, video controls, NCF iframe, Experience 중복 여부 검증 |

### 프로젝트 미디어 보존

- Date-navi: `home.png`, `place-search.png` poster, `Course generate video.mp4`, `recommendation-result.png`를 실제 기기 프레임에 사용.
- 앱 시연 영상은 자동재생 장식이 아니라 `controls`가 있는 playable demo로 표시.
- Next Challenge: `project.media`의 `https://ncf-aroundx.com/` iframe을 메인 브라우저 프레임으로 복원.
- Next Challenge 자동화/Figma 실제 화면은 보조 브라우저 프레임으로 유지.
- 생성형 가짜 제품 화면은 사용하지 않음.

### Experience 범위

- Featured: Paris 2024 Olympics · Korea House
- Supporting: HUFS Marathon sponsorship / business development
- 제외: Next Challenge (Featured Work와 중복)
- 제외: NEOMA Business School (학력/국제경험 성격이므로 Experience에서 제외)

### 검증

- [x] 회귀 테스트를 먼저 추가해 기존 구현에서 실패 확인
- [x] 최신 source-checks 성공
- [x] 최신 Playwright browser-smoke 성공
- [x] 1280×900 / 768×1024 / 375×812 전부 렌더 성공
- [x] KO → EN → KO 언어 전환 성공
- [x] 전 viewport 가로 overflow 없음
- [x] Date-navi video element + controls + 실제 poster 렌더 확인
- [x] `https://ncf-aroundx.com/` iframe DOM 렌더 확인
- [x] Experience DOM에서 Next Challenge / NEOMA 미노출 확인
- [x] broken image / pageerror / console error 없음
- [x] full-page desktop/tablet/mobile screenshot 생성

### 브랜치 / PR

- 브랜치: `feat/portfolio-visual-redesign`
- Draft PR: #1 `feat: portfolio visual redesign`
- `main` / production은 아직 변경하지 않음.

### 다음 단계

사용자 시각 검수 후 필요한 디자인 폴리싱을 반영하고, 승인 후에만 PR을 ready/merge 및 production 배포합니다.
