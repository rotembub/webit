<template>
  <section class="element-tool-bar">
    <button title="Remove" class="tool-element" @click="removeCmp">
      <img src="@/assets/element-editor/trashcan.png" />
    </button>
    <!-- <button
      title="Font"
      class="tool-element"
      @click.stop="openEditorModal = !openEditorModal"
    >
      <img src="@/assets/element-editor/font-size.png" />
    </button> -->
    <button
      title="Color"
      class="tool-element"
      @click.stop="openColorModal = !openColorModal"
    >
      <img src="@/assets/element-editor/color.png" />
    </button>
    <button title="Size" class="tool-element">
      <img src="@/assets/element-editor/size.png" />
    </button>
    <editor-modal :id="id" v-if="openEditorModal" />
    <color-modal :id="id" v-if="openColorModal" />
  </section>
</template>

<script>
import editorModal from './wap-editor-modal.cmp.vue'
import colorModal from '../editor-cmps/cmps-color-modal.cmp.vue'
export default {
  props: ['id'],
  components: { editorModal, colorModal }, // there is a conflict with the inline edit
  data() {
    return {
      openEditorModal: false,
      openColorModal: false,
    }
  },
  methods: {
    removeCmp() {
      // this.$store.dispatch({ type: "removeCmp", id: this.id });

      this.$store.dispatch({ type: 'removeCmpFromWap', cmpId: this.id })
    },
  },
}
</script>

<style></style>
why is this CMP in here
