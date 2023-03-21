<template>
  <TestHeader />
  <router-view :dataFile="dataFile"></router-view>
  <!--   라우팅 하위 컴포넌트에 props를 하고 싶은 경우
  <router-view:여기에 props해주면 된다.></router-view> -->
</template>

<script>
import "../public/global.css";
/* import PageShop from "./page/PageShop"; */
/* import PageBlog from "./page/PageBlog"; */
import TestHeader from "./components/TestHeader";
import DummyTwo from "./assets/dummyTwo";

export default {
  name: "App",
  data() {
    return {
      dataFile: DummyTwo,
    };
  },

  methods: {},

  components: {
    TestHeader,
  },
  mounted() {},
};
</script>

<style>
</style>
