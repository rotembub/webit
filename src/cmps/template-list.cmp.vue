<template>
  <section v-if="waps" class="template-list">
    <h2>LIST</h2>

    <template-preview
      v-for="wap in waps"
      :key="wap._id"
      :wap="wap"
    ></template-preview>
  </section>
</template>

<script>
import templatePreview from "./template-preview.cmp.vue";

export default {
  props: ["waps"],
  components: {
    templatePreview,
  },
  created() {
    console.log("created list");
  },
  computed: {
    // getWaps() {
    //   return this.waps;
    // },
  },
};
</script>

<style>
</style>