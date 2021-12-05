<template>
  <section class="wap-img" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.imgs">
      <basic-img
        v-for="img in cmp.info.imgs"
        :key="img.id"
        :details="{
          data: img,
          cmpId: cmp.id,
          elType: 'imgs',
        }"
      ></basic-img>
    </template>
  </section>
</template>

<script>
import basicImg from "./basic-cmps/basic-img-cmp.vue";
export default {
  props: ["cmp"],
  components: {
    basicImg,
  },
  methods: {},
  computed: {
    getCurrStyle() {
      const style = {
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