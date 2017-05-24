import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import BookDetail from '@/components/BookDetail'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/dashboard'
    }, {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }, {
      path: '/book/:id',
      name: 'book',
      component: BookDetail
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
