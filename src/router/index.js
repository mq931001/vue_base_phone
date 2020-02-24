import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'test1',
    component: () => import('@/views/test1.vue'),
    meta: {
      title:'默认test1'
    }
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('@/views/test2.vue'),
    meta: {
      title:'默认test222'
    }
  }
]

const router = new VueRouter({
  routes
})

// 路由拦截
router.beforeEach(async (to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
