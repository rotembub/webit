import Vue from 'vue';
import Vuex from 'vuex';
import wapStore from './modules/wap-store.js';
import userStore from './modules/user-store.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    wapStore,
    userStore,
  },
});
