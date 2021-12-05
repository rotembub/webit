<template>
  <section class="basic-img">
    <img
      @click.stop="setSelected"
      :src="require('@/assets/wap-imgs/' + details.data.url)"
      alt=""
    />
    <basic-el-toolbar @removeEl="removeEl" v-if="isEdit"></basic-el-toolbar>
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