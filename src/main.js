// @ts-nocheck
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue'
import Carousel from './components/Carousel.vue'
import Collapse from './components/Collapse.vue'
import Table from './components/Table.vue'
import Form from './components/Form.vue'
import Dialog from './components/Dialog.vue'

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  routes: [
    {
      path: '',
      component: HelloWorld
    },
    {
      path: '/carousel',
      component: Carousel
    },
    {
      path: '/collapse',
      component: Collapse
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/dialog',
      component: Dialog
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
