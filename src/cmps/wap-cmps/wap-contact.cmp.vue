<template>
  <section class="wap-contact" :style="getCurrStyle" :class="cmp.theme">
    <h2>{{ cmp.info.title }}</h2>
    <p>{{ cmp.info.subtitle }}</p>
    <!-- <input type="email" placeholder="example@email.com" /> -->
    <button>{{ cmp.info.btnTxt }}</button>
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
        console.log('IM HERE Gallery', this.cmp.style);
        console.log('color', this.cmp.style.color);
        const style = {
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px', //fix fontSize not change
          backgroundColor: this.cmp.style.backgroundColor,
        };
        return style;
      },
    },
  };
</script>

<style></style>
