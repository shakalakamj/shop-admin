import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../components/Layout'], resolve),
      children: [
        {
          path: '', component: resolve => require(['../modules/Home'], resolve)
        },
        {
          path: '/product', component: resolve => require(['../modules/Product'], resolve)
        },
        {
          path: '/class', component: resolve => require(['../modules/Class'], resolve)
        },
        {
          path: '/activity', component: resolve => require(['../modules/Activity'], resolve)
        },
        {
          path: '/order', component: resolve => require(['../modules/Order'], resolve)
        }

      ]
    }
  ]
})
