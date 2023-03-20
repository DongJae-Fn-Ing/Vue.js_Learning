import { createWebHistory, createRouter } from "vue-router";
/* 라이브러리의 기본 함수를 가져온다. */
import PageMain from "../page/PageMain.vue";
import PageBlog from "../page/PageBlog.vue";
import PageDetail from "../page/PageDetail.vue";
import PageShop from "../page/PageShop.vue";
import PageDetailDeep from "../page/PageDetailDeep.vue";
import PageInsta from "../page/instagram/PageInsta.vue";
import PageTab from "../page/PageTab.vue";

const routes = [
  {
    path: "/",
    component: PageMain,
  },
  {
    path: "/blog",
    component: PageBlog,
  },
  {
    path: "/blog/detail/:id",
    component: PageDetail,
    children: [
      {
        path: "deep",
        component: PageDetailDeep,
      },
    ],
    /* nested routes 만드는 법 */
    /*     children: [
      {
        path: "작명",
        무조건 상대경로라 
        앞에 /대신 ""로 감싸준다.
        component: improt한 파일,
      },
      {
        path: "/작명2",
        component: improt한 파일2,
      },
      경로를 여러개 만들고 싶을 땐 이런식으로
      
      즉 라운팅 안에서 라운팅을 나누는 것이다
    ] */
  },
  /* {
    path: "/blog/detail/:id(정규식을 작성 가능 ex) 숫자만 입력 가능하게)",
    path: "/blog/detail/:id* *=== 작명하는 걸 반복
    더 알고 싶으면 vue-router4참고
    component: PageDetail,
  }, */
  {
    path: "/shop",
    component: PageShop,
  },

  /* 404페이지를 만들고 싶으면 */
  /* 정규식을 통해 문자를 입력 받으면 아래 경로 안내하게 해라 */
  /* {
    path: "/:anything(.*)",
    component: 404page < 컴포넌트를 만들고,
    그리고 위에 쓸쑤록 우선권을 가진다
  }, */
  {
    path: "/insta",
    component: PageInsta,
  },
  {
    path: "/tab",
    component: PageTab,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
