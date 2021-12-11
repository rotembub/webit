<template>
  <section class="wap-signup" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
    <basic-h3 v-for="item in  cmp.info.title" :key="item.id" :details="{ data: item}"></basic-h3>
    </template>
    <template v-if="cmp.info.subtitle">
    <basic-paragraph v-for="item in cmp.info.subtitle" :key="item.id" :details="{ data: item}"></basic-paragraph>
    </template>
    <form class="sign-up-form">
      <template v-if="cmp.info.input">
      <basic-input v-for="item in cmp.info.input" :key="item.id" :details="{data: item}"></basic-input>
      <div class="mail-error hidden">Please enter a valid email address</div>
      </template>
      <template v-if="cmp.info.buttons">
      <basic-btn  v-for="item in cmp.info.buttons" :key="item.id" :details="{data: item}">
      </basic-btn>
      </template>
    </form>
  </section>
</template>

<script>
import basicH3 from '../basic-cmps-publish/basic-h3-publish.cmp.vue'
import basicParagraph from '../basic-cmps-publish/basic-paragraph-publish.cmp.vue'
import basicBtn from '../basic-cmps-publish/basic-btn-publish.cmp.vue'
import basicInput from '../basic-cmps-publish/basic-input-publish.cmp.vue'

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
          height: this.cmp.style.height + 'px',
          paddingTop: this.cmp.style.paddingTop + 'px',
          paddingBottom: this.cmp.style.paddingBottom + 'px',
          paddingLeft: this.cmp.style.paddingLeft + 'px',
          paddingRight: this.cmp.style.paddingRight + 'px',
        };
        return style;
      },
    },
};
</script>

<style>
</style>
