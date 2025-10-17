// echarts 4 showcase
import ImportDemo from '@/views/import-demo/ImportDemo.vue'
import ImportDemo2 from '@/views/import-demo/ImportDemo2.vue'
import ImportDemo3 from '@/views/import-demo/ImportDemo3.vue'
import ImportThroughFunctionDemo from '@/views/import-demo/ImportThroughFunctionDemo.vue'

const routes = [
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
    path: '/import-through-function-demo',
    name: 'ImportDemoName3',
    component: ImportThroughFunctionDemo,
  }
];
export default routes;
