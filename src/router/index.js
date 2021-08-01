import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import("../views/Projects.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import("../views/Home.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
