<!--
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

      <div class="card-text">
        <h1 v-if="photo.title">{{ photo.title }}</h1>
        <p v-if="photo.txt">{{ photo.txt }}</p>
        <a v-if="photo.link" href="">{{ photo.link }}</a>
        <button v-if="cmp.info.button">{{ cmp.info.button }}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
  computed: {
    getCurrStyle() {
      console.log("IM HERE Gallery", this.cmp.style);
      console.log("color", this.cmp.style.color);
      const style = {
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px", //fix fontSize not change
        backgroundColor: this.cmp.style.backgroundColor,
      };
      return style;
    },
  },
};
</script>

<style></style>

imgs only title? img/s
<img>    <h1>
-->

<template>
  <section class="wap-gallery" :class="cmp.theme">
    <template v-if="cmp.info.title">
      <h1 v-for="item in cmp.info.title" :key="'k' + item">{{ item }}</h1>
    </template>
    <template v-if="cmp.info.subtitle">
      <p v-for="item in cmp.info.subtitle" :key="'k' + item">{{ item }}</p>
    </template>
    <template v-if="cmp.info.imgs">
      <div
        class="photo-details"
        v-for="(img, idx) in cmp.info.imgs"
        :key="'k' + idx"
      >
        <img :src="require('@/assets/wap-imgs/' + img.url)" alt="" />
        <h3 v-if="img.title">{{ img.title }}</h3>
        <!--See if we keep it or remove it -->
        <p v-if="img.txt">{{ img.txt }}</p>
      </div>
    </template>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>
