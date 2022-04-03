import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: () =>
      import(/* webpackChunkName "IndexPage" */ '@/views/IndexPage.vue'),
  },
  {
    path: '/works',
    name: 'WorksDetail',
    component: () =>
      import(/* webpackChunkName "IndexPage" */ '@/views/WorksDetail.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
