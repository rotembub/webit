<template>
  <section v-if="wapToPublish" class="published-wap-container">
    <div :class="wapToPublish.theme">
      <wap-dynamic v-for="cmp in wapToPublish.cmps" :key="cmp.id" :cmp="cmp">
      </wap-dynamic>
    </div>
  </section>
</template>

<script>
import wapDynamic from '../cmps/wap-cmps/wap-dynamic.cmp.vue'
export default {
  components: { wapDynamic },
  computed: {
    wapToPublish() {
      console.log('PUBLISH WAP COMPUTED', this.$store.getters.publishedWap)
      return this.$store.getters.publishedWap
    },
  },
  actions: {},
}
</script>

<style></style>
