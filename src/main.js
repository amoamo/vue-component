import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Components from "./components";
import routes from './route.config';

import PageHeader from "./template/PageHeader.vue";
import SideNav from './template/SideNav.vue';

import Simulator from "./docs/simulator.vue";
import DocsLayout from "./docs/docs.layout.vue"
import DocsMd from "./docs/docs.md.vue"

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Components);

import Button from "cyan/button";

Vue.component("lib-button", Button);

Vue.component("page-header", PageHeader);
Vue.component('side-nav', SideNav);
Vue.component("simulator", Simulator);
Vue.component("docs-layout", DocsLayout);
Vue.component("docs-md", DocsMd);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
