# Claude Cowork 교육 안내 페이지

GitHub Pages에 바로 올릴 수 있는 정적 웹사이트입니다.

- `index.html`: 과정 선택 화면
- `gasan-a/index.html`: 가산 A반 페이지
- `sinseoldong-b/index.html`: 신설동 B반 페이지
- `assets/styles.css`: 공통 디자인
- `assets/app.js`: 커리큘럼 펼침 기능
- `resources/`: 추후 추가할 PDF 등 안내 파일

## 자료 링크 추가

각 과정의 `index.html` 하단 `MATERIALS` 영역에 수정 위치를 설명하는 주석이 있습니다. Notion 주소 또는 `resources` 폴더의 파일 경로를 입력하고 `is-disabled`, `aria-disabled` 속성을 삭제하세요.

## GitHub Pages 공개

이 폴더의 파일을 GitHub 저장소 최상위에 올린 뒤 저장소의 **Settings → Pages**에서 배포 원본을 기본 브랜치의 루트 폴더로 지정하면 됩니다.
