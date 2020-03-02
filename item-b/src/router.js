import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/layout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      // redirect: "/index",
      children: [
        {
          path: '/user',
          name: 'User',
          component: () => import('@/views/User.vue'),
        },
        {
          path: '/account',
          name: 'Account',
          component: () => import('@/views/Account.vue'),
        },
      ],
    },
  ],
});
