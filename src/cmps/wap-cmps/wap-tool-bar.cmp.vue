<template>
  <section class="element-tool-bar">
    <el-button
      type="danger"
      icon="el-icon-delete"
      @click="removeCmp"
      circle
    ></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button
      @click.stop="openEditorModal = !openEditorModal"
      type="primary"
      icon="el-icon-edit"
      circle
    ></el-button>
    <editor-modal @updated="updateStyle" :id="id" v-if="openEditorModal" />
  </section>
</template>

<script>
  import editorModal from './wap-editor-modal.cmp.vue';
  export default {
    props: ['id'],
    components: {editorModal},
    data() {
      return {
        openEditorModal: false,
      };
    },
    methods: {
      removeCmp() {
        // this.$store.dispatch({ type: "removeCmp", id: this.id });

        this.$store.dispatch({type: 'removeCmpFromWap', cmpId: this.id});
      },
      updateStyle(updatedWap) {
        console.log('sec emit');
        this.$emit('updated', updatedWap);
      },
    },
  };
</script>

<style></style>
why is this CMP in here
