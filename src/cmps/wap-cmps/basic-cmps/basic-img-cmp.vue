<template>
  <section class="basic-img">
    <img
      @click.stop="isEdit = !isEdit"
      :src="require('@/assets/wap-imgs/' + details.url)"
      alt=""
    />
    <wap-tool-bar v-if="isEdit"></wap-tool-bar>
  </section>
</template>

<script>
import wapToolBar from "../wap-tool-bar.cmp.vue";
export default {
  props: ["details"],
  data() {
    return {
      isEdit: false,
    };
  },
  components: {
    wapToolBar,
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>