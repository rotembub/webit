import { userService } from '@/services/user.service.js'

export default {
  state: {
    loggedinUser: null,
    isHide: true,
  },
  getters: {
    getUser(state) {
      return state.loggedinUser
    },
    getIsHide(state) {
      return state.isHide
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.loggedinUser = user
    },
    toggleModal(state) {
      state.isHide = !state.isHide
    },
  },
  actions: {
    async getUsers({ searchStr }) {
      try {
        const users = await userService.getUsers(searchStr)
        return users
      } catch (err) {
        console.log(err)
      }
    },
    async login({ commit }, { cred }) {
      try {
        const user = await userService.login(cred)
        commit({ type: 'setUser', user })
      } catch (err) {
        console.log(err)
      }
    },
    async signup({ commit }, { cred }) {
      try {
        const user = await userService.signup(cred)
        commit({ type: 'setUser', user })
      } catch (err) {
        console.log(err)
      }
    },
    async logout({ commit }) {
      try {
        await userService.logout()
        commit({ type: 'setUser', user: null })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
