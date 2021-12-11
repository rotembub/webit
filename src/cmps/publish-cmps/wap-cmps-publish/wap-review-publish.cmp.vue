<template>
  <section class="wap-review" :class="cmp.theme">
    <div class="review-card">
      <basic-paragraph
        v-for="item in cmp.info.txt"
        :key="item.id"
        :details="{ data: item }"
      ></basic-paragraph>

      <div class="customer">
        <basic-img
          v-for="item in cmp.info.avatar"
          :key="item.id"
          :details="{ data: item }"
        ></basic-img>
        <basic-paragraph
          v-for="item in cmp.info.name"
          :key="item.id"
          :details="{ data: item }"
        >
        </basic-paragraph>
        <basic-paragraph
          v-for="item in cmp.info.title"
          :key="item.id"
          :details="{ data: item }"
        >
        </basic-paragraph>
      </div>
    </div>
  </section>
</template>

<script>
import basicParagraph from "../basic-cmps-publish/basic-paragraph-publish.cmp.vue";
import basicImg from "../basic-cmps-publish/basic-img-publish.cmp.vue";
import basicSpan from "../basic-cmps-publish/basic-span-publish.cmp.vue";

export default {
  props: ["cmp", "containerId"],
  components: {
    basicParagraph,
    basicImg,
    basicSpan,
  },
  computed: {
    getCurrStyle() {
      const style = {
        backgroundImage: this.cmp.style.background,
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px",
        backgroundColor: this.cmp.style.backgroundColor,
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