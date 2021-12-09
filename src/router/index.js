import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'
import editorPage from '../pages/editor-page.vue'
import templatesPage from '../pages/templates-page.vue'
import wapPublish from '../pages/publish-wap-page.vue'
import userPage from '../pages/user-page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage,
  },
  {
    path: '/template',
    name: 'templates',
    component: templatesPage,
  },
  {
    path: '/editor/:wapId?',
    name: 'editor',
    component: editorPage,
  },
  {
    path: '/publish/:wapId',
    name: 'publish',
    component: wapPublish,
  },
  {
    path: '/user',
    name: 'user-page',
    component: userPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
