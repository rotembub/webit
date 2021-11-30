<template>
  <section class="wap-builder">
    <h1>HI</h1>
    <component v-for="cmp in wap.cmps" :cmp="cmp" :is="cmp.type" :key="cmp.id">
    </component>
  </section>
</template>

<script>
import wapHeader from "./wap-cmps/wap-header.cmp.vue";
export default {
  computed: {
    wap() {
      console.log(this.$store.getters.getCurrWap);
      return this.$store.getters.getCurrWap;
    },
  },
  components: {
    wapHeader,
  },
};
</script>

<style>
</style>