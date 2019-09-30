import Vue from 'vue'
import App from './App.vue'
import './assets/styles/global.css'
import router from './components/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
