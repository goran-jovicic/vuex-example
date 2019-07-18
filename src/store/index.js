import Vue from 'vue'
import Vuex from 'vuex'

import { ModuleA } from './module_a_store'
import { ModuleB } from './module_b_store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    ModuleA, ModuleB
  }
});