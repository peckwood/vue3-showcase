// echarts 4 showcase
const routes = [
  {
    //http://localhost:5174/style/flex-style-001
    path: '/style/flex-style-001',
    component: () => import(/* webpackChunkName: "about" */ '@/views/style/flex-style-001/index.vue')
  },
  {
    //http://localhost:5174/style/flex-style-002-fluid-height-el-table
    path: '/style/flex-style-002-fluid-height-el-table',
    component: () => import(/* webpackChunkName: "about" */ '@/views/style/flex-style-002-fluid-height-el-table/MyComponent.vue')
  },
];
export default routes;
