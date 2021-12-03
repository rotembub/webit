<template>
  <section class="basic-span">
    <span @click.stop="isEdit = !isEdit"><br />{{ details.txt }}</span>
    <!--WATCHOUT FOR THAT <br /> -->
    <wap-tool-bar v-if="isEdit"></wap-tool-bar>
  </section>
</template>

<script>
import wapToolBar from "../wap-tool-bar.cmp.vue";
export default {
  props: ["details"],
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