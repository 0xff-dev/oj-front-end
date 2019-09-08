import Vue from 'vue'
import App from './App.vue'
import Problems from './components/problems.vue'
import './assets/styles/global.css'
import VueRouter from 'vue-router';

Vue.use(VueRouter)
Vue.config.productionTip = false

// 抽象出路由，不能写在这里
const routes = [
  {path: '/problems', component: Problems}
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
