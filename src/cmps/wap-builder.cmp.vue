<template>
  <section v-if="wap">
    <!-- <component v-for="cmp in wap.cmps" :cmp="cmp" :is="cmp.type" :key="cmp.id">
    </component> -->
    <div :class="wap.theme">
      <wap-dynamic v-for="cmp in wap.cmps" :key="cmp.id" :cmp="cmp">
        <slot>
          <wap-tool-bar @updated="updateWap" :id="cmp.id"></wap-tool-bar>
        </slot>
      </wap-dynamic>
    </div>
    <el-button
      @click="toggleFullScreen"
      class="is-full-wap-btn"
      type="info"
      :icon="iconToShow"
      circle
    ></el-button>
  </section>
</template>

<script>
// import wapHeader from "./wap-cmps/wap-header.cmp.vue";
import wapDynamic from '../cmps/wap-cmps/wap-dynamic.cmp.vue'
import wapToolBar from './wap-cmps/wap-tool-bar.cmp.vue'
export default {
  data() {
    return {}
  },

  methods: {
    toggleFullScreen() {
      this.$store.dispatch({ type: 'toggleWapFullScreen' })
    },
    updateWap(updatedWap) {
      console.log(updatedWap, 'got to wapBuilder')
      //try to update here
    },
  },
  computed: {
    iconToShow() {
      const isFullScreen = this.$store.getters.isFullScreen
      if (isFullScreen) return 'el-icon-zoom-out'
      return 'el-icon-zoom-in'
    },

    wap() {
      // console.log(this.$store.getters.getCurrWap);
      console.log('wapBuilder computed', this.$store.getters.getCurrWap)
      return this.$store.getters.getCurrWap
    },
  },
  components: {
    // wapHeader,
    wapToolBar,
    wapDynamic,
  },
}
</script>

<style></style>
