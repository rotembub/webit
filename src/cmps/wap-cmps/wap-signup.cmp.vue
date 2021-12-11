<template>
  <section class="wap-signup" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
    <basic-h3 v-for="item in  cmp.info.title" :key="item.id" :details="{ data: item, cmpId: cmp.id, containerId, elType: 'title' }"></basic-h3>
    </template>
    <!-- <h3 v-if="cmp.info.title">{{ cmp.info.title.txt }}</h3> -->
    <template v-if="cmp.info.subtitle">
    <basic-paragraph v-for="item in cmp.info.subtitle" :key="item.id" :details="{ data: item, cmpId: cmp.id, containerId, elType: 'subtitle' }"></basic-paragraph>
    </template>
    <!-- <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle.txt }}</p> -->
    <form class="sign-up-form" @submit.stop.prevent="">
      <template v-if="cmp.info.input">
      <basic-input v-for="item in cmp.info.input" :key="item.id" :details="{data: item,cmpId: cmp.id, containerId, elType: 'input' }"></basic-input>
      <!-- <input type="email" placeholder="email@example.com" class="email" /> -->
      <div class="mail-error hidden">Please enter a valid email address</div>
      </template>
      <template v-if="cmp.info.buttons">
      <basic-btn  v-for="item in cmp.info.buttons" :key="item.id" :details="{data: item,cmpId: cmp.id, containerId, elType: 'buttons' }">
      </basic-btn>
      </template>
    </form>
    <basic-btn v-if="cmp.info.btnTxt" :details="{ data: cmp.info.btnTxt, cmpId: cmp.id, containerId, elType: 'btnTxt' }"></basic-btn>
    <!-- <button v-if="cmp.info.btnTxt">{{ cmp.info.btnTxt.txt }}</button> -->
  </section>
</template>

<script>
import basicH3 from './basic-cmps/basic-h3-cmp.vue'
import basicParagraph from './basic-cmps/basic-paragraph.cmp.vue'
import basicBtn from './basic-cmps/basic-btn-cmp.vue'
import basicInput from './basic-cmps/basic-input-cmp.vue'

export default {
  props: ['cmp','containerId'],
  components:{
    basicH3,basicParagraph,basicBtn,basicInput
  },
   computed: {
      getCurrStyle() {
        const style = {
          backgroundImage: this.cmp.style.background,
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px',
          backgroundColor: this.cmp.style.backgroundColor,
              //new size style problem with signup ui
          height: this.cmp.style.height + 'vh',
          paddingTop: this.cmp.style.paddingTop + '%',
          paddingBottom: this.cmp.style.paddingBottom + '%',
          paddingLeft: this.cmp.style.paddingLeft + '%',
          paddingRight: this.cmp.style.paddingRight + '%',
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