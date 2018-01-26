import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import cart from '@/views/cart.vue'
import mySelf from '@/views/mySelf.vue'
import type from '@/views/type.vue'
import search from '@/views/search.vue'
import login from '@/views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 自动跳转到index
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      name:'首页',
      component: index
    },
    {
      path:'/cart',
      name:'购物车',
      component:cart
    },
    {
      path:'/mySelf',
      name:'我的',
      component:mySelf
    },
    {
      path:'/type',
      name:'分类',
      component:type
    },
    {
      path:'/search',
      name:'搜索',
      component:search
    },
    {
      path:'/login',
      name:'登录/注册',
      component:login
    }
  ]
})
