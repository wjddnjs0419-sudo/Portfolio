# PLAN.md

완료된 계획은 `RESULT.md`에 세부 구현 내용과 검증 결과가 기록되어 있으므로, 이 파일에는 활성/예정 작업만 유지합니다. 완료 항목은 `[Done]` 한 줄로 축약하고, 10개를 넘으면 가장 오래된 완료 항목부터 삭제합니다. **기술 부채 항목은 완전히 해결 전까지 절대 삭제/압축 금지.**

---

## Pending Approval

- GitHub/Vercel 배포 준비 — `.gitignore`, `vercel.json` 추가 후 Git 초기화, 원격 `wjddnjs0419-sudo/Portfolio` 연결, 첫 커밋/푸시 및 Vercel 배포 진행 (2026-06-10)
---

## Done

- [Done] Track 3 기술 부채 정리 — `.drift` 미사용 CSS 제거, Tailwind 색상/그림자 토큰을 `tokens.css` 기반으로 통합, Experience 오버레이 토큰 정리, 브라우저 검증은 사용자 요청으로 생략 (2026-06-10)
- [Done] Experience 카드 배경 사진 적용 — `sections/experience.jsx`에 4개 에셋 자동 매핑, 반투명 오버레이로 텍스트 가독성 유지, 브라우저 검증 완료 (2026-06-10)
- [Done] Experience 가독성 보정 — 배경 이미지 opacity 추가 하향, 오버레이 강화, 텍스트 그림자 추가 (2026-06-10)
- [Done] Experience 텍스트 그림자 강화 — `text-shadow` 농도/퍼짐 반경 확대 (2026-06-10)
- [Done] 3개국어 Stats 수정 — value/suffix/sub 변경, LANGUAGES French 표기 통일. 브라우저 검증 ✅
- [Done] Hero 2열 레이아웃 — `md:grid-cols-[1fr_340px]`, 우측 증명사진(`profile-nobg.png`) 하단 페이드 아웃. 브라우저 검증 ✅
- [Done] BrowserShowcase 컴포넌트 — 4탭(홈페이지 iframe, 관리자 페이지, 디자인 시스템, 키비주얼 포스터). 브라우저 검증 ✅
- [Done] Experience 데이터 업데이트 — Next Challenge 추가(2026.04→Present), 5개 카드 org/role/period 정리. 브라우저 검증 ✅
- [Done] Featured Work 홈페이지 주소 동기화 — `data.jsx`의 `url`과 `media[0].src`를 `https://ncf-aroundx.com/`로 통일, 서버 응답 및 브라우저 캐시 상태 확인 (2026-06-10)
- [Done] 점 장식 제거 + 아이콘 단순화 — Nav/Hero/Contact/Preview의 장식성 점 제거, `assets/ui-icons.svg` 스프라이트 기반 심플 SVG 아이콘으로 통일, 데스크탑·태블릿·모바일 검증 완료 (2026-06-10)
