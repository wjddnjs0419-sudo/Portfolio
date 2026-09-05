# PLAN.md

완료된 계획은 `RESULT.md`에 세부 구현 내용과 검증 결과가 기록되어 있으므로, 이 파일에는 활성/예정 작업만 유지합니다. 완료 항목은 `[Done]` 한 줄로 축약하고, 10개를 넘으면 가장 오래된 완료 항목부터 삭제합니다. **기술 부채 항목은 완전히 해결 전까지 절대 삭제/압축 금지.**

---

## Pending Approval

- [Review] 포트폴리오 비주얼 리디자인 — `feat/portfolio-visual-redesign`에서 Hero / Featured Work / Paris 2024 Experience / Capabilities / Closing CTA 구현 및 1280·768·375px Chromium 검증 완료. Draft PR #1에서 사용자 시각 검토 후 `main` 반영 여부 결정 (2026-09-05)

---

## Done

- [Done] Experience 섹션 줄바꿈 보정 — 제목을 의미 단위로 2줄 분리하고 데스크톱 설명을 한 줄로 표시, 모바일 자연스러운 줄바꿈과 overflow 없음 확인 (2026-09-05)
- [Done] Vercel Production 재배포 — `jeongwon-kim-s-projects/portfolio`에 최신 콘텐츠·미디어를 배포하고 `READY` 상태 및 기존 production alias 연결 확인 (2026-09-05)
- [Done] Next Challenge 미디어 에셋 교체 — 사용자 제공 스크린샷 3종을 assets에 저장하고 관리자 페이지 화면·반복 업무 자동화·Figma 기반 랜딩페이지/UI 설계 제목으로 연결, 기존 3개 이미지 삭제 및 브라우저 렌더링 확인 (2026-09-05)
- [Done] Portfolio Repositioning PRD v1.0 — Business · Product · AI · Global 포지셔닝, Date-navi Featured Project 추가, Next Challenge/Experience/Skills/Contact 콘텐츠 재편 및 반응형/KO·EN 검증 완료 (2026-09-05)
- [Done] Track 3 기술 부채 정리 — `.drift` 미사용 CSS 제거, Tailwind 색상/그림자 토큰을 `tokens.css` 기반으로 통합, Experience 오버레이 토큰 정리, 브라우저 검증은 사용자 요청으로 생략 (2026-06-10)
- [Done] Experience 카드 배경 사진 적용 — `sections/experience.jsx`에 4개 에셋 자동 매핑, 반투명 오버레이로 텍스트 가독성 유지, 브라우저 검증 완료 (2026-06-10)
- [Done] Experience 가독성 보정 — 배경 이미지 opacity 추가 하향, 오버레이 강화, 텍스트 그림자 추가 (2026-06-10)
- [Done] Experience 텍스트 그림자 강화 — `text-shadow` 농도/퍼짐 반경 확대 (2026-06-10)
- [Done] 3개국어 Stats 수정 — value/suffix/sub 변경, LANGUAGES French 표기 통일. 브라우저 검증 ✅
- [Done] Hero 2열 레이아웃 — `md:grid-cols-[1fr_340px]`, 우측 증명사진(`profile-nobg.png`) 하단 페이드 아웃. 브라우저 검증 ✅
