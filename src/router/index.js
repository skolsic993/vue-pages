import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

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
    redirect: '/not-found' 
  },
  {
    path: "/not-found",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
