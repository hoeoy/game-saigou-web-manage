import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import './mock/index.js';  // 该项目所有请求使用mockjs模拟
import './login.js' 
import './ui.js' 
import url from './url.js'
import $ from 'jquery';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.config.productionTip = false;
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(url)

var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


