import {
    Problems,
    Status,
    Home,
    About,
    Contests
  } from '../../components/views'
import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect:'home'},
    {path: '/home', component: Home},

    // problem
    {path: '/problems', component: Problems},
    {path: '/problem/:id/detail', name: 'problem detail'},
    {path: '/status', component: Status},
    {path: '/about', component: About},
    {path: '/contests', component: Contests},
  ]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
