import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueCookies from 'vue-cookies'


//import VueRouter from 'vue-router'
//import { createApp } from 'vue'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.$store = {
  selectedProject: null,
  records: []
}
//Vue.prototype.$records = [];


Vue.use(VueCookies);
Vue.$cookies.config('7d');

Vue.prototype.$BaseURL = (process.env.NODE_ENV == "development") ? "http://127.0.0.1:5000/" : "https://techsonarapi.magictechcloud.org/"
console.log("VUE_APP: ", process.env);
//sVue.use(VueRouter);

/* const router = new VueRouter({
  routes // short for `routes: routes`
}) */

new Vue({
  name: 'Root',
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
