import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ImportDemo from '../views/import-demo/ImportDemo.vue'
import ImportDemo2 from '../views/import-demo/ImportDemo2.vue'
import ImportDemo3 from '../views/import-demo/ImportDemo3.vue'
import echartsRoutes from "@/router/echarts/echarts-routes";
import componentRoutes from "@/router/echarts/component-routes.ts";
import styleRoutes from "@/router/style/style-routes.ts"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...echartsRoutes,
    ...componentRoutes,
    ...styleRoutes,
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/import-demo',
      name: 'ImportDemoName',
      component: ImportDemo,
    },
    {
      path: '/import-demo2',
      name: 'ImportDemoName2',
      component: ImportDemo2,
    },
    {
      path: '/import-demo3',
      name: 'ImportDemoName3',
      component: ImportDemo3,
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
