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
        fontSize: this.details.data.style.fontSize + "px",
        lineHeight: this.details.data.style.lineHeight + "px",
        paddingTop: this.details.data.style.paddingTop + "px",
        fontStyle: this.details.data.style.fontStyle,
        fontFamily: this.details.data.style.fontFamily,
      };
    },
  },
  methods: {},
};
</script>

<style></style>
