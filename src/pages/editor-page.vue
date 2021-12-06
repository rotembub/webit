<template>
  <section>
    <editorHeader></editorHeader>
    <section class="editor-page flex">
      <cmp-picker :class="classForPicker" />
      <wap-builder :class="classForBuilder" />
    </section>
  </section>
</template>

<script>
import wapBuilder from '../cmps/wap-builder.cmp.vue'
import cmpPicker from '../cmps/cmp-picker/cmp-picker.cmp.vue'
import editorHeader from '../cmps/editor-header.cmp.vue'

export default {
  components: {
    wapBuilder,
    cmpPicker,
    editorHeader,
  },
  data() {
    return {}
  },
  created() {
    const id = this.wapId
    // console.log(id);
    if (!id) this.$store.dispatch({ type: 'getEmptyWap' })
    else this.$store.dispatch({ type: 'setCurrWap', wapId: id })
  },
  computed: {
    classForPicker() {
      const isFullScreen = this.$store.getters.isFullScreen
      if (isFullScreen) return 'cmp-picker-fullscreen'
      else return 'cmp-picker'
    },
    classForBuilder() {
      const isFullScreen = this.$store.getters.isFullScreen
      if (isFullScreen) return 'wap-builder-fullscreen'
      else return 'wap-builder'
    },
    wapId() {
      return this.$route.params.wapId
    },
  },
}
</script>

<style></style>
