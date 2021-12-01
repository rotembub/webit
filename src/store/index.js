import Vue from 'vue';
import Vuex from 'vuex';
import { wapService } from '../services/wap.service.js';
import { wap } from '../services/wapJSON.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currWap: null,
    waps: [],
  },
  getters: {
    getCurrWap(state) {
      return state.currWap;
    },
  },
  mutations: {
    setCurrWap(state, { wap }) {
      state.currWap = wap;
    },
    addCmp(state, { cmp }) {
      state.currWap.cmps.push(cmp);
    },
    setWaps(state, { waps }) {
      state.waps = waps;
    },
    removeCmp(state, { id }) {
      const idx = state.currWap.cmps.findIndex(cmp => cmp._id === id);
      state.currWap.cmps.splice(idx, 1);
    }
  },
  actions: {
    async setCurrWap({ commit }, { wapId }) {
      try {
        const currWap = await wapService.query();
        console.log(currWap);
        commit({ type: 'setCurrWap', wap: currWap });
      } catch (err) {
        console.log(err);
      }
    },
    async loadWaps({ commit }) {
      try {
        const waps = await wapService.query();
        commit({ type: 'setWaps', waps })
      } catch (err) {
        console.log('Store reports failed to Load Waps');
      }
    }
  },
  async addCmp({ commit }, { id }) {
    // const type = toy._id ? 'updateToy' : 'addToy';
    try {
      const cmp = await wapService.getCmpById(id);
      console.log(cmp);
      commit({ type: 'addCmp', cmp });
    } catch (err) {
      console.log('Store reports: failed to add cmp', err);
    }
    // const savedCmp = await cmpsService.save(cmp);
    // return savedCmp;
  },
  async removeCmp({ commit, state }, { id }) {
    commit({ type: 'removeCmp', id });
    try {
      const updatedWap = wapService.save(state.currWap);
    } catch (err) {
      console.log('store reports: failed to save wap ', err);
    }
  }
})
