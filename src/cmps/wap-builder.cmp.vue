<template>
  <section class="wap-builder" v-if="wap">
    <!-- <component v-for="cmp in wap.cmps" :cmp="cmp" :is="cmp.type" :key="cmp.id">
    </component> -->
    <wap-dynamic v-for="cmp in wap.cmps" :key="cmp.id" :cmp="cmp">
      <slot>
        <wap-tool-bar @updated="updateWap" :id="cmp.id"></wap-tool-bar>
      </slot>
    </wap-dynamic>
  </section>
</template>

<script>
  // import wapHeader from "./wap-cmps/wap-header.cmp.vue";
  import wapDynamic from '../cmps/wap-cmps/wap-dynamic.cmp.vue';
  import wapToolBar from './wap-cmps/wap-tool-bar.cmp.vue';
  export default {
    methods: {
      updateWap(updatedWap) {
        console.log(updatedWap, 'got to wapBuilder');
        //try to update here
      },
    },
    computed: {
      wap() {
        // console.log(this.$store.getters.getCurrWap);
        console.log('wapBuilder computed', this.$store.getters.getCurrWap);
        return this.$store.getters.getCurrWap;
      },
    },
    components: {
      // wapHeader,
      wapToolBar,
      wapDynamic,
    },
  };
</script>

<style></style>
