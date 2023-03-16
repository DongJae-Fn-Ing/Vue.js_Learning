<template>
  <div class="component">
    <h4>지금 사 안사면 멍청이 {{ disCount }}%</h4>
  </div>
</template>

<script>
export default {
  name: "comOne",
  /* 무조건 name써라 */
  data() {
    return {
      disCount: 30,
    };
  },

  mounted() {
    let time = setInterval(() => {
      this.disCount--;
      if (this.disCount === 0) {
        clearTimeout(time);
        this.disCount = 30;
      }
    }, 100);
  },
};
</script>

<style>
.component {
  background: red;
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 4px;
  color: yellow;
}
</style>