import { createRouter, createWebHistory } from 'vue-router'
// page
import notFound from '../pages/notFound.vue'
// import main from '../pages/main.vue'

const routes = [
  {
    path: '/',
    name: 'defaultLayout',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '/',
        name: 'main',
        component: () => import('../pages/main.vue')
      },
      {
        path: '/welfare',
        name: 'welfare',
        component: () => import('../pages/welfare.vue')
      },
      {
        path: '/pilots',
        name: 'pilots',
        component: () => import('../pages/pilots.vue')
      },
    ]
  },
  // not found 처리
  {
    path: "/:pathMatch(.*)*",
    component: () => import('../pages/notFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// middleware
router.beforeEach((to, from, next) => {
  next()
})

export default router
