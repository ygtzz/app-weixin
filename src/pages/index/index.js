import Vue from 'vue';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import store from './vuex/store';
import 'static/css/normalize.css';
import 'static/css/quick-layout.css';
import 'static/css/font-awesome.min.css';
import 'static/css/iconfont.css';
import 'static/css/site.css';
import routeConfig from './router.js';
import FastClick from 'fastclick'
import App from './app.vue';
//common Component
import imgHolder from './widget/imgHolder.vue';
import cHeader from './widget/cHeader.vue';
Vue.component('c-imgHolder',imgHolder);
Vue.component('c-cHeader',cHeader);

window.addEventListener('load', () => {
  FastClick.attach(document.body)
});

Vue.use(VueRouter);
const router = new VueRouter({
    mode:'hash',
    routes:routeConfig
});

sync(store, router);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
