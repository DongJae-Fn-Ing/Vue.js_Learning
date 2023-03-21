<template>
  <div
    @click="fire"
    :class="filterClass + ` filter-item`"
    :style="{ background: `url(${uploadFile}) no-repeat center / cover` }"
  >
    <slot></slot>
    <!-- slot 문법 -->
    <!-- 원하는 곳에 slot 태그를 만든다.  자식은 구멍 뚫기-->
    <!--     부모 컴포넌트를 html형식으로 만들고 그 사이에 입력을 해주면
    그대로 slot 자리에 데이터가 들어간다 -->
    <!--     왜 slot 말고 props를 써? slot은 html 태그 안에서만 가능 다른 곳에서 불가능 -->
    <!--     slot을 여러개 쓰려면
    <slot name="a"></slot>
    <slot name="b"></slot> -->
    <!-- 이렇게 만들고 -->
    <!--     부모로 가서
    <template v-slot:a> 이렇개 name a라는 slot로 데이터가 간다.</template> -->
    <!--     여러개 바인딩 할거면 그냥 props 써라 -->
  </div>
  <!-- class 속성을 두개 넣을 수 있다 -->
</template>

<script>
export default {
  name: "FilterBox",

  props: {
    uploadFile: String,
    filterClass: Array,
  },
  methods: {
    fire() {
      this.emitter.emit("filterClassData", this.filterClass);
      /* 전체적으로 사용할 변수 .emit('작명','데이터') */
      /* 이벤트 발사하는 법 */
      /* 커스텀 이벤트랑 비슷 */
      /* 받는 곳 쓰는 법 */
      /*       받는 위치에 
    mounted() {
      this.emitter.on('작명한 거', ()=>{
        자바스크립트 이벤트 리스너랑 비슷
      });  
      }, */
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  cursor: pointer;
  background-size: cover;
  background-position: center;
}
</style>