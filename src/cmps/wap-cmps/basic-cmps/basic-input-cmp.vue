<template>
  <section class="basic-input">
    <input
      :style="getStyle"
      @click.stop="setSelected"
      :class="details.class"
      type="email"
      placeholder="email@example.com"
    />
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
  data() {
    return {
      isSelected: false,
    };
  },
  components: {
    basicElToolbar,
  },
  computed: {
    getStyle() {
      return {
        color: this.details.data.style.color,
        fontSize: this.details.data.style.fontSize + "px",
      };
    },
    isEdit() {
      const id = this.$store.getters.getElSelectedId;
      if (id === this.details.data.id) return true;
      return false;
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