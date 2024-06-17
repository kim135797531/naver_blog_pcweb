Naver Blog Switch to PC Web (Chrome Extension)
===========

데스크톱에서 네이버 블로그 들어갔을 때 모바일 페이지가 아닌 자동으로 PC버전으로 보여지게 하기

Chrome 웹 스토어 링크: https://chromewebstore.google.com/detail/naver-blog-pc-web/ecildldnhbnojdochfachamphkehhifd?hl=ko

개요 (라고 할 게 있나..)
----

왜 데스크톱에서 다 깨진 모바일 블로그를 봐야 되는걸까요?

스크롤 맨 밑으로 내려서 PC버전으로 보기 버튼 누르기 귀찮아서 만들었습니다.

모바일 블로그 들어가면 데스크톱 페이지로 자동 리다이렉트 합니다.

변경점 (이라고 할 게 있나......)
---
* 0.3.2 - 정확히 m.naver.com/ 일때는 m을 지우기 (선택 사항)
* 0.3.1 - blog.naver.com 서브도메인 아래에 clip과 moment이 있는 경우 m을 제거하지 않음
* 0.3 - Redirect 이력 없애기
  * window.location = url에서 window.location.replace(url)으로 변경
  * Manifest v3 사용
  * 블로그, 카페, 지도 전부 기본 사용으로 설정
* 0.2.1 - URL에 PostView.naver가 있는 경우엔 m 빼고 안 되서 PostView.nhn으로 바꿔 줌
* 0.2 - 페이지 로딩 전에 이동하게 함
* 0.1.1 - 블로그 뿐만 아니라 카페랑 지도도 이동하게 하긴 했는데 잘 작동하는지는 모름 (...)
* 0.1 - 첫 버전
