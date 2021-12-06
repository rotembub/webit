<template>
  <div>
    <app-header></app-header>
    <section class="templates-page">
      <h1>You can pick one of our best templates</h1>
      <h2>Or you can start from scratch</h2>
      <template-list v-if="waps" :waps="waps"></template-list>
    </section>
  </div>
</template>

<script>
import templateList from '../cmps/template-list.cmp.vue'
import appHeader from '../cmps/app-header.cmp.vue'

export default {
  data() {
    return {}
  },
  created() {
    this.$store.dispatch({ type: 'loadWaps' })
  },
  computed: {
    waps() {
      console.log(
        'getting waps for you in templates PAGE',
        this.$store.getters.getWaps
      )
      return this.$store.getters.getWaps
    },
  },
  components: {
    templateList,
    appHeader,
  },
}
</script>

<style></style>
