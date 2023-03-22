<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input class="f-input" placeholder="돋보기" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div
        class="profile"
        :style="{ background: `url(${a.image}) no-repeat center / cover` }"
      ></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import {
  /* computed, */ onMounted,
  /* reactive, */ ref,
  toRefs /*  watch  */,
} from "vue";
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "MyPage",
  props: {
    one: Number,
  },
  setup(props) {
    /* created라는 생명주기 훅이랑 비슷 */
    /* 이 안에서 데이터 생성, 조작,
    methods, computed,watch등
    hook등등 모든 걸 만들 수 있다*/
    /* 긴 프로젝트에서 관련있는 코드들을 한번에 볼 수 있다 */

    let follower = ref([]);

    /* 데이터 생성법 무조건 ref에 담아라*/
    /* ref 왜씀 ? 실시간 랜더링을 위해 */

    /*     let test = reactive({name: 'kim'})
    ref랑 똑같은 기능 데이터를 만든다. */

    /* props 사용법 */
    /* setup에 파라미터는 props을 받아온다 */

    /* let one = ref(props) */

    /* 아래는 여러개 */
    let { one } = toRefs(props);
    console.log(one.value);
    /* 사용할 때 무조건 value */

    onMounted(() => {
      /* 마운트 할 때 쓰고 싶으면 이런식으로 */

      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
      });
    });

    /* 
    watch 사용법
    watch(감시할거,()=>{
      실행할 코드
    }) */

    /*     computed 사용법
    computed(()=>{
      return 연산 결과
    }) */

    /* vuex 사용법 */
    let store = useStore();
    console.log(store.state.names);
    /* composition api에서 mapState못씀 */







    /* 여기있는 안에 데이터는 무조건.value */

    return { follower };
    /* 위에서 쓰려면 무조건 이런식으로 리턴해라 */
  },
};
</script>

<style>
.f-input {
  border: 1px solid #ddd;
}

.profile {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid #ddd;
  background: #ddd;
}
</style>