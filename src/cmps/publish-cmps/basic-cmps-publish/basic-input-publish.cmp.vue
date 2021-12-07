<template>
  <section class="basic-input-publish">
    <input
      :style="getStyle"
      :class="details.class"
      type="email"
      placeholder="email@example.com"
    />
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
      };
    },
  },
  methods: {},
};
</script>

<style>
</style>