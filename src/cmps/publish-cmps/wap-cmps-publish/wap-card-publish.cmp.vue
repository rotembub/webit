
<template>
  <section class="wap-card" :style="getCurrStyle" :class="cmp.theme">
    <div class="text-block">
      <template v-if="cmp.info.title">
        <basic-h1
          v-for="item in cmp.info.title"
          :key="item.id"
          :details="{ data: item }"
        ></basic-h1>
      </template>
      <template v-if="cmp.info.subtitle">
        <basic-paragraph
          v-for="item in cmp.info.subtitle"
          :key="item.id"
          :details="{ data: item }"
        ></basic-paragraph>
      </template>
      <template v-if="cmp.info.buttons">
        <basic-btn
          v-for="item in cmp.info.buttons"
          :key="item.id"
          :details="{ data: item }"
        ></basic-btn>
      </template>
    </div>
    <template v-if="cmp.info.imgs">
      <basic-img
        v-for="img in cmp.info.imgs"
        :key="img.id"
        :details="{
          data: img,
        }"
      ></basic-img>
    </template>
  </section>
</template>

<script>
import basicImg from "../basic-cmps-publish/basic-img-publish.cmp.vue";
import basicH1 from "../basic-cmps-publish/basic-h1-publish.cmp.vue";
import basicParagraph from "../basic-cmps-publish/basic-paragraph-publish.cmp.vue";
import basicBtn from "../basic-cmps-publish/basic-btn-publish.cmp.vue";
export default {
  props: ["cmp", "containerId"],
  components: {
    basicH1,
    basicParagraph,
    basicBtn,
    basicImg,
  },
  methods: {},
  computed: {
    getCurrStyle() {
      const style = {
        backgroundImage: this.cmp.style.background,
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px",
        backgroundColor: this.cmp.style.backgroundColor,
        //new size style
        height: this.cmp.style.height + "px", // problem range too small
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
