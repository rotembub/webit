<template>
  <section class="basic-el-toolbar">
    <button title="Remove" class="tool-element" @click.stop="removeEl">
      <img src="@/assets/element-editor/trashcan.png" />
    </button>
    <button
      title="Font"
      class="tool-element"
      @click.stop="openEditorModal = !openEditorModal"
    >
      <img src="@/assets/element-editor/font-size.png" />
    </button>
    <button title="Color" class="tool-element">
      <img src="@/assets/element-editor/color.png" />
    </button>
    <button title="Size" class="tool-element">
      <img src="@/assets/element-editor/size.png" />
    </button>
    <element-editor v-if="openEditorModal" :elStyle="elStyle"></element-editor>
  </section>
</template>

<script>
import elementEditor from "./element-editor-cmp.vue";
export default {
  props: ["id", "elStyle"],
  components: { elementEditor },
  data() {
    return {
      openEditorModal: false,
    };
  },
  methods: {
    removeEl(){
      console.log('emiting for removal')
      this.$emit('removeEl')
    }
  },
};
</script>

<style></style>