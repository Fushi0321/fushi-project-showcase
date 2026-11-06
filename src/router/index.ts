
import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  // 页面切换返回顶部，专题内部导航定位到对应模块
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 20,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      left: 0,
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/project-background',
      name: 'project-background',
      component: () =>
        import('../views/ProjectBackgroundView.vue'),
    },
    {
      path: '/project-vision',
      name: 'project-vision',
      component: () =>
        import('../views/ProjectVisionView.vue'),
    },
    {
      path: '/project-planning',
      name: 'project-planning',
      component: () =>
        import('../views/ProjectPlanningView.vue'),
    },
    {
      path: '/project-architecture',
      name: 'project-architecture',
      component: () =>
        import('../views/ProjectArchitectureView.vue'),
    },
    {
      path: '/project-operations',
      name: 'project-operations',
      component: () =>
        import('../views/ProjectOperationsView.vue'),
    }, 
    {
      path: '/project-implementation',
      name: 'project-implementation',
      component: () =>
        import('../views/ProjectImplementationView.vue'),
    },
  ],
})

export default router
