import Vue from 'vue'
import Router from 'vue-router'
import Test from './moudle/test'

Vue.use(Router)

const commonRoutes = [
  { path: '/404', component: () => import('components/routerError/404') },
  { path: '/401', component: () => import('components/routerError/401') },
  { path: '*', redirect: '/404' },
  {
    path: '/',
    redirect: '/test'
  }
]

/** 分模块的路由，合并传入Router */
export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: commonRoutes.concat(Test)
})
