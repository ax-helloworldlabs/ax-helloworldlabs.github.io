추가 안내 자료를 이 폴더에 넣어주세요.

예시:
  resources/가산A반-교육안내.pdf
  resources/신설동B반-교육안내.pdf

파일을 넣은 뒤 해당 과정의 index.html에서 "교육 안내 자료"를 찾아
href="#"를 href="../resources/파일명.pdf"로 변경하고,
class의 is-disabled와 aria-disabled="true"를 삭제하면 링크가 활성화됩니다.

Notion 강의자료 링크도 같은 위치의 "강의 자료" 카드에서 href를 교체하고
is-disabled와 aria-disabled="true"를 삭제하면 됩니다.
