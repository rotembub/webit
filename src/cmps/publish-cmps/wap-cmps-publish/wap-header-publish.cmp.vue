<template>
  <section :style="getCurrStyle" class="wap-header" :class="cmp.theme">
    <div :style="getCurrStyle" class="logo">
      <basic-h2
        v-if="cmp.info.logo && cmp.info.logo.type === 'txt'"
        :details="{ data: cmp.info.logo }"
      ></basic-h2>
      <basic-img
        v-if="cmp.info.logo && cmp.info.logo.type === 'img'"
        :details="{ data: cmp.info.logo }"
      ></basic-img>
    </div>
    <div class="nav-bar">
      <basic-anchor
        v-for="item in cmp.info.navBar"
        :key="item.details"
        :details="{ data: item }"
      ></basic-anchor>
    </div>
    <span class="burger-btn"><i class="fas fa-bars"></i></span>
  </section>
</template>

<script>
import basicH2 from "../basic-cmps-publish/basic-h2-publish.cmp.vue";
import basicImg from "../basic-cmps-publish/basic-img-publish.cmp.vue";
import basicAnchor from "../basic-cmps-publish/basic-anchor-publish.cmp.vue";

export default {
  components: {
    basicImg,
    basicH2,
    basicAnchor,
  },
  data() {
    return {
      cmpStyle: null,
    };
  },
  props: ["cmp", "containerId"],
  created() {
    // console.log('IM HERE', this.cmp)
  },
  computed: {
    getCurrStyle() {
      // console.log("IM HERE cmpStyle", this.cmp.style);
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
  methods: {},
};
</script>

<style></style>

