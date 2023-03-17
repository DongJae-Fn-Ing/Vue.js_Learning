<template>
  <!-- $route.params.id -->
  <!-- /:작명  << 이부분 라우터의 정보를 꺼내오는 함수
$route.params.작명
 -->
  <p>임시로 만든 디테일 페이지</p>
  <h5>{{ dataFile[$route.params.id].title }}</h5>
  <p>{{ dataFile[$route.params.id].content }}</p>
  <button
    class="deep-btn"
    type="button"
    @click="$router.push(`/blog/detail/` + $route.params.id + `/deep`)"
  >
    상세 보여주기
  </button>
  <!-- nested routes 보여주는 법 -->
  <router-view></router-view>
</template>

<script>
export default {
  name: "PageDeatil",
  props: {
    dataFile: Object,
  },
};
</script>

<style>
.deep-btn {
  background: #ddd;
}
</style>