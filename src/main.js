// @ts-nocheck
import Vue from 'vue';
import VueRouter from 'vue-router';
import { router } from './routes/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './assets/style/main.less'

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
