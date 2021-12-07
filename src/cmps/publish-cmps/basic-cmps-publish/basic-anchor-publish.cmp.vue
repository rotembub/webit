<template>
  <section class="basic-anchor-publish">
    <a :style="getStyle">{{ details.data.txt }}</a>
  </section>
</template>

<script>

export default {
  props: ["details"],
  components: {},
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
