<template>
  <section @click="isEditing = !isEditing" class="wap-text" :class="cmp.theme">
    <wap-editor v-if="isEditing" />
    <h1>{{ cmp.info.title }}</h1>
    <p>{{ cmp.info.subtitle }}</p>
  </section>
</template>

<script>
import wapEditor from './wap-tool-bar.cmp.vue'
export default {
  props: ['cmp'],
  components: {
    wapEditor,
  },
  data() {
    return {
      isEditing: false,
    }
  },
}
</script>

<style></style>
