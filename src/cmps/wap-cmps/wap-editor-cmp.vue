<template>
  <section class="element-tool-bar">
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button
      @click="openEditorModal = !openEditorModal"
      type="primary"
      icon="el-icon-edit"
      circle
    ></el-button>
    <editor-modal v-if="openEditorModal" />
  </section>
</template>

<script>
import editorModal from './wap-editor-modal.cmp.vue'
export default {
  components: { editorModal },
  data() {
    return {
      openEditorModal: false,
    }
  },
}
</script>

<style></style>
