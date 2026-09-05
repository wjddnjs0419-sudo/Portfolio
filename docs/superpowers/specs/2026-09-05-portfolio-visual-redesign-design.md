# Portfolio Visual Redesign Design

Date: 2026-09-05
Branch: `feat/portfolio-visual-redesign`

## Goal

현재 포트폴리오의 강점인 실제 서비스 출시, 100+ 스타트업 운영, Paris 2024, 스폰서십 경험을 더 빠르게 스캔할 수 있도록 시각적 위계를 재설계한다. 기존 정적 React CDN 구조와 다국어 데이터 구조는 유지하고, 반복적인 카드 UI를 줄이며 실제 결과물과 대표 경험을 더 크게 보여준다.

## Design Principles

1. **안 읽어도 강하게 보이게**: 핵심 성과와 실제 결과물을 먼저 노출하고 상세 설명은 후순위로 배치한다.
2. **카드 반복 최소화**: 모든 섹션을 같은 카드 패턴으로 만들지 않고 Hero, Featured Work, Featured Experience, Capabilities, CTA마다 다른 리듬을 만든다.
3. **실제 에셋 우선**: 생성형 목업의 가짜 화면은 구현하지 않는다. 현재 저장소의 실제 프로필, Date-navi 화면/영상, Next Challenge 웹/관리자 화면, Paris 2024 사진을 사용한다.
4. **Trust Blue 유지**: 기존 색상 토큰을 유지하면서 surface, shadow, border, spacing만 확장한다.
5. **모바일 우선 보존**: 데스크탑에서 강한 editorial layout을 만들되 768px 이하에서는 단일 컬럼으로 자연스럽게 축소한다.

## Information Architecture

기존 순서를 유지한다.

1. Hero
2. Selected Work
3. Experience
4. Capabilities
5. Contact / CTA

## Section Design

### 1. Hero

파일: `sections/hero.jsx`, `data.jsx`, `tokens.css`

- 좌측: eyebrow, 큰 2행 헤드라인, 짧은 설명, 2개 CTA, 4개 핵심 keyword.
- 우측: 기존 `assets/profile-nobg.png`를 중심으로 큰 프로필 비주얼 구성.
- 프로필 주변에 Product / Operations / Global / AI 4개 floating proof panel 배치.
- 배경에 CSS 기반 orbit / globe 느낌의 장식 그래픽 추가. 외부 장식 이미지 의존은 피한다.
- 기존 취미 확장 인터랙션은 핵심 채용 메시지를 방해하므로 제거한다.
- 하단 4개 성과는 동일한 glass card 4개가 아니라 하나의 horizontal proof strip으로 연결한다.
- CTA에는 Work, Contact를 유지하고 Resume 링크가 존재하면 Nav에서 명확히 노출한다.

### 2. Selected Work

파일: `sections/projects.jsx`, `sections/ui.jsx`, `data.jsx`, `tokens.css`

기존 범용 `ProjectCard` 패턴을 두 개의 featured case-study layout으로 교체한다.

#### Date-navi

- 데스크탑 40:60 비율: 설명 영역 / 실제 앱 비주얼.
- 설명은 Problem / Solution / Impact 각 1~2줄로 압축한다.
- 핵심 지표: App Store 출시 / 0.3–0.6s / Kakao Map.
- 실제 `home.png`, `recommendation-result.png`, 코스 생성 영상을 활용한다.
- CSS device frame 또는 단순한 framed screenshot으로 표현하고, 이미지 자체를 새로 생성하지 않는다.
- App Store / GitHub 링크가 실제 URL로 존재할 때만 CTA를 노출한다.

#### Next Challenge

- Date-navi와 반대 방향의 editorial composition으로 리듬을 만든다.
- Web / DB / Automation을 대표하는 실제 웹사이트, 관리자, 자동화 화면을 크게 보여준다.
- System / Automation / Outcome을 짧게 정리한다.
- 핵심 지표: 100+ Startups / Web + DB / Automation.
- 실제 홈페이지 링크를 명확한 CTA로 노출한다.

상세 프로젝트 내용은 완전히 삭제하지 않고 필요 시 접기/펼치기 또는 짧은 보조 블록으로 보존한다.

### 3. Experience

파일: `sections/experience.jsx`, `data.jsx`, `tokens.css`

