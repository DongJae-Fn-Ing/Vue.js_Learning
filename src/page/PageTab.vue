<template>
  <!-- 탭 연습 2023.03.20 -->
  <div class="tab">
    <ul class="tab-list">
      <li
        v-for="(a, i) in 3"
        :key="i"
        :class="count === i ? `tab-item on` : `tab-item`"
      >
        <button type="button" @click="countList(i)" class="tab-btn">
          탭버튼{{ i }}
        </button>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-conten-list">내용 바꿔치기{{ count }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTab",
  data() {
    return { count: 0 };
  },
  methods: {
    countList(i) {
      this.count = i;
      console.log(this.count);
    },
  },
};
</script>

<style>
.tab {
  width: 500px;
  margin: 200px auto;
}

.tab .tab-list {
  display: flex;
  height: 30px;
}

.tab .tab-list .tab-item {
  width: 33.3333%;
  background-color: aquamarine;
}

.tab .tab-list .tab-item.on {
  background-color: burlywood;
}

.tab-list .tab-item button {
  width: 100%;
  height: 100%;
  text-align: center;
}

.tab .tab-content {
  width: 100%;
  height: 400px;
}
.tab .tab-content .tab-conten-list {
  width: 100%;
  height: 100%;
  background-color: darkcyan;
}
</style>