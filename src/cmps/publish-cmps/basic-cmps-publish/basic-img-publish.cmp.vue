<template>
  <section class="basic-img-publish" :style="getStyle">
    <img :src="details.data.url" alt="" :style="getImgSize" />
  </section>
</template>

<script>
export default {
  props: ["details"],
  computed: {
    getStyle() {
      return {
        paddingTop: this.details.data.style.paddingTop + "rem",
        paddingBottom: this.details.data.style.paddingBottom + "rem",
        paddingRight: this.details.data.style.paddingRight + "rem",
        paddingLeft: this.details.data.style.paddingLeft + "rem",
        fontStyle: this.details.data.style.fontStyle,
        fontFamily: this.details.data.style.fontFamily,
        fontWeight: this.details.data.style.fontWeight,
        marginTop: this.details.data.style.marginTop + "rem",
        marginBottom: this.details.data.style.marginBottom + "rem",
        marginRight: this.details.data.style.marginRight + "rem",
        marginLeft: this.details.data.style.marginLeft + "rem",
      };
    },
    getImgSize() {
      return {
        height: this.details.data.style.maxHeight + "rem",
        width: this.details.data.style.maxWidth + "rem",
      };
    },
  },
  methods: {},
};
</script>

<style>
</style>