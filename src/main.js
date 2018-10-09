import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios' // to handle http requests instead of VueResource

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)

// Vue.use(VueResource)  // Instead we will use Axios
axios.defaults.baseURL = 'BASE__URL__HERE'

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
