<template>
  <section v-if="wap" class="template-preview">
    <h4>preview</h4>
    <div>wap id: {{ wap._id }}</div>
  </section>
</template>

<script>
export default {
  props: ['wap'],
  created() {
    console.log('created preview')
  },
}
</script>

<style></style>
