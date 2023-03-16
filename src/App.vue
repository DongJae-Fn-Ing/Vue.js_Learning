<template>
  <TestHeader />
<!--   <router-link to="/">main</router-link>
  <router-link to="/blog">blog</router-link>
  <router-link to="/shop">shop</router-link> -->
  <!-- <PageShop /> -->
  <router-view></router-view>
  <!--   라우팅 하위 컴포넌트에 props를 하고 싶은 경우
  <router-view:여기에 props해주면 된다.></router-view> -->
</template>

<script>
import "../public/global.css";
/* import PageShop from "./page/PageShop"; */
/* import PageBlog from "./page/PageBlog"; */
import TestHeader from "./components/TestHeader";

export default {
  name: "App",
  data() {
    return {};
  },

  methods: {},

  components: {
    TestHeader,
    /* PageShop */
    /*     PageBlog, */
  },
  mounted() {},
};
</script>

<style>
</style>
