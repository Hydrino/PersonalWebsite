import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Clipboard from 'v-clipboard'
 
Vue.use(Clipboard)


Vue.use(Vuetify, {
  theme:{
    primary: '#37474F ',
    secondary: '#66bb6a',
    accent: '#64ffda'
  },
  options:{
    customProperties: true
  },
  iconfont:'fa'
})

Vue.config.productionTip = false

new Vue({
  Vuetify,
  store,
  router,  
  Clipboard,
  render: h => h(App)
}).$mount('#app')


