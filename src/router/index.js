import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import BookDetail from '@/components/BookDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }, {
      path: '/book/:id',
      name: 'bookDetail',
      component: BookDetail
    }
  ]
});
