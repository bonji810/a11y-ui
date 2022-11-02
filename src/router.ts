import { createRouter, createWebHistory } from 'vue-router'
import TabBefore from './pages/TabBefore.vue';
import TabAfter from './pages/TabAfter.vue';

const routes = [
  {
    path: '/tab/before',
    component: TabBefore
  },
  {
    path: '/tab/after',
    component: TabAfter
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;