import Vue from 'vue';
import Vuex from 'vuex';
import {wapService} from '../services/wap.service.js';
import {wap} from '../services/wapJSON.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currWap: null,
  },
  getters: {
    getCurrWap(state) {
      return state.currWap;
    },
  },
  mutations: {
    setCurrWap(state, {wap}) {
      state.currWap = wap;
    },
    addCmp(state, {cmp}) {
      state.currWap.cmps.push(cmp);
    },
  },
  actions: {
    setCurrWap({commit}, {wapId}) {
      const currWap = wapService.query();
      commit({type: 'setCurrWap', wap: currWap});
    },
    async addCmp({commit}, {id}) {
      // const type = toy._id ? 'updateToy' : 'addToy';
      const cmp = await wapService.getCmpById(id);
      console.log(cmp);
      // const savedCmp = await cmpsService.save(cmp);
      commit({type: 'addCmp', cmp});
      // return savedCmp;
    },
  },
  modules: {},
});
