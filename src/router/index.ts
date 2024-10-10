import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/pages/Login/index.vue')
      },
      {
        path: 'registration',
        name: 'Registration',
        component: () => import('@/pages/Registration/index.vue')
      }
    ]
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/layouts/chat-layout.vue'),
    children: [
      {
        path: '',
        name: 'Non-chat',
        component: () => import('@/pages/Non-chat/index.vue')
      },
      {
        path: ':chatId',
        name: 'Person-chat',
        component: () => import('@/pages/Chat/index.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
