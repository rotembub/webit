<template>
  <section class="basic-el-toolbar" :style="getPos">
    <button title="Remove" class="tool-element" @click.stop="removeEl">
      <i class="el-icon-delete"></i>
    </button>
    <button
      v-if="elType !== 'imgs'"
      title="Font"
      class="tool-element"
      @click.stop="openModal"
    >
      <i class="fas fa-font"></i>
    </button>
    <button
      v-if="elType !== 'imgs'"
      title="Color"
      class="tool-element"
      @click.stop="openColorModal"
    >
      <i class="fas fa-palette"></i>
    </button>
    <button title="Size" class="tool-element" @click.stop="openSizeModal">
      <i class="el-icon-rank"></i>
    </button>
    <button title="Copy" class="tool-element" @click="dupElement">
      <i class="el-icon-document-copy"></i>
    </button>
    <button
      v-if="elType === 'imgs'"
      title="Upload"
      class="tool-element"
      @click.stop="isUpload = !isUpload"
    >
      <i class="el-icon-upload"></i>
    </button>
    <element-size
      @styleChanged="styleChanged"
      v-if="isSizeModal"
      :cmpId="cmpId"
      :elStyle="elStyle"
      :elType="elType"
    ></element-size>
    <element-color
      @styleChanged="styleChanged"
      v-if="isColorModal"
      :cmpId="cmpId"
      :elStyle="elStyle"
    ></element-color>
    <element-editor
      @styleChanged="styleChanged"
      v-if="openEditorModal"
      :cmpId="cmpId"
      :elStyle="elStyle"
    ></element-editor>
    <img-upload v-if="isUpload" @onSaveImg="onSaveImg"></img-upload>
  </section>
</template>

<script>
  import imgUpload from './img-upload.vue';
  import elementEditor from './element-editor-cmp.vue';
  import elementSize from './element-size.cmp.vue';
  import elementColor from './element-color.cmp.vue';
  export default {
    props: ['id', 'elStyle', 'cmpId', 'pos', 'elType'],
    components: {elementEditor, elementSize, imgUpload, elementColor},
    created() {
      // console.log(this.pos);
    },
    data() {
      return {
        openEditorModal: false,
        isSizeModal: false,
        isColorModal: false,
        modalPos: null,
        isUpload: false,
      };
    },
    computed: {
      getPos() {
        const pos = this.$store.getters.getElSelectedPos;
        return {top: pos.y + 'px', left: pos.x + 'px'};
      },
    },
    methods: {
      removeEl() {
        // console.log("emiting for removal");
        this.$emit('removeEl');
      },
      openModal(ev) {
        const pos = {
          right: '',
          top: '',
        };
        if (ev.clientX > window.innerWidth - 300) pos.right = 0;
        if (ev.clientY > window.innerHeight - 250) pos.top = -365;
        this.$store.commit({type: 'setModalPos', modalPos: pos});
        this.isSizeModal = false;
        this.isColorModal = false;
        this.openEditorModal = !this.openEditorModal;
      },
      openSizeModal(ev) {
        // console.log(ev);
        const pos = {
          right: '',
          top: '',
        };
        if (ev.clientX > window.innerWidth - 300) pos.right = 0;
        if (ev.clientY > window.innerHeight - 250) pos.top = -350;
        this.$store.commit({type: 'setModalPos', modalPos: pos});
        this.openEditorModal = false;
        this.isColorModal = false;
        this.isSizeModal = !this.isSizeModal;
      },
      openColorModal(ev) {
        // console.log(ev);
        const pos = {
          right: '',
          top: '',
        };
        if (ev.clientX > window.innerWidth - 300) pos.right = 0;
        if (ev.clientY > window.innerHeight - 250) pos.top = -350;
        this.$store.commit({type: 'setModalPos', modalPos: pos});
        this.openEditorModal = false;
        this.isSizeModal = false;
        this.isColorModal = !this.isColorModal;
      },
      dupElement() {
        this.$emit('dupElement');
      },
      styleChanged(style) {
        this.$emit('styleChanged', style);
      },
      onSaveImg(url) {
        // console.log("url at toolbar", url);
        this.$emit('onSaveImg', url);
      },
    },
  };
</script>

<style></style>