- Paris 2024를 유일한 Featured Experience로 승격한다.
- 실제 Paris 2024 이미지를 와이드 배너로 사용하고 텍스트 오버레이로 `20+ VIP/day`, `Global Operations`, `Korea House`를 보여준다.
- Next Challenge, HUFS Marathon, NEOMA는 3개의 supporting experience로 압축한다.
- 동일한 카드 크기 반복 대신 이미지 비중과 텍스트 구조를 달리해 시각적 강약을 만든다.

### 4. Capabilities

파일: `sections/skills.jsx`, `data.jsx`, `tokens.css`

기존 Skills 나열을 아래 세 층으로 재구성한다.

- What I do: Product Planning / Business Operations / AI Workflow Design / Global Communication.
- Tools I use: Figma, Supabase, SQL, GA4, GitHub, React Native, AI/LLM 등 실제 사용 도구.
- Languages & Highlights: 퍼센트 진행바 제거. Korean — Native, English — Business working proficiency, French — Conversational 형태로 표기한다. 대표 성과는 App Store, Paris 2024, 5 Sponsors, 100+ Startups 중심으로 짧게 정리한다.

### 5. Contact / CTA

파일: `sections/contact.jsx`, `data.jsx`, `tokens.css`

- 기존 연락처 카드 느낌보다 하나의 큰 closing CTA block으로 재설계한다.
- 헤드라인: 사업과 기술이 실제 서비스로 만나는 지점을 강조한다.
- Resume / Contact를 primary-secondary CTA로 분리한다.
- Email / Phone / LinkedIn은 작은 정보 행으로 유지한다.
- 오래된 `2026.06부터 근무 가능` 문구는 현재 시점에 맞는 `즉시 근무 가능` 또는 영어 `Available immediately`로 교체한다.

## Data Cleanup

`data.jsx`에서 다음을 함께 정리한다.

- 현재 시점과 맞지 않는 availability 문구 제거.
- Next Challenge가 더 이상 재직 중이 아니라면 실제 종료 월로 수정한다. 확인 가능한 기존 사용자 컨텍스트 기준으로 무리하게 새 사실을 만들지 않는다.
- 중복 문장과 장문 설명을 줄이고 핵심 성과를 우선한다.
- 기존 ko/en 다국어 구조는 유지한다.

## Technical Constraints

- React 18 CDN + Babel Standalone + Tailwind CDN 구조 유지.
- 빌드 도구, Next.js, npm 기반 런타임으로 이전하지 않는다.
- 새 색상은 직접 하드코딩하지 않고 `tokens.css` 변수 또는 Tailwind token을 통해 사용한다.
- 외부 사용자 입력에 `dangerouslySetInnerHTML`을 추가하지 않는다.
- 새 UI 컴포넌트는 기존 `sections/` 구조 안에서 관리한다.

## Responsive Behavior

### Desktop (>= 1200px)
- Editorial split layout 적극 사용.
- Hero profile, project device collage, Paris featured banner를 크게 노출.

### Tablet (768–1199px)
- 2-column을 유지하되 visual width를 축소하고 floating panel 수/위치를 단순화한다.

### Mobile (~375px)
- 모든 핵심 섹션은 1-column.
- floating UI는 static supporting chips/cards로 전환.
- Project visual은 설명 다음에 배치.
- CTA와 stat strip은 세로 스택 또는 2열 grid로 전환.
- 텍스트 13px 이하 남발을 피한다.

## Verification

구현 완료 후 아래를 확인한다.

1. `python3 -m http.server 8080`으로 로컬 정적 서버 실행.
2. `/Portfolio.html`과 `/` 진입 확인.
3. 데스크탑 1200px+, 태블릿 768px, 모바일 375px에서 Hero → Contact 전체 육안 검증.
4. ko/en 언어 전환 후 레이아웃 파손 여부 확인.
5. reveal animation, hover, CTA 링크, Date-navi 미디어, Next Challenge iframe/이미지 로딩 확인.
6. 하드코딩 색상, 미사용 CSS, 오래된 availability 문구 검색.
7. Preview 배포에서 최종 시각 검증 후에만 main 반영.

## Out of Scope

- Next.js 또는 다른 프레임워크로 마이그레이션.
- 새로운 CMS/DB 도입.
- 프로젝트 내용의 대규모 신규 작성.
- 생성된 목업 속 가짜 앱/대시보드 화면을 실제 자산처럼 사용하는 것.
- production main 즉시 덮어쓰기.
