import 'whatwg-fetch';
import 'custom-event-polyfill';
import 'core-js/stable/promise';
import 'core-js/stable/symbol';
import 'core-js/stable/string/starts-with';
import 'core-js/web/url';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// 基座是history模式，两个子项目是hash模式和history模式
registerMicroApps([
  { 
    name: 'app-vue-hash', 
    entry: 'http://localhost:1111', 
    container: '#appContainer', 
    activeRule: '/app-vue-hash', 
    props: { data : { store, router } }
  },
  { 
    name: 'app-vue-history',
    entry: 'http://localhost:2222', 
    container: '#appContainer', 
    activeRule: '/app-vue-history',
    props: { data : store }
  },
]);

// 启动qiankun，默认是单实例，proxy沙箱
start();
