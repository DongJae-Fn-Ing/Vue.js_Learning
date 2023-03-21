<template>
  <div>
    <div class="tab-content" v-if="step === 0">
      <Post
        v-for="(a, i) in instaData"
        :key="i"
        :instaData="instaData[i]"
      />
    </div>
    <!--     vue3부터 v-if와 v-for를 한번에 못씀 -->
    <div class="tab-content" v-if="step === 1">
      <div
        class="upload-image"
        :class="filterName"
        :style="{ background: `url(${uploadFile}) no-repeat center / cover` }"
      ></div>
      <div class="filters">
        <FilterBox
          v-for="(a, i) in FilterData"
          :key="i"
          :uploadFile="uploadFile"
          :filterClass="a"
        >
          {{ a }}
        </FilterBox>
      </div>
    </div>
    <div class="tab-content" v-if="step === 2">
      <div
        class="upload-image"
        :class="filterName"
        :style="{ background: `url(${uploadFile}) no-repeat center / cover` }"
      ></div>
      <div class="write">
        <textarea
          class="write-box"
          v-model="textArea"
          @change="$emit('inputData', textArea)"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import FilterBox from "./FilterBox";
import Post from "./Post";
import FilterData from "../../assets/filterData";

export default {
  name: "ContainerCom",
  components: {
    Post,
    FilterBox,
  },
  data() {
    return {
      textArea: "",
      FilterData: FilterData,
    };
  },
  methods: {},
  props: {
    instaData: Object,
    step: Number,
    uploadFile: String,
    filterName: String,
  },
};
</script>

<style>
.tab-content {
  width: 500px;
  margin: 10px auto;
}

.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>