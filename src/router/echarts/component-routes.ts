// echarts 4 showcase
const routes = [
  {
    path: '/component/call-child-method',
    component: () => import(/* webpackChunkName: "about" */ '@/views/vue/component/call-child-method/ParentComponent.vue')
  },
  {
    path: '/component/call-child-method-inside-class',
    component: () => import(/* webpackChunkName: "about" */ '@/views/vue/component/call-child-method-inside-class/ParentComponent.vue')
  }
];
export default routes;
