import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsPage from '../pages/NewsPage'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'news',
      component: NewsPage
    }
  ]
})