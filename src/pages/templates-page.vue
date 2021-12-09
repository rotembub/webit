<template>
  <div>
    <app-header></app-header>
    <section class="templates-page">
      <div class="templates-page-title">
        <h1>Just pick one of our best templates</h1>
        <p>Or you can start from scratch</p>
      </div>
      <template-list v-if="templates" :templates="templates"></template-list>
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
    this.$store.dispatch({ type: 'loadTemplates' })
  },
  computed: {
    templates() {
      console.log(
        'getting waps for you in templates PAGE',
        this.$store.getters.getTemplates
      )
      return this.$store.getters.getTemplates
    },
  },
  components: {
    templateList,
    appHeader,
  },
}
</script>

<style></style>
