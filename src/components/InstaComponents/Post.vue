<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${instaData.userImage})` }"
      ></div>

      <!--       문자를 표현할 때 백틱 `` 기호도 가능하고 `문자${변수} 문자` 식으로 변수  넣기 편하다  es6신문법-->
      <span class="profile-name">{{ instaData.name }}</span>
    </div>
    <div
      @click="$store.commit('likeAdd', postList)"
      class="post-body"
      :class="`${instaData.filter}`"
      :style="{ backgroundImage: `url(${instaData.postImage})` }"
    ></div>
    <div class="post-content">
      <p>{{ $store.state.instaAllData[postList].likes }} Likes</p>
      <p>
        <strong>{{ instaData.filter }}</strong> {{ instaData.content }}
      </p>
      <p class="date">{{ instaData.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCom",
  props: {
    instaData: Object,
    filterName: String,
    postList: Number,
  },
  methods: {},
};
</script>

<style>
.post {
  width: 500px;
  margin: 0 auto;
}
.profile {
  /*   background-image: url("https://placeimg.com/100/100/arch"); */
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 50px;
  padding: 10px;
}
.post-body {
  /*   background-image: url("https://placeimg.com/640/480/animals"); */
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
}
</style>