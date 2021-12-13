<template>
  <section>
    <!-- <editor-header></editor-header> -->
    <section @mousemove="moveMouse($event)" class="editor-page flex">
      <cmp-picker @onMobileState="onMobile" />
      <wap-builder :class="classForBuilder" />

      <div
        v-if="client"
        :style="{
          top: client.y - 30 + 'px',
          left: client.x + 'px',
          color: '#3498db',
        }"
        class="cursor"
      >
        <span>
          {{ client.byUser.username }}
        </span>
        <i class="fas fa-mouse-pointer"></i>
      </div>
    </section>
  </section>
</template>

<script>
import wapBuilder from '../cmps/wap-builder.cmp.vue'
import cmpPicker from '../cmps/cmp-picker/cmp-picker.cmp.vue'
import { socketService } from '../services/socket.service.js'
// import editorHeader from '../cmps/editor-header.cmp.vue'

export default {
  components: {
    wapBuilder,
    cmpPicker,
    // editorHeader,
  },
  data() {
    return {
      client: null,
    }
  },
  async created() {
    const id = this.wapId
    if (!id) {
      this.$router.push('/template')
    } else {
      let wap = await this.$store.dispatch({ type: 'setCurrWap', wapId: id })

      this.$router.push('/editor/' + wap._id).catch(err => {})
    }

    //  if (!id) {
    //   let newWap = await this.$store.dispatch({ type: 'getEmptyWap' })
    //   this.$router.push('/editor/' + newWap._id)
    // } else {
    //   let res = await this.$store.dispatch({ type: 'setCurrWap', wapId: id })
    //   if (!res) this.$router.push('/editor/new')
    // }

    socketService.emit('wap id', this.$store.getters.getCurrWap._id)
    socketService.on('wap updated', wap => {
      // console.log('wap from socket: ', wap)
      this.updateWap(wap, 'socket')
    })
    socketService.on('wap updated undo', wap => {
      console.log('---> wap updated undo: ', wap)
      this.$store.dispatch({ type: 'updateWap', wap })
    })
    socketService.on('mousemove', clientXY => {
      // console.log('wap from socket: ', clientXY)
      this.client = clientXY
    })
  },
  watch: {
    '$store.getters.getCurrWap'(wap) {
      console.log('--------------------------> EVENT TYPE', wap.updateEvent)
      if (!wap.updateEvent) {
        socketService.emit('wap updated', wap)
      } else {
        console.log('SOCKET WAP', wap)
      }
    },
  },

  methods: {
    moveMouse(ev) {
      // console.log(ev)
      let clientXY = {
        x: ev.clientX,
        y: ev.clientY,
        byUser: this.$store.getters.getUser || { username: 'guest' },
      }
      socketService.emit('mousemove', clientXY)
    },
    onMobile(str) {
      this.$store.dispatch({ type: 'isMobile', str })
    },

    updateWap(wap, eventType) {
      // console.log(wap, 'WAP')
      this.$store.dispatch({ type: 'updateWap', wap, eventType })
    },
  },
  computed: {
    oldWap() {
      // const isFullScreen =
      this.$store.getters.getCurrWap
    },

    classForBuilder() {
      const isFullScreen = this.$store.getters.isFullScreen
      const screenState = this.$store.getters.wapScreenState

      let classForBuilder = ''
      if (isFullScreen) classForBuilder = 'wap-builder-fullscreen'
      if (screenState === 'mobile') classForBuilder = 'wap-builder-mobile'
      else classForBuilder = 'wap-builder'
      return classForBuilder
    },
    wapId() {
      return this.$route.params.wapId
    },
  },
}
</script>

<style></style>
