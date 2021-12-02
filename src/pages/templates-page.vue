<template>
  <section class="templates-page">
    <h1>Here are some of our best</h1>
    <template-list v-if="waps" :waps="waps"></template-list>
  </section>
</template>

<script>
import templateList from "../cmps/template-list.cmp.vue";

export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch({ type: "loadWaps" });
  },
  computed: {
    waps() {
      console.log("getting waps for you in templates PAGE" ,this.$store.getters.getWaps);
      return this.$store.getters.getWaps;
    },
  },
  components: {
    templateList,
  },
};
</script>

<style>
</style>