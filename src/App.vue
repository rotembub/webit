<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    <router-view />
  </div>
</template>

<script>
import appHeader from './cmps/app-header.cmp.vue'
import loading from './cmps/loading.cmp.vue'
export default {
  components: {
    appHeader,
    loading,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  created() {
    this.$isLoading(true)
    setTimeout(() => this.$isLoading(false), 1000)
  },
}
</script>
