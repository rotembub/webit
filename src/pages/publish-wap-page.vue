<template>
  <section v-if="wapToPublish" class="published-wap-container">
    <div :class="wapToPublish.theme">
      <wap-dynamic v-for="cmp in wapToPublish.cmps" :key="cmp.id" :cmp="cmp">
      </wap-dynamic>
    </div>
  </section>
</template>

<script>
import wapDynamic from '../cmps/publish-cmps/wap-cmps-publish/wap-dynamic-publish.cmp.vue'
export default {
  async created() {
    const id = this.wapId
    if (id) await this.$store.dispatch({ type: 'publishWap', wapId: id })
  },
  components: { wapDynamic },
  computed: {
    wapToPublish() {
      console.log('PUBLISH WAP COMPUTED', this.$store.getters.publishedWap)
      return this.$store.getters.publishedWap
    },
    wapId() {
      return this.$route.params.wapId
    },
  },

  actions: {},
}
</script>

<style></style>
