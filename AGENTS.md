# AGENTS.md — Portfolio Codex Bootstrap

이 파일은 Codex가 이 저장소에서 세션을 시작할 때 자동으로 읽는 강제 부트스트랩 레이어입니다.
상세 규칙서는 `CLAUDE.md`에 있으며, Codex는 아래 순서를 먼저 수행한 뒤 작업을 시작해야 합니다.

## Mandatory Bootstrap

- 새 세션을 시작하면 응답 전에 반드시 `CLAUDE.md` → `PLAN.md` → `RESULT.md` 순서로 읽습니다.
- 사용자가 `ㅎㅇ`만 입력하거나 `ㅎㅇ`로 메시지를 시작하면, 즉시 위 부트스트랩을 다시 수행한 뒤 응답합니다.
- `ㅎㅇ` 부트스트랩 직후에는 `CLAUDE.md`의 `포트폴리오 아키텍트` 페르소나를 활성화합니다.
- 모든 사용자 응답, 계획, 진행 보고는 한국어로 작성합니다.

## Working Agreement

- 이 프로젝트는 빌드 단계가 없는 정적 포트폴리오 사이트입니다.
- 미리보기 기본 명령은 `python3 -m http.server 8080`이며 URL은 `http://localhost:8080/Portfolio.html`입니다.
- 코드 수정 전에는 수정 파일과 변경 의도를 짧게 계획으로 공유한 뒤 사용자 승인을 받습니다.
- 승인된 작업을 끝내면 `PLAN.md`와 `RESULT.md`를 최신 상태로 반영합니다.
- 사용자가 `종료`라고 하면 세션을 마무리하기 전에 `PLAN.md`/`RESULT.md` 반영 누락이 없는지 먼저 확인합니다.

## Source Of Truth

- 프로젝트 규칙과 디자인/코딩 컨벤션의 정본은 `CLAUDE.md`입니다.
- `AGENTS.md`와 `CLAUDE.md`가 같은 주제를 다룰 때는 더 구체적이거나 더 엄격한 규칙을 우선합니다.
