import Vue from 'vue';
import Vuex from 'vuex';
import {wapService} from '../services/wap.service.js';
import {cmpService} from '../services/cmp.service.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currWap: null,
    waps: [],
    wapToPublish: null,
    isFullScreen: false,
    isMobile: false,
    elSelectedId: null,
    elSelectedPos: null,
    modalPos: null,
  },
  getters: {
    isMobile(state) {
      return state.isMobile;
    },
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
    },
    getElSelectedPos(state) {
      return state.elSelectedPos;
    },
    getModalPos(state) {
      return state.modalPos;
    },
  },
  mutations: {
    setCurrWap(state, {wap}) {
      state.currWap = wap;
    },
    addCmp(state, {cmp}) {
      state.currWap.cmps.push(cmp);
    },
    setWaps(state, {waps}) {
      state.waps = waps;
    },
    updateWap(state, payload) {
      const idx = state.waps.findIndex((wap) => wap._id === payload.wap._id);
      state.waps.splice(idx, 1, payload.wap);
    },
    removeCmp(state, {id}) {
      const idx = state.currWap.cmps.findIndex((cmp) => cmp.id === id);
      state.currWap.cmps.splice(idx, 1);
    },
    saveWap(state, {wap}) {
      state.waps.push(wap);
    },
    removeWap(state, {wapId}) {
      const idx = state.waps.findIndex((wap) => wap._id === wapId);
      state.waps.splice(idx, 1);
    },
    updateWapStyle(state, {updatedWap}) {
      state.currWap = updatedWap;
    },
    publishWap(state, {wapToPublish}) {
      state.wapToPublish = wapToPublish;
    },
    toggleWapFullScreen(state) {
      state.isFullScreen = !state.isFullScreen;
    },
    setSelectedElement(state, {id, pos}) {
      state.elSelectedId = id;
      state.elSelectedPos = pos;
    },
    setModalPos(state, {modalPos}) {
      state.modalPos = modalPos;
    },
    isMobile(state) {
      state.isMobile = !state.isMobile;
    },
  },
  actions: {
    async updateWapComponents({commit}, {wap}) {
      try {
        // const updatedWap = await wapService.save(wap);//dont change the database
        commit({type: 'setCurrWap', wap});
      } catch (err) {
        console.log(err);
      }
    },
    isMobile({commit}) {
      commit({type: 'isMobile'}); // is there a need for an action here? why not just commit - Yaron Biton
    },
    toggleWapFullScreen({commit}) {
      commit({type: 'toggleWapFullScreen'}); // is there a need for an action here? why not just commit - Yaron Biton
    },
    publishWap({commit}, {wapToPublish}) {
      commit({type: 'publishWap', wapToPublish}); // is there a need for an action here? why not just commit - Yaron Biton

      // console.log('IN STORE', wapToPublish)
    },
    async updateWapStyle({commit, state}, {cmpId}) {
      const editedWap = state.currWap;
      // console.log('updateWapStyle', currWap);
      try {
        // const updatedWap = await wapService.save(currWap);
        const newCmp = editedWap.cmps.find((cmp) => cmp.id === cmpId);
        const updatedWap = await wapService.updateCmp(editedWap, newCmp);

        commit({type: 'setCurrWap', wap: updatedWap});
        return updatedWap;
      } catch (err) {
        console.log(err);
      }
    },
    async setCurrWap({commit}, {wapId}) {
      try {
        const currWap = await wapService.getById(wapId);
        commit({type: 'setCurrWap', wap: currWap});
        return currWap;
      } catch (err) {
        console.log('Ahalan', err);
      }
    },
    async loadWaps({commit}) {
      try {
        const waps = await wapService.query();
        commit({type: 'setWaps', waps});
      } catch (err) {
        console.log('Store reports failed to Load Waps');
      }
    },
    async loadCmps({commit}) {
      try {
        const cmps = await cmpService.query();
        // commit({type: 'setCmps', cmps});
        console.log(cmps);
      } catch (err) {
        console.log('Store reports failed to Load Cmps');
      }
    },
    async addCmp({commit, state}, {id, idx}) {
      try {
        const cmp = await cmpService.getCmpById(id);
        const wap = state.currWap;
        const updatedWap = await wapService.addCmp(wap, cmp, idx);
        commit({type: 'setCurrWap', wap: updatedWap});
      } catch (err) {
        console.log('Store reports: failed to add cmp', err);
      }
    },
    async copyCmpFromWap({commit, state}, {cmpId, cmpIdx}) {
      try {
        const wap = state.currWap;
        const cmpCopy = await wapService.copyCmp(wap, cmpId);
        const updatedWap = await wapService.addCmp(wap, cmpCopy, cmpIdx + 1);
        commit({type: 'setCurrWap', wap: updatedWap});
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
    async saveWap({commit}, {wap}) {
      try {
        // const type = toy._id ? 'updateToy' : 'addToy';
        // commit({type, toy: savedToy});
        const savedWap = await wapService.save(wap);
        commit({type: 'saveWap', wap: savedWap});
      } catch (err) {
        console.log('store reports: failed to SAVE wap', err);
      }
    },
    async removeWap({commit}, {wapId}) {
      try {
        await wapService.remove(wapId);
        commit({type: 'removeWap', wapId});
      } catch (err) {
        console.log('store reports: failed to REMOVE wap', err);
      }
    },
    async getEmptyWap({commit}) {
      console.log('getting a new one');
      try {
        const wap = await wapService.getEmptyWap();
        commit({type: 'setCurrWap', wap});
      } catch (err) {
        console.log('failed to get empty way', wap);
      }
    },
    async removeCmpFromWap({commit, state}, {cmpId}) {
      try {
        const wap = state.currWap;
        const updatedWap = await wapService.removeCmp(wap, cmpId);
        commit({type: 'setCurrWap', wap: updatedWap});
      } catch (err) {
        console.log('failed to remove CMP fron WAP', err);
      }
    },
    async removeElFromCmp({commit, state}, {cmpId, elType, elId, containerId}) {
      try {
        const wap = state.currWap;
        const updatedWap = await wapService.removeEl(
          wap,
          cmpId,
          elType,
          elId,
          containerId
        );
        commit({type: 'setCurrWap', wap: updatedWap});
      } catch (err) {
        console.log('failed to remove element from cmp', err);
      }
    },
    async saveWap({commit}) {
      // WORK IN PROGRESS NEED TO CLEAN UP THE CODE
      try {
        const savedWap = await wapService.save(wap);
        commit({type: 'setCurrWap', wap: savedWap});
      } catch (err) {
        console.log('store reports: failed to SAVE wap', err);
      }
    },
    async dupElement({commit, state}, {cmpId, elType, elId, containerId}) {
      try {
        const wap = state.currWap;
        const updatedWap = await wapService.duplicateEl(
          wap,
          cmpId,
          elType,
          elId,
          containerId
        );
        commit({type: 'setCurrWap', wap: updatedWap});
      } catch (err) {
        console.log('failed to remove element from cmp', err);
      }
    },
    async updateElementStyle(
      {commit, state},
      {cmpId, elType, elId, containerId, style}
    ) {
      try {
        const wap = state.currWap;
        const updatedWap = await wapService.updateElStyle(
          wap,
          cmpId,
          elType,
          elId,
          containerId,
          style
        );
        commit({type: 'setCurrWap', wap: updatedWap});
      } catch (err) {
        console.log(err);
      }
    },
  },
});
