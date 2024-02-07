import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AnimateCSS from 'animate.css';

Vue.config.productionTip = false

new Vue({
  router,
  AnimateCSS,
  render: h => h(App)
}).$mount('#app')
