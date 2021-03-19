import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/auth/login/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/auth/register/Index.vue")
  },
  {
    path: "/registerTwo",
    name: "register02",
    component: () => import("../components/auth/register/RegisterTwo.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
