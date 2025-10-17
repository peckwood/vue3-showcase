import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import echartsRoutes from "@/router/echarts/echarts-routes";
import componentRoutes from "@/router/echarts/component-routes.ts";
import styleRoutes from "@/router/style/style-routes.ts"
import importRoutes from "@/router/import/import-routes.ts"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...echartsRoutes,
    ...componentRoutes,
    ...styleRoutes,
    ...importRoutes,
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
