<template>
  <section class="wap-video">
    <iframe :src="cmp.info.url" frameborder="0"></iframe>
    some video in youtube
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>