import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFound from '@/framework/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'box-sizing',
          name: 'box-sizing',
          component: () => import('@/components/cssbasic/BoxSizing.vue'),
        },
        {
          path: 'css-selector',
          name: 'css-selector',
          component: () => import('@/components/cssbasic/CssSelector.vue'),
        },
        {
          path: 'css-layout',
          name: 'css-layout',
          component: () => import('@/components/cssbasic/cssLayout.vue'),
        },
        {
          path: 'css-technique',
          name: 'css-technique',
          component: () => import('@/components/cssbasic/CssTechnique.vue'),
        },
        {
          path: 'event-loop',
          name: 'event-loop',
          component: () => import('@/components/browser/EventLoop.vue'),
        },
        {
          path: 'install-listen',
          name: 'install-listen',
          component: () => import('@/components/browser/InstallListen.vue'),
        },
        {
          path: 'dev-tools',
          name: 'dev-tools',
          component: () => import('@/components/browser/DevTools.vue'),
        },
        {
          path: 'js-inherit',
          name: 'js-inherit',
          component: () => import('@/components/jsbasic/JsInherit.vue'),
        },
        {
          path: 'http-history',
          name: 'http-history',
          component: () => import('@/components/network/HttpHistory.vue'),
        },
        {
          path: 'google-architecture',
          name: 'google-architecture',
          component: () => import('@/components/browser/Architecture.vue'),
        },
        {
          path: 'web-worker',
          name: 'web-worker',
          component: () => import('@/components/browser/LearnWebWorker.vue'),
        },
        {
          path: 'git-commitlint',
          name: 'git-commitlint',
          component: () => import('@/components/git-use/CommitLintConfig.vue'),
        },
        {
          path: 'mobile-issue',
          name: 'mobile-issue',
          component: () => import('@/components/mobile-issue/issue.vue'),
        },
        {
          path: 'mobile-technique',
          name: 'mobile-technique',
          component: () => import('@/components/mobile-issue/technique.vue'),
        },
       
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;
