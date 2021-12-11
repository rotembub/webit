<template>
  <section class="wap-gallery" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
      <basic-h1
        v-for="item in cmp.info.title"
        :key="item.id"
        :details="{data: item, cmpId: cmp.id, elType: 'title'}"
      ></basic-h1>
    </template>
    <template v-if="cmp.info.subtitle">
      <basic-paragraph
        v-for="item in cmp.info.subtitle"
        :key="item.id"
        :details="{data: data, cmpId: cmp.id, elType: 'subtitle'}"
      ></basic-paragraph>
    </template>
    <template v-if="cmp.info.imgs">
      <div
        class="photo-details"
        v-for="(img, idx) in cmp.info.imgs"
        :key="'k' + idx"
      >
        <basic-img
          v-if="img.url"
          :details="{
            data: img,
            cmpId: cmp.id,
            elType: {type: 'imgs', parentId: img.id, is: 'url'},
          }"
        ></basic-img>
        <basic-h3
          v-if="img.title"
          :details="{
            data: img.title,
            cmpId: cmp.id,
            elType: {type: 'imgs', parentId: img.id, is: 'title'},
          }"
        ></basic-h3>
        <basic-paragraph
          v-if="img.txt"
          :details="{
            data: img.txt,
            cmpId: cmp.id,
            elType: {type: 'imgs', parentId: img.id, is: 'txt'},
          }"
        ></basic-paragraph>
      </div>
    </template>
  </section>
</template>

<script>
  import basicH1 from './basic-cmps/basic-h1-cmp.vue';
  import basicParagraph from './basic-cmps/basic-paragraph.cmp.vue';
  import basicImg from './basic-cmps/basic-img-cmp.vue';
  import basicH3 from './basic-cmps/basic-h3-cmp.vue';

  export default {
    props: ['cmp'],
    components: {
      basicParagraph,
      basicH1,
      basicImg,
      basicH3,
    },
    computed: {
      getCurrStyle() {
        const style = {
          backgroundImage: this.cmp.style.background,
          color: this.cmp.style.color, // text color not change only in theme-gallery-fylo
          fontSize: this.cmp.style.fontSize + 'px',
          backgroundColor: this.cmp.style.backgroundColor,
          //new size style
          height: this.cmp.style.height + 'px',
          paddingTop: this.cmp.style.paddingTop + 'px',
          paddingBottom: this.cmp.style.paddingBottom + 'px',
          paddingLeft: this.cmp.style.paddingLeft + 'px',
          paddingRight: this.cmp.style.paddingRight + 'px',
        };
        return style;
      },
    },
  };
</script>

<style></style>
info: { title: '', subtitle: '', // CHANGE THE IMGS BELOW DONT FORGET! imgs: [ {
id: utilService.makeId(6), url: 'proj1.jpg', title: { txt: 'Project one', style:
{ color: '', fontSize: '' } }, txt: '', }, { id: utilService.makeId(6), url:
'proj2.jpg', title: { txt: 'Project two', style: { color: '', fontSize: '' } },
txt: '', }, { id: utilService.makeId(6), url: 'proj3.jpg', title: { txt:
'Project three', style: { color: '', fontSize: '' } }, txt: '', }, { id:
utilService.makeId(6), url: 'proj4.jpg', title: { txt: 'Project four', style: {
color: '', fontSize: '' } }, txt: '', }, ], },
