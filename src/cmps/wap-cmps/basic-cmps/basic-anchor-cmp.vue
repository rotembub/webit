<template>
  <section class="basic-anchor">
    <a @click.stop="isEdit = !isEdit">{{ details.txt }}</a>
    <wap-tool-bar v-if="isEdit"></wap-tool-bar>
  </section>
</template>

<script>
import wapToolBar from "../wap-tool-bar.cmp.vue";
export default {
  props: ["details"],
  components: {
    wapToolBar,
  },
  data() {
    return {
      isEdit: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>