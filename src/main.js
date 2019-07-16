import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
    counter: 100
  },
  mutations : {
    increment(state){
      state.counter++
    }
  },
  actions: {
    incrementAfterTwoSeconds(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    }
  },
  getters : {
    getCountText(state) {
      return `You are on state number : ${state.counter}`
    }
  }
});

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
