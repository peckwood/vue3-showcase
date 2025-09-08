// echarts 4 showcase
const routes = [
  {
    // 2个series的柱状图, 没用dataset
    path: '/component/call-child-method',
    component: () => import(/* webpackChunkName: "about" */ '@/views/vue/component/call-child-method/ParentComponent.vue')
  }
];
export default routes;
