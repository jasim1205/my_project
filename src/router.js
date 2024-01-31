import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: () => import("./components/Home"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
