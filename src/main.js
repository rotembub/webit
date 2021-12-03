import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/styles/styles.scss'
import loading from 'vuejs-loading-screen'

Vue.use(ElementUI)
Vue.use(loading, {
  bg: '#81ecec',
  icon: 'refresh',
  size: 3,
  icon_color: 'white',
  slot: `
  <div class="">
    <h1 class="text-3xl text-white"><i class="fas fa-spinner fa-spin"></i> 
     Getting your site ready....
    </h1>
  </div>
`,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
