<template>
  <section class="element-tool-bar">
    <button title="Remove" class="tool-element" @click="removeCmp">
      <i class="el-icon-delete"></i>
    </button>
    <button title="Color" class="tool-element" @click.stop="openModal('color')">
      <img src="@/assets/element-editor/color.png" />
    </button>
    <button title="Size" class="tool-element" @click.stop="openModal('size')">
      <i class="el-icon-rank"></i>
    </button>
    <button title="Copy" class="tool-element" @click="copyCmp">
      <i class="el-icon-document-copy"></i>
    </button>
    <button
      title="Upload"
      class="tool-element"
      @click.stop="isUpload = !isUpload"
    >
      <i class="el-icon-upload"></i>
    </button>
    <img-upload v-if="isUpload" @onSaveImg="onSaveImg"></img-upload>
    <color-modal :id="id" v-if="openColorModal" />
    <size-modal :id="id" v-if="openSizeModal" />
  </section>
</template>

<script>
// import editorModal from './wap-editor-modal.cmp.vue';
import colorModal from "../editor-cmps/cmps-color-modal.cmp.vue";
import sizeModal from "../editor-cmps/cmps-size-modal.cmp.vue";
import imgUpload from "./img-upload.vue";
export default {
  props: ["id"],
  components: { colorModal, sizeModal, imgUpload }, // there is a conflict with the inline edit
  data() {
    return {
      isUpload: false,
      openColorModal: false,
      openSizeModal: false,
    };
  },
  methods: {
    removeCmp() {
      // this.$store.dispatch({ type: "removeCmp", id: this.id });
      this.$store.dispatch({ type: "removeCmpFromWap", cmpId: this.id });
    },
    copyCmp() {
      const currWap = this.$store.getters.getCurrWap;
      const currCmpIdx = currWap.cmps.findIndex((cmp) => cmp.id === this.id);
      this.$store.dispatch({
        type: "copyCmpFromWap",
        cmpId: this.id,
        cmpIdx: currCmpIdx,
      });
      // console.log('copy')
    },
    openModal(type) {
      if (type === "color") {
        this.openColorModal = !this.openColorModal;
        this.openSizeModal = false;
      }
      if (type === "size") {
        this.openSizeModal = !this.openSizeModal;
        this.openColorModal = false;
      }
    },
    onSaveImg(url) {
      const wap = this.$store.getters.getCurrWap;
      const cmp = wap.cmps.find((cmp) => cmp.id === this.id);
      cmp.style.background = `url(${url})`;
      this.updateStyle(wap);
    },
    updateStyle(wap) {
      this.$store.dispatch({ type: "updateWapProperties",wap });
    },
    // async updateCmp() {
    //   try {
    //     this.$store.dispatch({
    //       type: "updateWapStyle",
    //       cmpId: this.id, // WATCHOUT
    //     });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
};
</script>

<style></style>
why is this CMP in here
