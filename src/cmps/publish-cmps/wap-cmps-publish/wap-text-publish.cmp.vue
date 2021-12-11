<template>
  <section class="wap-text" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
      <basic-h1
        v-for="item in cmp.info.title"
        :key="item.id"
        :details="{ data: item }"
      ></basic-h1>
    </template>
    <template v-if="cmp.info.subtitle">
      <basic-h3
        v-for="item in cmp.info.subtitle"
        :key="item.id"
        :details="{
          data: item,
        }"
      ></basic-h3>
    </template>
    <template v-if="cmp.info.txt">
      <basic-paragraph
        v-for="item in cmp.info.txt"
        :key="item.id"
        :details="{ data: item }"
      ></basic-paragraph>
    </template>
  </section>
</template>

<script>
import basicH1 from "../basic-cmps-publish/basic-h1-publish.cmp.vue";
import basicH3 from "../basic-cmps-publish/basic-h3-publish.cmp.vue";
import basicParagraph from "../basic-cmps-publish/basic-paragraph-publish.cmp.vue";

export default {
  props: ["cmp", "containerId"],
  components: { basicParagraph, basicH3, basicH1 },
  data() {
    return {};
  },
  computed: {
    getCurrStyle() {
      // console.log("IM HERE", this.cmp.style);
      // console.log("color", this.cmp.style.color);
      const style = {
        backgroundImage: this.cmp.style.background,
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px",
        backgroundColor: this.cmp.style.backgroundColor,
        backgroundImage: this.cmp.style.background,
        //new size style
        height: this.cmp.style.height + "px",
        paddingTop: this.cmp.style.paddingTop + "px",
        paddingBottom: this.cmp.style.paddingBottom + "px",
        paddingLeft: this.cmp.style.paddingLeft + "px",
        paddingRight: this.cmp.style.paddingRight + "px",
      };
      return style;
    },
  },
};
</script>

<style></style>
