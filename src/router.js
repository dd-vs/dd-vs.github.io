import { createRouter, createWebHistory } from "vue-router";

import TheHome from "./pages/TheHome.vue";
import TheComponents from "./pages/TheComponents.vue";

const router = createRouter({
  history: createWebHistory(),
  mode: "history",
  routes: [
    { path: "/", redirect: { name: "Home" } },
    { path: "/home", name: "Home", component: TheHome },
    { path: "/components", name: "Components", component: TheComponents },
  ],
  scrollBehavior(from, to, savedPossition) {
    if (savedPossition) {
      return savedPossition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
