import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: () =>
      import(/* webpackChunkName "IndexPage" */ '@/views/IndexPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
