# kdjvue
학습용

 설치 
 vs-code 및 powershell 모든 관리자 권한으로 실행할 것 
 node.js 설치 (최신버전 권장)
 터미널에서 npm install -g @vue/cli 
 설치가 끝났으면 터미널에서 vue create 프로젝트명 입력 
 실행하고 싶을 땐 터미널에서 npm run serve 

 보안 오류시
 1.윈도우 검색메뉴 (돋보기) - powershell 검색 - 우클릭 - 관리자 권한으로 실행한 뒤 Set-ExecutionPolicy Unrestricted 입력 후 Y로 변경
 2.환경 변수 설정 / 시스템 변수에서 사용자명에 대한 사용자 변수에서 새로 만들기 > 새 사용자 변수 생성 
 이름은 npm 변수 값은 C:₩User₩사용자명₩AppData₩Roaming₩npm 추가
 시스템 변수 탭 / Path / 편집 / 새로 만들기 /  C"\nodejs\ 추가

 http://softzone205.blogspot.com/2018/02/10-node-npm.html 참고
  
 3.vs-code 관리자 권한으로 실행 후 터미널에서 아래 순서대로 입력
 get-executionpolicy // 확인
  
 set-executionpolicy remotesigned // 체크
  
  
 get-executionpolicy // 확인

 터미널은 기본 powershell로 할 것 위에 해결책이 불가능할 시 터미널을 bash나 다른 것으로 수정
 
