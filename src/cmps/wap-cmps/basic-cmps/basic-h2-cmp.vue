<template>
  <section class="basic-h2">
    <h2 @click.stop="isEdit=!isEdit">{{ details.txt }}</h2>
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