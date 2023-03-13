<template>
  <li class="box">
    <img :src="dataFile.image" alt="테스트용 이미지" />
    <!--<h4 class="box-title" v-on:click="modal = true, click = i">
      {{dataFile.title}}</h4> -->
    <h4 class="box-title" v-on:click="$emit('openModal', dataFile.id)">
      {{ dataFile.title }}
    </h4>
    <p>{{ dataFile.price }}만원</p>
    <p>{{ dataFile.content }}</p>
    <!--<button type="button" v-on:click="countUp(i)">허위매물 신고</button> <span>신고수 : {{count[i]}}</span>  -->
  </li>
</template>

<script>
export default {
  name: "CardItem",
  props: {
    dataFile: Object,
  },
};
</script>

<style></style>
