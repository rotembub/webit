<template>
  <section class="basic-img">
    <img
      @click.stop="isEdit = !isEdit"
      :src="require('@/assets/wap-imgs/' + details.data.url)"
      alt=""
    />
    <basic-el-toolbar @removeEl="removeEl" v-if="isEdit" ></basic-el-toolbar>
  </section>
</template>

<script>
import basicElToolbar from "../../editor-cmps/basic-el-toolbar.cmp.vue";
export default {
  props: ["details"],
  data() {
    return {
      isEdit: false,
    };
  },
  components: {
    basicElToolbar,
  },
    computed: {
  },
    methods: {
    removeEl() {
            this.$store.dispatch({
        type: "removeElFromCmp",
        cmpId: this.details.cmpId,
        elType: this.details.elType,
        elId: this.details.data.id,
        containerId: this.details.containerId
      });
    },
  },
};
</script>

<style>
</style>