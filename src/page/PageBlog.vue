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
  