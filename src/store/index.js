import Vue from 'vue'
import Vuex from 'vuex'
import { wapService } from '../services/wap.service.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currWap: null,
  },
  getters: {
    getCurrWap(state) {
      return state.currWap
    }
  },
  mutations: {
    setCurrWap(state, { wap }) {
      state.currWap = wap;
    }
  },
  actions: {
    setCurrWap({ commit }, { wapId }) {
      const currWap = wapService.query();
      commit({ type: 'setCurrWap', wap: currWap });
    }
  },
  modules: {
  }
})
