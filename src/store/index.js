import Vue from 'vue';
import Vuex from 'vuex';
import { wapService } from '../services/wap.service.js';
import { cmpService } from '../services/cmp.service.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currWap: null,
    waps: [],
    wapToPublish: null,
    isFullScreen: false,
    elSelectedId: null,
  },
  getters: {
    isFullScreen(state) {
      return state.isFullScreen;
    },
    getCurrWap(state) {
      return state.currWap;
    },
    publishedWap(state) {
      return state.wapToPublish;
    },
    getWaps(state) {
      return state.waps;
    },
    getWapId(state) {
      console.log('Wap id getters', state.currWap);
      return state.currWap._id;
    },
    getElSelectedId(state) {
      return state.elSelectedId;
    }
  },
  mutations: {
    setCurrWap(state, { wap }) {
      console.log('Store currWap:', wap);
      state.currWap = wap;
    },
    addCmp(state, { cmp }) {
      state.currWap.cmps.push(cmp);
    },
    setWaps(state, { waps }) {
      state.waps = waps;
      console.log(state.waps);
    },
    updateWap(state, payload) {
      const idx = state.waps.findIndex((wap) => wap._id === payload.wap._id);
      state.waps.splice(idx, 1, payload.wap);
    },
    removeCmp(state, { id }) {
      const idx = state.currWap.cmps.findIndex((cmp) => cmp.id === id);
      state.currWap.cmps.splice(idx, 1);
    },
    saveWap(state, { wap }) {
      state.waps.push(wap);
    },
    removeWap(state, { wapId }) {
      const idx = state.waps.findIndex((wap) => wap._id === wapId);
      state.waps.splice(idx, 1);
    },
    updateWapStyle(state, { updatedWap }) {
      console.log('IN COMMIT', updatedWap);
      state.currWap = updatedWap;
    },
    publishWap(state, { wapToPublish }) {
      console.log(wapToPublish, 'IN COMMIT');
      state.wapToPublish = wapToPublish;
    },
    toggleWapFullScreen(state) {
      state.isFullScreen = !state.isFullScreen;
    },
    setSelectedElement(state, { id }) {
      state.elSelectedId = id;
    },
  },
  actions: {
    async updateWapComponents({ commit }, { wap }) {
      console.log('Wap :', wap);
      try {
        const updatedWap = await wapService.save(wap);
        commit({ type: 'setCurrWap', wap: updatedWap });
      } catch (err) {
        console.log(err);
      }
    },
    toggleWapFullScreen({ commit }) {
      commit({ type: 'toggleWapFullScreen' }); // is there a need for an action here? why not just commit - Yaron Biton
    },
    publishWap({ commit }, { wapToPublish }) {
      commit({ type: 'publishWap', wapToPublish }); // is there a need for an action here? why not just commit - Yaron Biton

      // console.log('IN STORE', wapToPublish)
    },
    async updateWapStyle({ commit, state }, { currWap, cmpId }) {
      const editedWap = state.currWap;
      console.log(editedWap,'EDITED WAP !!!!!!!!!!!!')
      // console.log('updateWapStyle', currWap);
      try {
        // const updatedWap = await wapService.save(currWap);
        const newCmp = editedWap.cmps.find((cmp) => cmp.id === cmpId);
        const updatedWap = await wapService.updateCmp(editedWap._id, newCmp);

        commit({ type: 'setCurrWap', wap: updatedWap });
        return updatedWap;
      } catch (err) {
        console.log(err);
      }
    },
    async setCurrWap({ commit }, { wapId }) {
      console.log(wapId, 'ID');
      try {
        const currWap = await wapService.getById(wapId);
        commit({ type: 'setCurrWap', wap: currWap });
        console.log(currWap, 'back in the action');
        return currWap;
      } catch (err) {
        console.log('Ahalan', err);
      }
    },
    async loadWaps({ commit }) {
      try {
        const waps = await wapService.query();
        commit({ type: 'setWaps', waps });
      } catch (err) {
        console.log('Store reports failed to Load Waps');
      }
    },
    async addCmp({ commit, state }, { id, idx }) {
      try {
        const cmp = await cmpService.getCmpById(id);
        console.log(cmp);
        // commit({ type: 'addCmp', cmp });

        const wapId = state.currWap._id;
        const updatedWap = await wapService.addCmp(wapId, cmp, idx);
        commit({ type: 'setCurrWap', wap: updatedWap });
      } catch (err) {
        console.log('Store reports: failed to add cmp', err);
      }
    },
    async copyCmpFromWap({ commit, state }, { cmpId, cmpIdx }) {
      try {
        const wapId = state.currWap._id;
        const cmpCopy = await wapService.copyCmp(wapId, cmpId);
        const updatedWap = await wapService.addCmp(wapId, cmpCopy, cmpIdx + 1);
        commit({ type: 'setCurrWap', wap: updatedWap });
      } catch (err) {
        console.log('Store reports: failed to copy cmp', err);
      }
    },
    // async removeCmp({ commit, state }, { id }) {copyCmpFromWap
    //   commit({ type: 'removeCmp', id });
    //   try {
    //     const updatedWap = await wapService.save(state.currWap);
    //   } catch (err) {
    //     console.log('store reports: failed to SAVE (during removeCMP) wap ', err);
    //   }
    // },
    async saveWap({ commit }, { wap }) {
      try {
        // const type = toy._id ? 'updateToy' : 'addToy';
        // commit({type, toy: savedToy});
        const savedWap = await wapService.save(wap);
        commit({ type: 'saveWap', wap: savedWap });
      } catch (err) {
        console.log('store reports: failed to SAVE wap', err);
      }
    },
    async removeWap({ commit }, { wapId }) {
      try {
        await wapService.remove(wapId);
        commit({ type: 'removeWap', wapId });
      } catch (err) {
        console.log('store reports: failed to REMOVE wap', err);
      }
    },
    async getEmptyWap({ commit }) {
      console.log('getting a new one');
      try {
        const wap = await wapService.getEmptyWap();
        commit({ type: 'setCurrWap', wap });
      } catch (err) {
        console.log('failed to get empty way', wap);
      }
    },
    async removeCmpFromWap({ commit, state }, { cmpId }) {
      try {
        const wapId = state.currWap._id;
        const updatedWap = await wapService.removeCmp(wapId, cmpId);
        commit({ type: 'setCurrWap', wap: updatedWap });
      } catch (err) {
        console.log('failed to remove CMP fron WAP', err);
      }
    },
    async removeElFromCmp({ commit, state }, { cmpId, elType, elId, containerId }) {
      try {
        const wapId = state.currWap._id;
        const updatedWap = await wapService.removeEl(
          wapId,
          cmpId,
          elType,
          elId,
          containerId
        );
        console.log(updatedWap);
        commit({ type: 'setCurrWap', wap: updatedWap });
      } catch (err) {
        console.log('failed to remove element from cmp', err);
      }
    },
    async saveWap({ commit }) { // WORK IN PROGRESS NEED TO CLEAN UP THE CODE
      try {
        const savedWap = await wapService.save(wap);
        commit({ type: 'setCurrWap', wap: savedWap });
      } catch (err) {
        console.log('store reports: failed to SAVE wap', err);
      }
    },

  },
});
