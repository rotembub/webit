<template>
  <section class="basic-btn-publish">
    <!-- on click here refresh the page need to fix -->
    <button :style="getStyle">
      {{ details.data.txt }}
    </button>
  </section>
</template>

<script>
export default {
  props: ["details"],
  data() {
    return {};
  },
  computed: {
    getStyle() {
      return {
        color: this.details.data.style.color,
        backgroundColor: this.details.data.style.backgroundColor,
        fontSize: this.details.data.style.fontSize + "px",
        lineHeight: this.details.data.style.lineHeight + "px",
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
  },
  methods: {},
};
</script>

<style></style>
