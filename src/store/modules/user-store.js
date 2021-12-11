import {userService} from '@/services/user.service.js';
import {wapService} from '../../services/wap.service.js';

export default {
  state: {
    loggedinUser: null,
    isHide: true,
    guestWaps: [],
  },
  getters: {
    getUser(state) {
      return state.loggedinUser;
    },
    getIsHide(state) {
      return state.isHide;
    },
  },
  mutations: {
    setUser(state, {user}) {
      state.loggedinUser = user;
    },
    setIsHide(state) {
      state.isHide = true;
    },
    toggleModal(state) {
      state.isHide = !state.isHide;
    },
    saveGuestWap(state, {wapId}) {
      state.guestWaps.push(wapId);
    },
  },
  actions: {
    async getUsers({searchStr}) {
      try {
        const users = await userService.getUsers(searchStr);
        return users;
      } catch (err) {
        console.log(err);
      }
    },
    async login({commit}, {cred}) {
      try {
        const user = await userService.login(cred);
        commit({type: 'setUser', user});
      } catch (err) {
        console.log(err);
      }
    },
    async signup({commit}, {cred}) {
      try {
        const user = await userService.signup(cred);
        commit({type: 'setUser', user});
      } catch (err) {
        console.log(err);
      }
    },
    async logout({commit}) {
      try {
        await userService.logout();
        commit({type: 'setUser', user: null});
      } catch (err) {
        console.log(err);
      }
    },
    async getUserWaps({commit}, {user}) {
      try {
        const filterBy = {...user}; //change to only waps
        console.log(filterBy, 'filter By');
        const waps = await wapService.query(filterBy);
        return waps;
        // commit({ type: 'setTemplates', templates })
      } catch (err) {
        console.log('Store reports failed to get Waps');
      }
    },
    async updateUser({commit, state}, {user}) {
      try {
        const updatedUser = await userService.update(user);
        console.log(user, 'Updated user');
        commit({type: 'setUser', updatedUser});
        // commit({ type: 'setTemplates', templates })
      } catch (err) {
        console.log('Store reports failed to get Waps');
      }
    },
  },
};
