<template>
  <div id="app">
    <div>
      <router-link to="/main">主页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/sports">体育</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
