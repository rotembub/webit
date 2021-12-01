<template>
  <section class="wap-contact" :class="cmp.theme">
    <h2>{{ cmp.info.title }}</h2>
    <p>{{ cmp.info.subtitle }}</p>
    <!-- <input type="email" placeholder="example@email.com" /> -->
    <button>{{ cmp.info.btnText }}</button>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>