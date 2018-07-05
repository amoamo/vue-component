import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Components from "./components";
import routes from './route.config';
import SideNav from './template/side-nav.vue';
import PageHead from './template/page-head.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Components);

Vue.component('side-nav', SideNav);
Vue.component('page-head', PageHead);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
