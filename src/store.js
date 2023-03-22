import { createStore } from "vuex";
import InstaData from "../src/assets/instaData";
import axios from "axios";

const store = createStore({
  state() {
    return {
      /* state를 여기다 저장 */
      names: "kar",
      age: 28,
      instaAllData: InstaData,
      instaAllDataCopy: [...InstaData],
      more: {},
      count: 0,
    };
  },
  mutations: {
    /* 데이터 수정하는 곳 */

    nameChange(state) {
      /* 함수로 정의하고 함수 안 파라미터는 위에 값 */
      state.names = "KarDongJae";
    },
    ageAdd(state /* ,데이터 */) {
      state.age--;
    },
    likeAdd(state, postList) {
      state.instaAllDataCopy[postList].liked =
        !state.instaAllDataCopy[postList].liked;
      console.log(state.instaAllDataCopy[postList].liked);
      if (state.instaAllDataCopy[postList].liked === true) {
        state.instaAllDataCopy[postList].likes++;
      } else {
        state.instaAllDataCopy[postList].likes--;
      }
      state.instaAllData = state.instaAllDataCopy;
    },
    setMore(state, data) {
      /* 쏴준 곳에서 받은 데이터 */
      state.more = data;
    },
    /* vuex에서 스테이트 값을 수정하려면 무조건 mutations를 통해야한다. */
  },

  actions: {
    /* ajax 요청하는 곳 */
    /* 오래 걸리는 작업이나 통신 작업 
    애는 commit이 아니라 dispatch
    */
    getData(context) {
      /* mutations가 작명은 다르게 */
      axios
        .get("https://codingapple1.github.io/vue/more" + 1 + ".json")
        .then((datas) => {
          console.log(datas.data);
          context.commit("setMore", datas.data);
          /* vuex에서 스테이트 값을 수정하려면 무조건 mutations를 통해야한다. */
          /* 그래서 여기서 commit으로 데이터를 쏴줘야 한다. */
        });
    },
  },
});

export default store;
