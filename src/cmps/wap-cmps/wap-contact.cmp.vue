<template>
  <section class="wap-contact" :style="getCurrStyle" :class="cmp.theme">
    <basic-h2 v-if="cmp.info.title" :details="cmp.info.title"></basic-h2>
    <!-- <h2 v-if="cmp.info.title">{{ cmp.info.title.txt }}</h2> -->
    <basic-paragraph v-if="cmp.info.subtitle" :details="cmp.info.subtitle"></basic-paragraph>
    <!-- <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle.txt }}</p> -->
    <basic-btn v-if="cmp.info.btnTxt" :details="cmp.info.btnTxt"></basic-btn>
    <!-- <button v-if="cmp.info.btnTxt">{{ cmp.info.btnTxt.txt }}</button> -->
  </section>
</template>

<script>
import basicH2 from "./basic-cmps/basic-h2-cmp.vue";
import basicParagraph from './basic-cmps/basic-paragraph.cmp.vue'
import basicBtn from './basic-cmps/basic-btn-cmp.vue'
export default {
  props: ["cmp"],
  components: { basicH2,basicParagraph,basicBtn },
  data() {
    return {};
  },
  computed: {
    getCurrStyle() {
      console.log("IM HERE Gallery", this.cmp.style);
      console.log("color", this.cmp.style.color);
      const style = {
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px", //fix fontSize not change
        backgroundColor: this.cmp.style.backgroundColor,
      };
      return style;
    },
  },
};
</script>

<style></style>

title subtitle button
h2        p       btn


