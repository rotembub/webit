<template>
  <section class="wap-chat" :class="cmp.theme">
    <h1>IMAGINE A CHAT HERE</h1>
    <p>{{ cmp.info }}</p>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>