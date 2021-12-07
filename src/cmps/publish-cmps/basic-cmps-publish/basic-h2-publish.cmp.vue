<template>
  <section class="basic-h2-publish">
    <h2 :style="getStyle">
      {{ details.data.txt }}
    </h2>
  </section>
</template>

<script>
export default {
  props: ["details"],
  computed: {
    getStyle() {
      return {
        color: this.details.data.style.color,
        fontSize: this.details.data.style.fontSize + "px",
        lineHeight: this.details.data.style.lineHeight + "px",
        paddingTop: this.details.data.style.paddingTop + "px",
        paddingBottom: this.details.data.style.paddingBottom + "px",
        paddingRight: this.details.data.style.paddingRight + "px",
        paddingLeft: this.details.data.style.paddingLeft + "px",
        fontStyle: this.details.data.style.fontStyle,
        fontFamily: this.details.data.style.fontFamily,
      };
    },
  },
  methods: {},
};
</script>

<style></style>
