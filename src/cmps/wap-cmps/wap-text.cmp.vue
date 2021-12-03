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


title? subtitle? txt?
<wtf>

<template>
  <section class="wap-text" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
      <h1 v-for="item in cmp.info.title" :key="'k' + item">{{ item }}</h1>
    </template>
    <template v-if="cmp.info.subtitle">
      <h3 v-for="item in cmp.info.subtitle" :key="'k' + item">{{ item }}</h3> <!--Currently in h3 cause p is used by txt might change later -->
    </template>
    <template v-if="cmp.info.txt">
      <p v-for="item in cmp.info.txt" :key="'k' + item">{{ item }}</p>
    </template>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
  components: {},
  data() {
    return {};
  },
  computed: {
    getCurrStyle() {
      console.log("IM HERE", this.cmp.style);
      console.log("color", this.cmp.style.color);
      const style = {
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px", // subtitle size change title nope
        backgroundColor: this.cmp.style.backgroundColor,
      };
      return style;
    },
  },
};
</script>

<style></style>