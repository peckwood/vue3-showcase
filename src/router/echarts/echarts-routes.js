// echarts 4 showcase
const routes = [
  {
    // 2个series的柱状图, 没用dataset
    path: '/echarts/bar-chart-001',
    component: () => import(/* webpackChunkName: "about" */ '@/views/echarts/bar-chart/bar-chart-001.vue')
  }
];
export default routes;
