import Vue from 'vue';
import Vuex from 'vuex';
import { wapService } from '../services/wap.service.js';
import { cmpService } from '../services/cmp.service.js';


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
      console.log('hi', wap)
      state.currWap = wap;
    },
    addCmp(state, { cmp }) {
      state.currWap.cmps.push(cmp);
    },
    setWaps(state, { waps }) {
      state.waps = waps;
    },
    updateWap(state, payload) {
      const idx = state.waps.findIndex(wap => wap._id === payload.wap._id);
      state.waps.splice(idx, 1, payload.wap);
    },
    removeCmp(state, { id }) {
      const idx = state.currWap.cmps.findIndex(cmp => cmp._id === id);
      state.currWap.cmps.splice(idx, 1);
    },
    saveWap(state, { wap }) {
      state.waps.push(wap);
    },
    removeWap(state, { wapId }) {
      const idx = state.waps.findIndex(wap => wap._id === wapId)
      state.waps.splice(idx, 1);
    }
  },
  actions: {
    async setCurrWap({ commit }, { wapId }) {
      console.log(wapId, 'ID')
      try {
        const currWap = await wapService.getById(wapId);
        commit({ type: 'setCurrWap', wap: currWap });
        console.log(currWap, 'back in the action')
        return currWap;
      } catch (err) {
        console.log('Ahalan', err);
      }
    },
    async loadWaps({ commit }) {
      try {
        const waps = await wapService.query();
        commit({ type: 'setWaps', waps })
      } catch (err) {
        console.log('Store reports failed to Load Waps');
      }
    },
    async addCmp({ commit }, { id }) {
      try {
        const cmp = await cmpService.getCmpById(id);
        console.log(cmp);
        commit({ type: 'addCmp', cmp });
      } catch (err) {
        console.log('Store reports: failed to add cmp', err);
      }
    },
    async removeCmp({ commit, state }, { id }) {
      commit({ type: 'removeCmp', id });
      try {
        const updatedWap = await wapService.save(state.currWap);
      } catch (err) {
        console.log('store reports: failed to SAVE (during removeCMP) wap ', err);
      }
    },
    async saveWap({ commit }, { wap }) {
      try {
        const savedWap = await wapService.save(wap)
        commit({ type: 'saveWap', wap: savedWap })
      } catch (err) {
        console.log('store reports: failed to SAVE wap', err);
      }
    },
    async removeWap({ commit }, { wapId }) {
      try {
        await wapService.remove(wapId)
        commit({ type: 'removeWap', wapId })
      } catch (err) {
        console.log('store reports: failed to REMOVE wap', err);
      }
    },
    async getEmptyWap({ commit }) {
      console.log('getting a new one')
      try {
        const wap = await wapService.getEmptyWap()
        commit({ type: 'setCurrWap', wap })
      } catch (err) {
        console.log('failed to get empty way', wap)
      }
    }
  }
})
