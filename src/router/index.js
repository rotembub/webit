import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'
import editorPage from '../pages/editor-page.vue'
import templatesPage from '../pages/templates-page.vue'
import wapPublishPage from '../pages/wap-publish-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
  {
    path: '/template',
    name: 'templates',
    component: templatesPage
  },
  {
    path: '/editor',
    name: 'editor',
    component: editorPage
  },
  {
    path: '/publish/:wapId',
    name: 'publish',
    component: wapPublishPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
