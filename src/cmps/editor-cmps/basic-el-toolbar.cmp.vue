<template>
  <section class="basic-el-toolbar" :style="getPos">
    <button title="Remove" class="tool-element" @click.stop="removeEl">
      <!-- <img src="@/assets/element-editor/trashcan.png" /> -->
      <i class="el-icon-delete"></i>
    </button>
    <button title="Font" class="tool-element" @click.stop="openModal">
      <!-- <img src="@/assets/element-editor/font-size.png" /> -->
      <i class="el-icon-s-operation"></i>
    </button>
    <!-- <button title="Color" class="tool-element">
      <img src="@/assets/element-editor/color.png" />
    </button> -->
    <button title="Size" class="tool-element" @click.stop="openSizeModal">
      <!-- <img src="@/assets/element-editor/size.png" /> -->
      <i class="el-icon-rank"></i>
    </button>
    <button title="Copy" class="tool-element" @click="dupElement">
      <i class="el-icon-document-copy"></i>
    </button>
    <element-size
      @styleChanged="styleChanged"
      v-if="isSizeModal"
      :cmpId="cmpId"
      :elStyle="elStyle"
    ></element-size>
    <element-editor
      @styleChanged="styleChanged"
      v-if="openEditorModal"
      :cmpId="cmpId"
      :elStyle="elStyle"
    ></element-editor>
  </section>
</template>

<script>
import elementEditor from "./element-editor-cmp.vue";
import elementSize from "./element-size.cmp.vue";
export default {
  props: ["id", "elStyle", "cmpId", "pos"],
  components: { elementEditor, elementSize },
  created() {
    // console.log(this.pos);
  },
  data() {
    return {
      openEditorModal: false,
      isSizeModal: false,
      modalPos: null,
    };
  },
  computed: {
    getPos() {
      const pos = this.$store.getters.getElSelectedPos;
      return { top: pos.y + "px", left: pos.x + "px" };
    },
  },
  methods: {
    removeEl() {
      // console.log("emiting for removal");
      this.$emit("removeEl");
    },
    openModal(ev) {
      // console.log(ev);
      const pos = {
        right: "",
        top: "",
      };
      // if(ev.offsetY > )
      if (ev.clientX > window.innerWidth - 300) pos.right = 0;
      if (ev.clientY > window.innerHeight - 250) pos.top = -350;
      // console.log(ev.offsetX,window.innerWidth - 300,ev.clientX);
      // console.log(pos);
      this.$store.commit({ type: "setModalPos", modalPos: pos });
      //  = pos;
      this.isSizeModal = false;
      this.openEditorModal = !this.openEditorModal;
    },
    openSizeModal(ev) {
      console.log(ev);
      const pos = {
        right: "",
        top: "",
      };
      // if(ev.offsetY > )
      if (ev.clientX > window.innerWidth - 300) pos.right = 0;
      if (ev.clientY > window.innerHeight - 250) pos.top = -350;
      // console.log(ev.offsetX,window.innerWidth - 300,ev.clientX);
      // console.log(pos);
      this.$store.commit({ type: "setModalPos", modalPos: pos });
      //  = pos;
      this.openEditorModal = false;
      this.isSizeModal = !this.isSizeModal;
    },
    dupElement() {
      this.$emit("dupElement");
    },
    styleChanged(style) {
      this.$emit("styleChanged", style);
    },
  },
};
</script>

<style></style>
