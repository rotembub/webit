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
    <button title="Color" class="tool-element" @click.stop="openModal('color')">
      <img src="@/assets/element-editor/color.png" />
    </button>
    <button title="Size" class="tool-element" @click.stop="openModal('size')">
      <img src="@/assets/element-editor/size.png" />
    </button>
    <button title="Copy" class="tool-element" @click="copyCmp">
      <img src="@/assets/element-editor/copy.png" />
    </button>
    <!-- <editor-modal :id="id" v-if="openEditorModal" /> -->
    <color-modal :id="id" v-if="openColorModal" />
    <size-modal :id="id" v-if="openSizeModal" />
  </section>
</template>

<script>
  // import editorModal from './wap-editor-modal.cmp.vue';
  import colorModal from '../editor-cmps/cmps-color-modal.cmp.vue';
  import sizeModal from '../editor-cmps/cmps-size-modal.cmp.vue';
  export default {
    props: ['id'],
    components: {colorModal, sizeModal}, // there is a conflict with the inline edit
    data() {
      return {
        openColorModal: false,
        openSizeModal: false,
      };
    },
    methods: {
      removeCmp() {
        // this.$store.dispatch({ type: "removeCmp", id: this.id });
        this.$store.dispatch({type: 'removeCmpFromWap', cmpId: this.id});
      },
      copyCmp() {
        const currWap = this.$store.getters.getCurrWap;
        const currCmpIdx = currWap.cmps.findIndex((cmp) => cmp.id === this.id);
        this.$store.dispatch({
          type: 'copyCmpFromWap',
          cmpId: this.id,
          cmpIdx: currCmpIdx,
        });
        console.log('copy');
      },
      openModal(type) {
        if (type === 'color') {
          this.openColorModal = !this.openColorModal;
          this.openSizeModal = false;
        }
        if (type === 'size') {
          this.openSizeModal = !this.openSizeModal;
          this.openColorModal = false;
        }
      },
    },
  };
</script>

<style></style>
why is this CMP in here
