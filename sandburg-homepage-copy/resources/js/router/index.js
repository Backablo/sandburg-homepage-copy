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
      }
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

router.beforeEach((to, from, next) => {
  console.log('%c [print][to]', 'color:#10cdbc', to)
  console.log('%c [print][from]', 'color:#10cdbc', from)
  next()
})

export default router
