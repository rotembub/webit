<template>
  <section class="basic-btn">
    <button @click.stop="isEdit = !isEdit" :style="details.style">
      {{ details.txt }}
    </button>
    <wap-tool-bar v-if="isEdit"></wap-tool-bar>
  </section>
</template>

<script>
import wapToolBar from "../wap-tool-bar.cmp.vue";
import elementEditor from '../../editor-cmps/element-editor-cmp.vue'
export default {
  props: ["details"],
  components: {
    wapToolBar,
    elementEditor
  },
  data() {
    return {
      isEdit: false,
    };
  },
  computed: {},
  methods: {
    selected() {
      this.isEdit = !this.isEdit;
      this.$emit("setSelected", this.details);
    },
  },
};
</script>

<style>
</style>