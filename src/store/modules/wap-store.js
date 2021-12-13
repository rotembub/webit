import { wapService } from '../../services/wap.service.js'
import { cmpService } from '../../services/cmp.service.js'
export default {
  state: {
    currWap: null,
    templates: [],
    wapToPublish: null,
    isFullScreen: false,
    isMobile: false,
    elSelectedId: null,
    elSelectedPos: null,
    modalPos: null,
    wapScreenState: 'desktop',
  },
  getters: {
    wapScreenState(state) {
      return state.wapScreenState
    },
    isMobile(state) {
      return state.isMobile
    },
    isFullScreen(state) {
      return state.isFullScreen
    },
    getCurrWap(state) {
      return state.currWap
    },
    publishedWap(state) {
      return state.wapToPublish
    },
    getTemplates(state) {
      return state.templates
    },
    getWapId(state) {
      console.log('Wap id getters', state.currWap)
      return state.currWap._id
    },
    getElSelectedId(state) {
      return state.elSelectedId
    },
    getElSelectedPos(state) {
      return state.elSelectedPos
    },
    getModalPos(state) {
      return state.modalPos
    },
  },
  mutations: {
    setCurrWap(state, { wap }) {
      console.log('MIUTETING WAP : ', wap)
      state.currWap = { ...wap }
    },
    publishWap(state, { wapToPublish }) {
      console.log(
        '🚀 ~ file: wap-store.js ~ line 50 ~ publishWap ~ wapToPublish',
        wapToPublish
      )
      state.wapToPublish = wapToPublish
    },

    // UI mutations
    toggleEditorFullScreen(state) {
      console.log('TOGLEDDDDDDDDDDDDDDDDD')
      state.isFullScreen = !state.isFullScreen
    },
    setEditorScreenState(state, { isFull }) {
      console.log(
        '🚀 ~ file: wap-store.js ~ line 66 ~ setEditorScreenState ~ isFull',
        isFull
      )
      state.isFullScreen = isFull
    },
    setSelectedElement(state, { id, pos }) {
      state.elSelectedId = id
      state.elSelectedPos = pos
    },
    setModalPos(state, { modalPos }) {
      state.modalPos = modalPos
    },
    isMobile(state, { isMobile }) {
      state.isMobile = isMobile
    },
    setScreenState(state, { str }) {
      console.log(str)
      state.wapScreenState = str
    },
    // Templates ----->
    setTemplates(state, { templates }) {
      state.templates = templates
    },
  },
  actions: {
    //General Functions
    async updateWap({ commit }, { wap, eventType }) {
      //Amazing Function that updates wap!
      if (!wap) {
        console.log('NO WAP')
      } else {
        console.log('IM UPDATING THE eventType', eventType)
        wap.updateEvent = eventType ? eventType : false
        commit({ type: 'setCurrWap', wap })
      }
    },

    //UI Actions
    isMobile({ commit }, { isMobile }) {
      console.log(
        '🚀 ~ file: wap-store.js ~ line 106 ~ isMobile ~ isMobile',
        isMobile
      )
      if (isMobile) commit({ type: 'setEditorScreenState', isFull: true })
      commit({ type: 'isMobile', isMobile })
    },
    setScreenState({ commit }, { str }) {
      commit({ type: 'setScreenState', str })
    },
    toggleEditorFullScreen({ commit }) {
      commit({ type: 'toggleEditorFullScreen' })
    },
    async publishWap({ commit }, { wapId }) {
      let wap = await wapService.getById(wapId)
      commit({ type: 'publishWap', wapToPublish: wap })
    },

    //Wap Actions
    async updateWapComponents({ dispatch, state }, { wap }) {
      console.log('updateWapComponents ~ wap', wap)
      if (!wap) wap = state.currWap
      try {
        // const updatedWap = await wapService.save(wap);//dont change the database
        await dispatch('updateWap', { wap })
      } catch (err) {
        console.log(err)
      }
    },
    async updateWapStyle({ dispatch, state }, { cmpId }) {
      const editedWap = state.currWap
      // console.log('updateWapStyle', currWap);
      try {
        // const updatedWap = await wapService.save(currWap);
        const newCmp = editedWap.cmps.find(cmp => cmp.id === cmpId)
        const updatedWap = await wapService.updateCmp(editedWap, newCmp)

        await dispatch('updateWap', { wap: updatedWap })
        return updatedWap
      } catch (err) {
        console.log(err)
      }
    },

    async setCurrWap({ dispatch }, { wapId }) {
      try {
        let currWap = await wapService.getById(wapId)
        await dispatch('updateWap', { wap: currWap, eventType: true })
        return currWap
      } catch (err) {
        console.log('setCurrWap', err)
      }
    },
    async addCmp({ dispatch, state }, { id, idx }) {
      try {
        const cmp = await cmpService.getCmpById(id)
        console.log(cmp, 'The cmp That add****')
        const wap = state.currWap
        const updatedWap = await wapService.addCmp(wap, cmp, idx)
        await dispatch('updateWap', { wap: updatedWap })
      } catch (err) {
        console.log('Store reports: failed to add cmp', err)
      }
    },
    async copyCmpFromWap({ dispatch, state }, { cmpId, cmpIdx }) {
      try {
        const wap = state.currWap
        const cmpCopy = await wapService.copyCmp(wap, cmpId)
        const updatedWap = await wapService.addCmp(wap, cmpCopy, cmpIdx + 1)
        await dispatch('updateWap', { wap: updatedWap })
      } catch (err) {
        console.log('Store reports: failed to copy cmp', err)
      }
    },
    async dupElement(
      { dispatch, state },
      { cmpId, elType, elId, containerId }
    ) {
      try {
        const wap = state.currWap
        const updatedWap = await wapService.duplicateEl(
          wap,
          cmpId,
          elType,
          elId,
          containerId
        )

        await dispatch('updateWap', { wap: updatedWap })
      } catch (err) {
        console.log('failed to remove element from cmp', err)
      }
    },
    async updateElementStyle(
      { dispatch, state },
      { cmpId, elType, elId, containerId, style }
    ) {
      try {
        const wap = state.currWap
        const updatedWap = await wapService.updateElStyle(
          wap,
          cmpId,
          elType,
          elId,
          containerId,
          style
        )
        await dispatch('updateWap', { wap: updatedWap })
      } catch (err) {
        console.log(err)
      }
    },
    async updateElement(
      { dispatch, state },
      { cmpId, elType, elId, containerId, updatedEl }
    ) {
      try {
        const wap = state.currWap
        const updatedWap = await wapService.updateEl(
          wap,
          cmpId,
          elType,
          elId,
          containerId,
          updatedEl
        )
        await dispatch('updateWap', { wap: updatedWap })
      } catch (err) {
        console.log(err)
      }
    },
    async getEmptyWap({ dispatch }) {
      console.log('getting a new one')
      try {
        const wap = await wapService.getEmptyWap()
        console.log(
          '🚀 ~ file: wap-store.js ~ line 215 ~ getEmptyWap ~ wap',
          wap
        )
        await dispatch('updateWap', { wap, eventType: false })
        return wap
      } catch (err) {
        console.log('failed to get empty way', wap)
      }
    },
    async removeCmpFromWap({ dispatch, state }, { cmpId }) {
      try {
        const wap = state.currWap
        const updatedWap = await wapService.removeCmp(wap, cmpId)
        await dispatch('updateWap', { wap: updatedWap })
      } catch (err) {
        console.log('failed to remove CMP fron WAP', err)
      }
    },
    async removeElFromCmp(
      { dispatch, state },
      { cmpId, elType, elId, containerId }
    ) {
      try {
        console.log('REMOVE EL FROM CMP')
        const wap = state.currWap
        const updatedWap = await wapService.removeEl(
          wap,
          cmpId,
          elType,
          elId,
          containerId
        )
        await dispatch('updateWap', { wap: updatedWap })
      } catch (err) {
        console.log('failed to remove element from cmp', err)
      }
    },
    //Picker
    async loadCmps({ commit }) {
      try {
        const cmps = await cmpService.query()
        // commit({type: 'setCmps', cmps});
        console.log(cmps)
      } catch (err) {
        console.log('Store reports failed to Load Cmps')
      }
    },

    //Temapltes
    async loadTemplates({ commit }) {
      try {
        const templates = await wapService.queryWapTemplates()
        commit({ type: 'setTemplates', templates })
      } catch (err) {
        console.log('Store reports failed to Load Waps')
      }
    },
    //Creates a wap from a template
    async createNewWap({ dispatch }, { templateId, newWapData }) {
      try {
        const currWap = await wapService.createNewWap(templateId, newWapData)
        await dispatch('updateWap', { wap: currWap })

        return currWap
      } catch (err) {
        console.log('Ahalan', err)
      }
    },
    async updateWapProperties({ dispatch, state }, { wap }) {
      try {
        const updatedWap = await wapService.save(wap)
        await dispatch({ type: 'updateWap', wap: updatedWap })
        console.log('sent for update REFRESH YOUR PAGE', updatedWap.cmps)
      } catch (err) {
        console.log(err)
      }
    },

    // async removeCmp({ commit, state }, { id }) {copyCmpFromWap  ---> USELESS
    //   commit({ type: 'removeCmp', id });
    //   try {
    //     const updatedWap = await wapService.save(state.currWap);
    //   } catch (err) {
    //     console.log('store reports: failed to SAVE (during removeCMP) wap ', err);
    //   }
    // },
    // async saveWap({ commit }, { wap }) {  ---> USELESS
    //   try {
    //     // const type = toy._id ? 'updateToy' : 'addToy';
    //     // commit({type, toy: savedToy});
    //     const savedWap = await wapService.save(wap)
    //     commit({ type: 'saveWap', wap: savedWap })
    //   } catch (err) {
    //     console.log('store reports: failed to SAVE wap', err)
    //   }
    // },
    // async removeWap({ commit }, { wapId }) {   ---> Maybe implement in future release
    //   try {
    //     await wapService.remove(wapId)
    //     commit({ type: 'removeWap', wapId })
    //   } catch (err) {
    //     console.log('store reports: failed to REMOVE wap', err)
    //   }
    // },

    // async saveWap({ commit }) {   ---> USELESS
    //   // WORK IN PROGRESS NEED TO CLEAN UP THE CODE
    //   try {
    //     const savedWap = await wapService.save(wap)
    //     commit({ type: 'setCurrWap', wap: savedWap })
    //   } catch (err) {
    //     console.log('store reports: failed to SAVE wap', err)
    //   }
    // },
  },
}
