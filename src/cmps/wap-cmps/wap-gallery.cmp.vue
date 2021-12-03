

<template>
  <section class="wap-gallery" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
      <h1 v-for="item in cmp.info.title" :key="'k' + item">{{ item.txt }}</h1>
    </template>
    <template v-if="cmp.info.subtitle">
      <p v-for="item in cmp.info.subtitle" :key="'k' + item">{{ item.txt }}</p>
    </template>
    <template v-if="cmp.info.imgs">
      <div
        class="photo-details"
        v-for="(img, idx) in cmp.info.imgs"
        :key="'k' + idx"
      >
        <img :src="require('@/assets/wap-imgs/' + img.url)" alt="" />
        <h3 v-if="img.title">{{ img.title.txt }}</h3>
        <!--See if we keep it or remove it -->
        <p v-if="img.txt">{{ img.txt.txt }}</p>
      </div>
    </template>
  </section>
</template>

<script>
  export default {
    props: ['cmp'],
    computed: {
      getCurrStyle() {
        const style = {
          color: this.cmp.style.color, // text color not change only in theme-gallery-fylo
          fontSize: this.cmp.style.fontSize + 'px',
          backgroundColor: this.cmp.style.backgroundColor,
        };
        return style;
      },
    },
  };
</script>

<style>
</style>
      info: {
        title: '',
        subtitle: '', // CHANGE THE IMGS BELOW DONT FORGET!
        imgs: [
          { id: utilService.makeId(6), url: 'proj1.jpg', title: { txt: 'Project one', style: { color: '', fontSize: '' } }, txt: '', },
          { id: utilService.makeId(6), url: 'proj2.jpg', title: { txt: 'Project two', style: { color: '', fontSize: '' } }, txt: '', },
          { id: utilService.makeId(6), url: 'proj3.jpg', title: { txt: 'Project three', style: { color: '', fontSize: '' } }, txt: '', },
          { id: utilService.makeId(6), url: 'proj4.jpg', title: { txt: 'Project four', style: { color: '', fontSize: '' } }, txt: '', },
        ],
      },
