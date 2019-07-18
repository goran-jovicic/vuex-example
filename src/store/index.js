import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
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