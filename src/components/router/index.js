import {
    Problems,
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
    {path: '/problems', component: Problems},
    {path: '/status', component: Status},
    {path: '/about', component: About}
  ]
const router = new VueRouter({
    routes
})

export default router