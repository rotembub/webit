<template>
  <section class="wap-text" :style="getCurrStyle" :class="cmp.theme">
    <h1>{{ cmp.info.title }}</h1>
    <p>{{ cmp.info.subtitle }}</p>
  </section>
</template>

<script>
  export default {
    props: ['cmp'],
    components: {},
    data() {
      return {};
    },
    computed: {
      getCurrStyle() {
        console.log('IM HERE', this.cmp.style);
        console.log('color', this.cmp.style.color);
        const style = {
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px', // subtitle size change title nope
          backgroundColor: this.cmp.style.backgroundColor,
        };
        return style;
      },
    },
  };
</script>

<style></style>
