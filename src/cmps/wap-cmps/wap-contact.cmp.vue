<template>
  <section
    @click="isEditing = !isEditing"
    class="wap-contact"
    :class="cmp.theme"
  >
    <wap-editor v-if="isEditing" />
    <h2>{{ cmp.info.title }}</h2>
    <p>{{ cmp.info.subtitle }}</p>
    <!-- <input type="email" placeholder="example@email.com" /> -->
    <button>{{ cmp.info.btnTxt }}</button>
  </section>
</template>

<script>
import wapEditor from './wap-tool-bar.cmp.vue'
export default {
  components: {
    wapEditor,
  },
  data() {
    return {
      isEditing: false,
    }
  },
  props: ['cmp'],
}
</script>

<style></style>
