<template>
  <div class="bg" v-if="modal === true">
    <div class="modal">
      <img :src="dataFile[click].image" alt="" />
      <h4>{{ dataFile[click].title }}</h4>
      <p>{{ dataFile[click].content }}</p>
      <p>{{ dataFile[click].price }}</p>
      <button type="button" v-on:click="$emit('openModal', dataFile[click].id)">닫기 버튼</button> 
    </div>
  </div>
</template>

<script>
export default {
  name: "modalName",
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

<style></style>
