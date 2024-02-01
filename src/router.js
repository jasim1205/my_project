import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home"),
  },
  {
    path: "/about",
    alias: "/about",
    name: "about",
    component: () => import("./components/About"),
  },
  {
    path: "/services",
    alias: "/services",
    name: "services",
    component: () => import("./components/Services"),
  },
  {
    path: "/pricing",
    alias: "/pricing",
    name: "pricing",
    component: () => import("./components/Pricing"),
  },
  {
    path: "/services-details",
    alias: "/services-details",
    name: "services-details",
    component: () => import("./components/Services-details"),
  },
  {
    path: "/contact",
    alias: "/contact",
    name: "contact",
    component: () => import("./components/Contact"),
  },
  {
    path: "/get-a-quote",
    alias: "/get-a-quote",
    name: "get-a-quote",
    component: () => import("./components/Get-a-quote"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
