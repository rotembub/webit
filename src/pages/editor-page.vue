<template>
  <section>
    <!-- <editor-header></editor-header> -->
    <section class="editor-page flex">
      <cmp-picker @onMobileState="onMobile" :class="classForPicker" />
      <wap-builder :class="classForBuilder" />
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
    return {}
  },
  async created() {
    const id = this.wapId
    // console.log(id);
    if (!id) await this.$store.dispatch({ type: 'getEmptyWap' })
    else await this.$store.dispatch({ type: 'setCurrWap', wapId: id })
    socketService.emit('wap id', this.$store.getters.getCurrWap._id)
    socketService.on('wap updated', this.updateWap)
  },
  watch: {
    '$store.getters.getCurrWap'(wap) {
      // console.log(
      //   'wap watch // ----------------------------------------',
      //   wap
      // );

      console.log('SOCKET WAP', wap)
      socketService.emit('wap updated', wap)
    },
  },
  methods: {
    updateWap(wap) {
      console.log(wap, 'WAP')
      this.$store.commit({ type: 'setCurrWap', wap })
    },
    onMobile(str) {
      this.$store.dispatch({ type: 'isMobile', str })
    },
  },
  computed: {
    classForPicker() {
      // const isFullScreen =
      if (this.$store.getters.isFullScreen) return 'cmp-picker-fullscreen'
      else return 'cmp-picker'
    },
    classForBuilder() {
      const isFullScreen = this.$store.getters.isFullScreen
      const isMobile = this.$store.getters.isMobile
      console.log(isMobile)

      let classForBuilder = ''

      if (isFullScreen) classForBuilder = 'wap-builder-fullscreen'
      if (isMobile) classForBuilder = 'wap-builder-mobile'
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
