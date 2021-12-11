<template>
  <div id="app">
    <notifications group="foo" />
    <router-view />
  </div>
</template>

<script>
import loading from './cmps/loading.cmp.vue'
export default {
  components: {
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
