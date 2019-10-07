import Vue from 'vue'
import App from './App.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './assets/styles/global.css'
import router from './components/router'
import store from './store'

Vue.config.productionTip = false
Vue.use(mavonEditor)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
