# Claude Cowork 교육 안내 페이지

GitHub Pages에 바로 올릴 수 있는 정적 웹사이트입니다.

- `index.html`: 과정별 링크로 접속하도록 안내하는 공통 화면(과정 목록 없음)
- `gasan-a/index.html`: 가산 A반 페이지
- `sinseoldong-b/index.html`: 신설동 B반 페이지
- `sungjin-hitech/index.html`: 성진하이텍 전용 페이지
- `assets/styles.css`: 공통 디자인
- `assets/app.js`: 커리큘럼 펼침 및 현재 메뉴 표시 기능
- `assets/knowledge-flow-hero-v2.png`: 첫 화면 지식 자산화 비주얼
- `resources/`: 추후 추가할 PDF 등 안내 파일

현재 공용 자료로 다음 파일이 연결되어 있습니다.

- `resources/claude-cowork-curriculum.pdf`: 상세 커리큘럼
- `resources/claude-cowork-pre-course-guide.pdf`: 교육 사전 안내

두 파일은 가산 A반과 신설동 B반 페이지 모두에서 열립니다. 내용을 갱신할 때 같은 영문 파일명으로 덮어쓴 후, 각 페이지의 CSS·스크립트 버전 번호를 올리면 브라우저 캐시를 피할 수 있습니다.

## 2026-09-01 화면 개편

참고 교육 사이트의 정보 구조를 바탕으로 다음 항목을 개선했습니다.

- 첫 화면에서 교육 목표·일정·장소·필수 준비물을 바로 확인
- `강사 시연 → 함께 실습 → 내 업무 적용` 수업 방식 안내
- 3일 학습 여정과 교육 후 결과물을 별도 영역으로 구성
- 상세 커리큘럼은 펼쳐보기 방식으로 유지
- 과정별 색상과 정보는 구분하되 다른 과정으로 이동하는 링크는 배치하지 않음
- 휴대전화 화면에서도 일정과 준비물을 빠르게 읽을 수 있도록 반응형 구성

### 2차 디자인 개편

- 생성형 AI 교육 내용을 표현한 전용 이미지를 첫 화면에 배치
- 짙은 녹색·아이보리·코랄을 활용한 편집 디자인 스타일 적용
- 반복되는 사각 카드 대신 번호 목록, 원형 학습 흐름, 선형 일정표와 자료 목록 사용
- 일정 안내는 이미지 위에 겹치는 티켓 형태로 구성

현재 CSS와 스크립트 캐시 버전은 `20260901-7`입니다. 디자인이나 기능 파일을 수정한 뒤에는 세 과정의 `index.html`에 있는 `?v=20260901-7` 값을 새 번호로 함께 변경하세요.

## 과정별 공유 주소

- 가산 A반: `https://계정명.github.io/gasan-a/`
- 신설동 B반: `https://계정명.github.io/sinseoldong-b/`
- 성진하이텍: `https://계정명.github.io/sungjin-hitech/`

각 과정 페이지에는 다른 과정이나 공통 화면으로 이동하는 링크가 없습니다. 단, GitHub Pages는 공개 웹사이트이므로 주소를 아는 사람의 직접 접근 자체를 차단하는 기능은 아닙니다.

## 자료 링크 추가

각 과정의 `index.html` 하단 `MATERIALS` 영역에 수정 위치를 설명하는 주석이 있습니다. Notion 주소 또는 `resources` 폴더의 파일 경로를 입력하고 `is-disabled`, `aria-disabled` 속성을 삭제하세요.

## GitHub Pages 공개

이 폴더의 파일을 GitHub 저장소 최상위에 올린 뒤 저장소의 **Settings → Pages**에서 배포 원본을 기본 브랜치의 루트 폴더로 지정하면 됩니다.
