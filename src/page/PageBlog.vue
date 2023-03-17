<template>
  <div class="con">
    <List :dataFile="info" />
  </div>
</template>

<script>
import List from "@/components/List";
import dummyTwo from "../assets/dummyTwo";
export default {
  name: "PageBlog",
  data() {
    return {
      info: dummyTwo,
    };
  },
  methods: {},
  components: {
    List,
  },
};
</script>

<style>
.con {
  width: 100%;
}
</style>


/* 2023.03.16 라우터를 배워보자 */
/* npm install vue-router@4
라우터 패키지 설치후 
main.js에 가서
createApp(App).mount('#app') 이 부분을
createApp(App).use(라우터 만든거).mount('#app') 삽입을 해주고
/* 라우트 파일 만들어서 main.js에 import 해준다. */
어디에서 보여줄지를<router-view></router-view>로 만들어준다
  <router-view></router-view>
<!--   라우팅 하위 컴포넌트에 props를 하고 싶은 경우
  <router-view:여기에 props해주면 된다.></router-view> --> */

/*   페이지로 나누고 싶으면 페이지를 하나의 컴포넌트로 만들면 된다. */
/* 
  <router-link to="/경로">이름작명</router-link>
  a태그 같이 라우터를 이동시키는 태그를 만들 수 있다 */
  
  /* 2023.03.17 라우터 심화 */
  /* 상세 페이지를 여러개 만드는 법 */
  /* 하나의 페이지로 여러가지 페이지를 만들 수 있다 */
  디테일 페이지 경로를 만들경우
  /detail/x로 접속하면 x번 게시판 보여주기

    {
    path: "/blog/detail/:작명",
    이런식으로 작성해주기
    component: PageDetail,
  },
  /* url 파라미터 문법 이러면 */



  /* nested routes  */
  /* 비숫하지만 요소가 추가된 페이지를 만들고 싶을 때
  예를 들어 댓글창 
  모달창 비슷하게 생각하면 되지만
  굳이 페이지로 나눌때 */