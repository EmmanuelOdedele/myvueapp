import { createApp } from "vue";
// import Vue from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
// import { store } from "./store/index";

// Vue.config.productionTip = false;

// new Vue({
//   store,
//   render: (h) => h(App),
// }).$mount("app");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
  ],
});

import "./assets/main.css";

createApp(App).use(router).mount("#app");
