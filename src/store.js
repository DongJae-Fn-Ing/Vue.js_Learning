import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      /* state를 여기다 저장 */
      names: "kar",
    };
  },
});

export default store;
