<template>
  <ul class="menu-list">
    <li v-for="(a, i) in dataFile" :key="i">
      <!--       <h5>
        <router-link to="/blog/detail/"
          >{{ a.number }} {{ a.title }}</router-link
        >
      </h5> -->
      <!-- 위에 같은 방식이 있고 -->
      <h5 @click="$router.push(`/blog/detail/` + i)">
        {{ a.number }} {{ a.title }}
      </h5>
      <!-- 이런 방식으로 한다. -->

      <!-- $router.push 경로로 이동-->
      <!-- 라우터 페이지 함수 -->
      <!-- router랑 route랑 혼동하지 말것 -->
      <!-- $route는 현재 url에 관련된 변수를 알려준다.
      $route.fullpath는 현재 경로를 알려주는
       -->
      <!-- $router 페이지 자체 및 페이지 이동관련 기능 -->
      <!-- $router.go(1) 앞으로 한페이지 -->
      <!-- $router.go(-1) 뒤로 한페이지 -->
      <!-- $router.go(숫자) 숫자 만큼 양수 음수 다가능 -->
      <!-- https://codingapple.com/course-status/ 추가 공부할 것 -->
      <!-- https://codingapple.com/course-status/ -->
      <!-- 나중에 배포 연습할 것 -->
      <p>{{ a.date }}</p>
      <p>{{ a.content }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListCom",
  data() {
    return {};
  },
  methods: {},
  components: {},
  props: {
    dataFile: Object,
  },
};
</script>

<style>
.menu-list {
  width: 500px;
  margin: 30px auto;
}

.menu-list li {
  background: rosybrown;
}

.menu-list li:not(:last-child) {
  margin-bottom: 20px;
}

.menu-list li h5 {
  text-decoration: underline;
  cursor: pointer;
}

.menu-list li p {
  margin: 12px 0;
}
</style>