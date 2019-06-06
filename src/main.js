import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify, {
  theme:{
    primary: '#37474F',
    secondary: '#64FFDA',
    accent: '#FFD740'
  },
  options:{
    customProperties: true
  }
})

Vue.config.productionTip = false

new Vue({
  Vuetify,
  store,
  router,  
  render: h => h(App)
}).$mount('#app')


