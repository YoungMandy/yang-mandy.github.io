import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/box-sizing',
          name: 'box-sizing',
          component: () => import('@/components/cssbasic/BoxSizing.vue'),
        },
        {
          path: '/css-selector',
          name: 'css-selector',
          component: () => import('@/components/cssbasic/CssSelector.vue'),
        },
        {
          path: '/css-layout',
          name: 'css-layout',
          component: () => import('@/components/cssbasic/cssLayout.vue'),
        },
      ],
    },
  ],
});

export default router;
