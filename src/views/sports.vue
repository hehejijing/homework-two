<template>
  <div>
    <p><b>体育·改变人生</b></p>

    <div>
      <router-link to="/sports/sportsMain">主页</router-link>
      <router-link to="/sports/sportsIn">新闻</router-link>
      <router-link to="/sports/sportsOut">体育</router-link>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "T-Sports",
};
</script>

<style></style>
