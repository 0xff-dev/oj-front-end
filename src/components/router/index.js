import {
    Problems,
    ProblemDetail,
    Status,
    Home,
    About
  } from '../../components/views'
import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect:'home'},
    {path: '/home', component: Home},

    // problem
    {path: '/problems', component: Problems},
    {path: '/problem/:id/detail', name: 'problem_detail', component: ProblemDetail},
    {path: '/status', component: Status},
    {path: '/about', component: About},

  ]
const router = new VueRouter({
    routes,
    mode:'history'
})

export default router
