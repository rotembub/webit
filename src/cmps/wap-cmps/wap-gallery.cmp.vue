<template>
  <section class="wap-gallery" :style="getCurrStyle" :class="cmp.theme">
    <div class="gallery-title">
      <h1 v-if="cmp.info.title">{{ cmp.info.title }}</h1>
      <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle }}</p>
    </div>
    <div
      class="photo-card"
      v-for="(photo, idx) in cmp.info.photos"
      :key="'p' + idx"
    >
      <img :src="require('@/assets/wap-imgs/' + photo.url)" alt="" />
      <h3 v-if="photo.title">{{ photo.title }}</h3>
      <p v-if="photo.txt">{{ photo.txt }}</p>
    </div>
    <button v-if="cmp.info.button">{{ cmp.info.button }}</button>
  </section>
</template>

<script>
  export default {
    props: ['cmp'],
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
