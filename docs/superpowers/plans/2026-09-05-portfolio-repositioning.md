# Portfolio Repositioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 기존 Trust Blue UI와 bilingual 구조를 유지하면서 포트폴리오의 첫인상을 Business · Product · AI · Global 중심으로 재편한다.

**Architecture:** 현재 정적 React 18 + Babel CDN 구조를 유지한다. 콘텐츠는 `data.jsx`에서만 교체하고, 프로젝트/경험 컴포넌트는 기존 데이터 소비 방식과 카드 레이아웃을 재사용한다. Figma `Reference Screens`의 Date-navi Home·Recommendation Result 화면과 제공된 코스 생성 MP4를 기존 `BrowserShowcase`에 연결하고, 이미지가 없는 경험 카드만 안전하게 렌더링하도록 조건부 배경 처리를 추가한다.

**Tech Stack:** React 18 UMD, Babel Standalone, Tailwind CSS CDN 3.4, Pretendard Variable, static HTML/CSS/JSX.

**Spec:** `/Users/jeongwonkim/.codex/attachments/dd336608-14c6-40d0-bc27-213f6392ea2f/pasted-text.txt`

## Global Constraints

- 기존 디자인 시스템과 전체적인 visual identity는 유지한다.
- 대규모 UI 리디자인을 하지 않는다.
- 기존 responsive behavior를 깨뜨리지 않는다.
- 한국어/영어 bilingual 구조를 유지한다.
- 기존 컴포넌트 재사용을 최우선으로 한다.
- Veggie Korea는 이번 포트폴리오에 추가하지 않는다.
- Date-navi를 최우선 Featured Project로 배치한다.
- 확인되지 않은 사용자 수·매출·KPI·언어 자격을 추가하지 않는다.
- Date-navi 에셋은 제공된 Figma `Reference Screens`의 실제 화면과 사용자가 제공한 실제 동영상을 사용하고, temporary placeholder나 랜덤 stock image를 사용하지 않는다.
- 개발자 포지셔닝 대신 개발까지 이해하고 구현할 수 있는 사업·서비스기획형 인상을 유지한다.

---

### Task 1: 콘텐츠 정본과 Featured Project 재편

**Files:**
- Modify: `data.jsx`

**Interfaces:**
- Consumes: 기존 `PROFILE`, `COPY`, `STATS`, `PROJECTS`, `EXPERIENCES`, `SKILLS`, `LANGUAGES` 전역 데이터 계약.
- Produces: 기존 컴포넌트가 그대로 소비할 수 있는 동일한 데이터 키와 Date-navi 1순위 프로젝트.

- [x] `PROFILE`의 `location`, `roleFocus`, `strengths`와 `COPY.hero`를 Business · Product · AI · Global 메시지로 교체한다.
- [x] `COPY.sections.projects`, `experience`, `skills`, `contact`를 새 포지셔닝에 맞게 교체하고 KO/EN 키를 모두 유지한다.
- [x] `STATS`를 App Store 출시, 100+ 스타트업 운영, Paris 2024, HUFS 스폰서 5개사처럼 PRD에서 확인된 사실 중심으로 재구성한다.
- [x] `PROJECTS`의 첫 항목으로 Date-navi를 추가한다. Problem, Solution, Product Architecture, Iteration, Outcome을 기존 `sections`, `metrics`, `badges` 스키마에 맞춰 작성한다.
- [x] Date-navi의 추천 파이프라인은 제품 관점의 7단계 설명으로 축약하고, 2~3초 → 0.3~0.6초 개선·App Store 출시·Kakao Map 기능만 사실로 기록한다.
- [x] Figma `Reference Screens`에서 export한 Home·Recommendation Result PNG와 `assets/date-navi/Course generate video.mp4`를 Date-navi `media`에 연결한다.
- [x] Next Challenge를 Growth/Marketing 중심이 아닌 Business Operations · Digital Product · Automation 관점으로 재작성하고 뉴스 모니터링 자동화 사실을 포함한다.
- [x] `EXPERIENCES`를 NCF → Paris 2024 → HUFS Marathon → NEOMA 순으로 구성하고 각 경험을 Global Customer Experience/Event Operations, Business Development/Sponsorship, Global Communication 관점으로 재작성한다.
- [x] L’Oréal과 Sports Retail의 마케팅 중심 카드를 핵심 Experience에서 제거하고, 확인 가능한 L’Oréal 준결승 사실은 Skills 하이라이트에 남긴다.
- [x] `SKILLS` 그룹을 Product, AI, Data/Tech, Design, Business로 재편하고 `LANGUAGES`를 Korean Native, English Business level, French Intermediate로 낮춰 실제 검증 범위를 넘지 않게 한다.

### Task 2: Skills 그룹 확장과 이미지 없는 Experience 카드의 안전한 렌더링

**Files:**
- Modify: `sections/experience.jsx`
- Modify: `sections/skills.jsx`

**Interfaces:**
- Consumes: Task 1에서 추가되는 `EXPERIENCES` 항목과 기존 `EXPERIENCE_BACKGROUNDS` 매핑.
- Produces: 배경 에셋이 있는 카드는 기존 배경/오버레이를 유지하고, 없는 카드는 이미지 없이 동일 카드 구조로 렌더링.

- [x] `SKILL_ICONS`에 기존 SVG 아이콘만 사용해 Product, AI, Data/Tech, Design, Business 5개 그룹을 안전하게 매핑한다.
- [x] `EXPERIENCE_BACKGROUNDS[e.id]`가 있을 때만 `<img>`와 오버레이를 렌더링한다.
- [x] 기존 이미지 카드의 `objectFit`, `objectPosition`, opacity, text shadow와 카드 레이아웃은 변경하지 않는다.
- [x] Figma에서 제공된 실제 화면과 사용자가 제공한 실제 동영상만 사용하고, Date-navi 에셋을 추측하거나 placeholder 이미지를 만들지 않는다.

### Task 3: 계획/세션 문서 최신화

**Files:**
- Modify: `PLAN.md`
- Modify: `RESULT.md`

**Interfaces:**
- Consumes: Task 1~2의 실제 변경 내역과 검증 결과.
- Produces: 다음 세션에서 재개할 수 있는 완료 기록과 Figma 에셋 출처·검증 내역.

- [x] `PLAN.md`의 `Pending Approval`에 이번 작업을 기록하고 구현 승인 후 `[Done]` 항목으로 압축한다.
- [x] `RESULT.md`에 수정 파일, 포지셔닝 변경, Date-navi 미디어 출처, 검증 명령과 결과를 기록한다.
- [x] 새 규칙이 확립되지 않았으므로 `CLAUDE.md`는 수정하지 않는다.

### Task 4: 정적 사이트 검증

**Files:**
- Verify: `Portfolio.html`
- Verify: `index.html`
- Verify: `data.jsx`
- Verify: `sections/experience.jsx`

- [x] `node --check - < data.jsx` 성공 및 변경된 JSX의 브라우저 Babel transpile/render를 확인한다.
- [x] `python3 -m http.server 8080`으로 로컬 서버를 실행한다.
- [x] 브라우저에서 `Portfolio.html`을 열어 Hero, Featured Work, Experience, Skills, Contact가 KO/EN 모두 렌더링되는지 확인한다.
- [x] Date-navi가 첫 번째 프로젝트인지, Figma 화면 2종과 실제 MP4가 로드되는지, Veggie Korea 문자열과 broken image가 없는지 확인한다.
- [x] 데스크톱 1200px 이상, 태블릿 768px, 모바일 375px에서 카드/언어 전환/스크롤 reveal이 유지되는지 확인한다.
