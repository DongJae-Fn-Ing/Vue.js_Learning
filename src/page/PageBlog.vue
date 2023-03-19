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



/*   라우터 hash mode 

  기존 라우터 셋팅
  import { createRouter, createWebHistory } from 'vue-router'

const router = [];
const router = createRouter({
  history: createWebHistory(),
  routes,
})



import { createRouter, createWebHashHistory } from 'vue-router'

const router = [];
const router = createRouter({
  history: createWebHashHistory(),
  이 부분을 createWebHashHistory() 바꾸는 것을 
  hashmode라 한다.
  routes,
})


서버가 있는 경우 - HTML5 mode

HTML5 mode는 url에 입력을 하면
Vue router로 /detail을 보여주세요~가 아니라
서버에 /detail 페이지를 요청해주세요~ 라는 뜻



- Hash mode를 선택한 경우

hash mode의 장점은 일단 URL에 #이 붙은 채로 시작한다.
왜 # 이걸 붙이냐면 URL에서 # 뒤에 있는 내용들은 절대 서버로 전달되지 않음


그래서 서버가 라우팅을 채가는 일을 방지할 수 있고
Vue router에게 온전히 라우팅을 맡길 수 있는 있다. 
그래서 님들이 서버가 없으면 # 붙는 hash 라우터로 사이트를 만드는 것도 좋은 선택


Navigation guards

특정 URL로 접속할 때 뭔가 코드를 실행하고 싶은 경우가 있다.
예를 들어서 마이페이지를 만들었는데 이걸 로그인한 사람만 보여주고 싶은 경우

라우팅해주기 전에 "니 로그인했냐" 이런 코드를 실행해야합니다. 
그럴때 navigation guard를!



const routes = [
  {
    path: "/hello",
    component: HelloWorld,
    beforeEnter: ()=>{
      if (로그인했냐 == false) {
        return '/login'
      }
    }
  }
];

이런식으로


const routes = [
  {
    path: "/hello",
    component: HelloWorld,
    beforeEnter: (to, from)=>{
      return to.fullPath
    }
  }
];

파라미터는 두세개 작명이 가능한데
첫 파라미터는 목적지 페이지, 
둘째 파라미터는 출발 페이지임. 

그리고 그것들은 $route라는 변수랑 똑같이 이용가능.
to.fullPath하면 전체 경로를 알려주고
to.params.id 하면 id 파라미터를 알려준다. 
참고로 return false는 라우팅 중단,
return이 없으면 그냥 원래의 route인 /hello로 잘 이동시킴.


여러개의 route에 같은 navigation guard를 추가하고 싶으면
router라는 변수에다가 .beforeEach() 이런거 쓰시면 된다.

내부엔 함수가 들어가는데 사용법은 아까랑 똑같다.

 
 const router = createRouter({ 어쩌구 })
router.beforeEach((to, from) => {
  //페이지 변경 전에 실행할 코드
})
 


라우팅 전에 뭔가 실행하고 싶으면 beforeEach() 혹은 beforeResolve()를 쓰면 되고
라우팅 하고나서 뭔가 실행하고 싶으면 afterEach() 쓰면 양호




Vue 컴포넌트 안에서도 navigation guard 쓸 수 있음
vue 파일 안에서도 페이지 이동시 뭔가 코드를 실행가능
created() mounted() 이런거랑 비슷하게 활용가능

beforeRouteEnter(){}
beforeRouteUpdate(){} 
라는 것들을 lifecycle hook쓰는 위치에다가 쓰면 

파라미터는 두개 입력가능한데 각각 목적지인 to, 출발지인 from을 의미함.

특정 페이지로 접속했을 때 ajax 요청하고 그럴 일이 있으면 저기다가 써라

  */