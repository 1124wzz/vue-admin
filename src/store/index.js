import Vue from "vue";
import Vuex from "vuex";
import tab from "./tab";
import User from "./user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tab,
    User,
  },
});
export default store;
