import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import '../src/styles/styles.scss'
import loading from 'vuejs-loading-screen'
import Notifications from 'vue-notification'
import { ObserveVisibility } from 'vue-observe-visibility'
import vmodal from 'vue-js-modal'
Vue.use(Notifications)
Vue.use(ElementUI, { locale })
Vue.use(vmodal, { adaptive: true })
Vue.directive('observe-visibility', ObserveVisibility)
Vue.use(loading, {
  bg: '#d2d2d2',
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
