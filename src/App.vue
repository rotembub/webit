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

    if (window.innerWidth < 500) {
      this.$store.dispatch({ type: 'isMobile', isMobile: true })
      console.log('Setting Mobile')
    } else {
      this.$store.dispatch({ type: 'isMobile', isMobile: false })
      console.log('Setting Desktop')
    }
  },
  methods: {
    setDeviceType(ev) {
      console.log('🚀 ~ file: App.vue ~ line 31 ~ setDeviceType ~ ev', ev)
    },
  },
}
</script>
