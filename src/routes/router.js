import { createWebHistory, createRouter } from "vue-router";
/* 라이브러리의 기본 함수를 가져온다. */
import PageMain from "../page/PageMain.vue";
import PageBlog from "../page/PageBlog.vue";
import PageDetail from "../page/PageDetail.vue";
import PageShop from "../page/PageShop.vue";

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
    path: "/blog/detail",
    component: PageDetail,
  },
  {
    path: "/shop",
    component: PageShop,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
