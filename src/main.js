import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;

// 引入element组件
import "./plugins";

Vue.config.productionTip = false;

// 导航守卫
router.beforeEach((to, from, next) => {
  store.commit("getToken");
  const token = store.state.User.token;
  if (!token && to.name != "/login") {
    next({ name: "/login" });
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
