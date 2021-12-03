<template>
  <section class="basic-input">
    <input
      @click.stop="isEdit = !isEdit"
      :class="details.class"
      type="email"
      placeholder="email@example.com"
    />
    <wap-tool-bar v-if="isEdit"></wap-tool-bar>
  </section>
</template>

<script>
import wapToolBar from "../wap-tool-bar.cmp.vue";
export default {
    props:['details'],
  data() {
    return {
      isEdit: false,
    };
  },
  components: {
    wapToolBar,
  },
};
</script>

<style>
</style>