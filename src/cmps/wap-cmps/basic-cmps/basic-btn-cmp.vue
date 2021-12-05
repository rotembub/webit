<template>
  <section class="basic-btn">
    <button @click.stop="isEdit = !isEdit" :style="getStyle">
      {{ details.data.txt }}
    </button>
    <basic-el-toolbar
      @removeEl="removeEl"
      v-if="isEdit"
      :elStyle="details.data.style"
    ></basic-el-toolbar>
  </section>
</template>

<script>
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
        color: this.details.data.style.color,
        fontSize: this.details.data.style.fontSize + "px",
      };
    },
  },
  methods: {
    removeEl() {
      this.$store.dispatch({
        type: "removeElFromCmp",
        cmpId: this.details.cmpId,
        elType: this.details.elType,
        elId: this.details.data.id,
        containerId: this.details.containerId,
      });
    },
  },
};
</script>

<style>
</style>