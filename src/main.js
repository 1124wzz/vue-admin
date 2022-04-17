import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;

// 引入element组件
import "./plugins";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
