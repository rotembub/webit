<template>
  <section class="wap-signup" :style="getCurrStyle" :class="cmp.theme">
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
   computed: {
      getCurrStyle() {
        const style = {
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px',
          backgroundColor: this.cmp.style.backgroundColor,
        };
        return style;
      },
    },
};
</script>

<style>
</style>


title? subtitle?  input? button?
<h>
