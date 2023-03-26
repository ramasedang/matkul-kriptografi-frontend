import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("../views/ThanksView.vue"),
    }
  ],
});

export default router;
