import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import VueRouter from "vue-router";
import main from "./views/main.vue";
import news from "./views/news.vue";
import sports from "./views/sports.vue";
import sportsMain from "./components/sports-main.vue";
import sportsIn from "./components/sports-in.vue";
import sportsOut from "./components/sports-out.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/", // 默认hash值路径
    redirect: "/main"
  },
  {
    path: "/main",
    component: main,
  },
  {
    path: "/news",
    component: news,
  },
  {
    path: "/sports",
    component: sports,
    redirect: "/sports/sportsMain",
    children: [
      {
        path: "sportsMain",
      component: sportsMain,
      },
      {
        path: "sportsIn",
      component: sportsIn,
      },
      {
        path: "sportsOut",
      component: sportsOut,
      }
    ],
  },
 
];
const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
