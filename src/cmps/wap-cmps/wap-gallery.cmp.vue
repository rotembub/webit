

<template>
  <section class="wap-gallery" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
      <basic-h1 v-for="item in cmp.info.title" :key="item.id" :details="item"></basic-h1>
    </template>
    <template v-if="cmp.info.subtitle">
      <basic-paragraph v-for="item in cmp.info.subtitle" :key="item.id" :details="item"></basic-paragraph>
    </template>
    <template v-if="cmp.info.imgs">
      <div
        class="photo-details"
        v-for="(img, idx) in cmp.info.imgs"
        :key="'k' + idx"
      >
        <basic-img :details="img"></basic-img>
        <basic-h3 v-if="img.title" :details="img.title"></basic-h3>
        <basic-paragraph v-if="img.txt" :details="img.txt"></basic-paragraph>
      </div>
    </template>
  </section>
</template>

<script>
  import basicH1 from './basic-cmps/basic-h1-cmp.vue'
  import basicParagraph from './basic-cmps/basic-paragraph.cmp.vue'
  import basicImg from './basic-cmps/basic-img-cmp.vue'
  import basicH3 from './basic-cmps/basic-h3-cmp.vue'

  export default {
    props: ['cmp'],
    components:{
      basicParagraph,
      basicH1,
      basicImg,
      basicH3
    },
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
