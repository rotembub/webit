<template>
  <section class="wap-builder">
    <!-- <component v-for="cmp in wap.cmps" :cmp="cmp" :is="cmp.type" :key="cmp.id">
    </component> -->
    <wap-dynamic
      v-if="wap.cmps"
      v-for="cmp in wap.cmps"
      :key="cmp.id"
      :cmp="cmp"
    >
    </wap-dynamic>
  </section>
</template>

<script>
// import wapHeader from "./wap-cmps/wap-header.cmp.vue";
import wapDynamic from '../cmps/wap-cmps/wap-dynamic.cmp.vue'
export default {
  computed: {
    wap() {
      console.log(this.$store.getters.getCurrWap)
      return this.$store.getters.getCurrWap
    },
  },
  components: {
    // wapHeader,
    wapDynamic,
  },
}
</script>

<style></style>
