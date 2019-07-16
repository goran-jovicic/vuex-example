import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

const store = new Vuex.Store({
  state : {
    counter: 0
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
