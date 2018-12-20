import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Expenditures from '@/components/Expenditures'
import ContactUs from '@/components/ContactUs'
import Expendi from '@/components/Expendi'
import Edit from '@/components/Edit'
import Chart from '@/components/Chart'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import firebase from 'firebase';
import HomePage from '@/components/HomePage'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/expenditures',
      name: 'Expenditures',
      component: Expenditures
    },
    {
      path: '/expendi',
      name: 'Expendi',
      component: Expendi
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    }
  ]
});








