<template>
  <div class="bg" v-if="modal === true">
    <div class="modal">
      <img :src="dataFile[click].image" alt="" />
      <h4>{{ dataFile[click].title }}</h4>
      <p>{{ dataFile[click].content }}</p>
      <input v-model.number="mon" type="text" name="" id="" class="input" />
      <p>{{ mon }}개월수</p>
      <p>{{ dataFile[click].price * mon }}원</p>
      <button type="button" v-on:click="$emit('openModal', dataFile[click].id)">
        닫기 버튼
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalName",
  data() {
    return {
      mon: 1,
    };
  },
  watch: {
    /*     mon(a) {
      if (typeof a === "string") {
        alert("멍청아 문자 입력하지마");
        return (this.mon = 1);
      }
    }, */
  },
  updated() {
    if (this.mon === -2) {
      alert("멍청아");
      this.mon = 3;
    }
  },
  props: {
    dataFile: Object,
    click: Number,
    modal: Boolean,
  },
  /*   props 객체 형식을 만들고
  컴포넌트에서  
  네이밍 했던 : 형식 이런식으로 입력 */
};
</script>

<style>
/* 임시 모달창 */

.bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  transition: all 1s;
}

.bg .modal {
  width: 400px;
  height: 400px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  padding: 20px;
  text-align: center;
}

.bg .modal h4 {
  margin-bottom: 20px;
}

.bg .modal img {
  width: 100%;
}

.bg .modal .input {
  width: 100%;
  display: block;
}
</style>
