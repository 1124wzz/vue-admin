import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/",
    name: "Main",
    component: () => import("components/main/Main.vue"),
    children: [
      {
        path: "/home",
        name: "/home",
        component: () => import("views/MainChildren/Home.vue"),
      },
      {
        path: "/mall",
        name: "/mall",
        component: () => import("views/HomeChildren/Mall.vue"),
      },
      {
        path: "/user",
        name: "/user",
        component: () => import("views/HomeChildren/User.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
