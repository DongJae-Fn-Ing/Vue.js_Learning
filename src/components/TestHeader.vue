<template>
  <header class="header">
    <h2>테스트</h2>
    <nav class="gnb">
      <ul>
        <li>
          <button type="button">
            <router-link to="/">main</router-link>
          </button>
        </li>
        <li>
          <button type="button">
            <router-link to="/blog">blog</router-link>
          </button>
        </li>
        <li>
          <button type="button">
            <router-link to="/shop">shop</router-link>
          </button>
        </li>
        <li>
          <button type="button">
            <router-link to="/insta">insta</router-link>
          </button>
        </li>
        <li>
          <button type="button">
            <router-link to="/tab">tab</router-link>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TestHeader",
  data() {},
  methods: {},
  components: {},
};
</script>

<style>
.header {
  width: 100%;
  height: 50px;
  background: #ddd;
  display: flex;
  justify-content: space-between;
}

.header h2 {
  width: 100px;
  height: 100%;
  padding-left: 10px;
  line-height: 50px;
  background: blanchedalmond;
}

.header .gnb {
  height: 100%;
}

.header .gnb ul {
  display: flex;
  height: 100%;
  align-items: center;
}

.gnb ul li {
  width: 50px;
  height: 100%;
}

.gnb ul li button {
  width: 100%;
  height: 100%;
  padding: 0;
}
.gnb ul li button a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 50px;
  background: firebrick;
}
</style>