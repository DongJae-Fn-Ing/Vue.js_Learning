<template>
  <ul class="menu-list">
    <li v-for="(a, i) in dataFile" :key="i">
      <h5>
        <router-link to="/blog/detail"
          >{{ a.number }} {{ a.title }}</router-link
        >
      </h5>
      <p>{{ a.date }}</p>
      <p>{{ a.content }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListCom",
  data() {
    return {};
  },
  methods: {},
  components: {},
  props: {
    dataFile: Object,
  },
};
</script>

<style>
.menu-list {
  width: 500px;
  margin: 30px auto;
}

.menu-list li {
  background: rosybrown;
}

.menu-list li:not(:last-child) {
  margin-bottom: 20px;
}

.menu-list li p {
  margin: 12px 0;
}
</style>