<template>
  <section class="wap-text" :class="cmp.theme">
    <h1>{{ cmp.info.title }}</h1>
    <p>{{ cmp.info.subtitle }}</p>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>