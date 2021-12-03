<template>
  <section class="wap-signup" :class="cmp.theme">
    <h3 v-if="cmp.info.title">{{ cmp.info.title.txt }}</h3>
    <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle.txt }}</p>
    <!-- <input type="text" placeholder="Your full name"> -->
    <form class="sign-up-form">
      <input type="email" placeholder="email@example.com" class="email" />
      <div class="mail-error hidden">Please enter a valid email address</div>
      <input
        type="submit"
        :value="cmp.info.inputTxt.txt"
        class="email-submit-btn"
      />
    </form>
    <button v-if="cmp.info.btnTxt">{{ cmp.info.btnTxt.txt }}</button>
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


 info: {
        title: { id: utilService.makeId(4), txt: 'Get Early Access Today', style: { color: '', fontSize: '' } },
        subtitle: { id: utilService.makeId(4), txt: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you', style: { color: '', fontSize: '' } },
        inputTxt: { id: utilService.makeId(4), txt: 'Get Started For Free!', style: { color: '', fontSize: '' } },
        btnTxt: { id: utilService.makeId(4), txt: 'Sign Me Up!', style: { color: '', fontSize: '' } }
      },