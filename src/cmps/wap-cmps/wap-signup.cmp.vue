<template>
  <section class="wap-signup" :class="cmp.theme">
    <h3 v-if="cmp.info.title">{{ cmp.info.title }}</h3>
    <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle }}</p>
    <!-- <input type="text" placeholder="Your full name"> -->
    <form class="sign-up-form">
      <input type="email" placeholder="email@example.com" class="email" />
      <div class="mail-error hidden">Please enter a valid email address</div>
      <input
        type="submit"
        :value="cmp.info.inputTxt"
        class="email-submit-btn"
      />
    </form>
    <button v-if="cmp.info.btnTxt">{{ cmp.info.btnTxt }}</button>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>
