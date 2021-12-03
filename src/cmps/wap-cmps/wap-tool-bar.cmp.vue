<template>
  <section class="element-tool-bar">
    <button title="Remove" class="tool-element" @click="removeCmp">
      <img src="@/assets/element-editor/trashcan.png" />
    </button>
    <button title="Font" class="tool-element">
      <img src="@/assets/element-editor/font-size.png" />
    </button>
    <button title="Color" class="tool-element">
      <img src="@/assets/element-editor/color.png" />
    </button>
    <button
      title="Size"
      class="tool-element"
      @click.stop="openEditorModal = !openEditorModal"
    >
      <img src="@/assets/element-editor/size.png" />
    </button>
    <editor-modal @updated="updateStyle" :id="id" v-if="openEditorModal" />
  </section>
</template>

<script>
import editorModal from './wap-editor-modal.cmp.vue'
export default {
  props: ['id'],
  components: { editorModal },
  data() {
    return {
      openEditorModal: false,
    }
  },
  methods: {
    removeCmp() {
      // this.$store.dispatch({ type: "removeCmp", id: this.id });

      this.$store.dispatch({ type: 'removeCmpFromWap', cmpId: this.id })
    },
    updateStyle(updatedWap) {
      console.log('sec emit')
      this.$emit('updated', updatedWap)
    },
  },
}
</script>

<style></style>
why is this CMP in here
