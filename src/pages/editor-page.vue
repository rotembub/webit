<template>
  <section class="editor-page">
    <wap-builder />
    <cmp-picker />
  </section>
</template>

<script>
  import wapBuilder from '../cmps/wap-builder.cmp.vue';
  import cmpPicker from '../cmps/cmp-picker/cmp-picker.cmp.vue';
  export default {
    components: {
      wapBuilder,
      cmpPicker,
    },
  };
</script>

<style></style>
