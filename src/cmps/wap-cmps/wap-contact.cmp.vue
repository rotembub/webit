<template>
  <section class="wap-contact" :style="getCurrStyle" :class="cmp.theme">
    <h2 v-if="cmp.info.title">{{ cmp.info.title.txt }}</h2>
    <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle.txt }}</p>
    <button v-if="cmp.info.btnTxt">{{ cmp.info.btnTxt.txt }}</button>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
  components: {},
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


