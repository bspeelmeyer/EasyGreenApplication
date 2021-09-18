import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import('./mock.js')

Vue.config.productionTip = true
Vue.use(ElementUI)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
