import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)

// Vue.use(VueResource)
axios.defaults.baseURL = 'BASE_URL_HERE'

Vue.filter('currency', (value) => {
  return 'US$ ' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
