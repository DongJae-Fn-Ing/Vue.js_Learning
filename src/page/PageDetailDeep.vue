<template>
  <p>
    디테일 안에 디테일 보여주기용<span class="font">{{
      $route.params.id
    }}</span>
  </p>
</template>

<script>
export default {
  name: "PageDetailDeep",
};
</script>

<style>
.font {
  font-size: 100px;
  font-weight: bold;
  color: cornflowerblue;
}
</style>