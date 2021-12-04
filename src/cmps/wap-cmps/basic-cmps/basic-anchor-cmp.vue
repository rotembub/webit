<template>
  <section class="basic-anchor">
    <a @click.stop="isEdit = !isEdit" :style="getStyle">{{ details.txt }}</a>
    <basic-el-toolbar v-if="isEdit" :elStyle="details.style"></basic-el-toolbar>
    <!-- <wap-tool-bar v-if="isEdit" :style="details.style"></wap-tool-bar> -->
  </section>
</template>

<script>
// import wapToolBar from "../wap-tool-bar.cmp.vue";
// import elementEditor from "../../editor-cmps/element-editor-cmp.vue";
import basicElToolbar from "../../editor-cmps/basic-el-toolbar.cmp.vue";
export default {
  props: ["details"],
  components: {
    basicElToolbar,
  },
  data() {
    return {
      isEdit: false,
    };
  },
  computed: {
    getStyle() {
      return {
        color: this.details.style.color,
        fontSize: this.details.style.fontSize + "px",
        // backgroundColor: this.cmp.style.backgroundColor,
      };
    },
  },
  methods: {},
};
</script>

<style>
</style>