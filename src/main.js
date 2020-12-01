import Vue from 'vue'
import App from './App.vue'
import router  from './router'
import store from './state/'

Vue.config.productionTip = false

Vue.filter('zeroized', (value)=> {
  if(!value) return ''
  if(value < 10) {
    return "0" + value
  }else {
    return value
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
