<template>
  <section class="basic-anchor">
    <a @click.stop="setSelected" :style="getStyle">{{ details.data.txt }}</a>
    <basic-el-toolbar
      @removeEl="removeEl"
      :cmpId="getCmpId"
      v-if="isEdit"
      :elStyle="details.data.style"
    ></basic-el-toolbar>
    <!-- <wap-tool-bar v-if="isEdit" :style="details.style"></wap-tool-bar> -->
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
      isSelected: false,
    };
  },
  computed: {
    getStyle() {
      return {
        color: this.details.data.style.color,
        fontSize: this.details.data.style.fontSize + "px",
        // backgroundColor: this.cmp.style.backgroundColor,
      };
    },
    isEdit() {
      const id = this.$store.getters.getElSelectedId;
      if (id === this.details.data.id) return true;
      return false;
    },
    getCmpId() {
      if (this.details.containerId) return this.details.containerId;
      return this.details.cmpId;
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
      // this.$emit("removeEl", this.details.id, this.elType);
    },
    setSelected() {
      if (this.isSelected) {
        this.isSelected = false;
        this.$store.commit({
          type: "setSelectedElement",
          id: null,
        });
      } else {
        this.isSelected = true;
        this.$store.commit({
          type: "setSelectedElement",
          id: this.details.data.id,
        });
      }
    },
  },
};
</script>

<style>
</style>