<template>
  <section class="wap-gallery" :class="cmp.theme">
    <div class="gallery-title" v-if="cmp.info.title">
      <h1 v-for="item in cmp.info.title" :key="'k' + item">
        {{ item }}
      </h1>
      <template v-if="cmp.info.subtitle">
        <p v-for="item in cmp.info.subtitle" :key="'k' + item">{{ item }}</p>
      </template>
    </div>
    <div
      class="photo-card"
      v-for="(photo, idx) in cmp.info.photos"
      :key="'p' + idx"
    >
      <img :src="require('@/assets/wap-imgs/' + photo.url)" alt="" />

      <h3 v-if="photo.title">{{ photo.title }}</h3>
      <p v-if="photo.txt">{{ photo.txt }}</p>
      <a v-if="photo.link" href="">{{ photo.link }}</a>
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

imgs only

title?  img/s

