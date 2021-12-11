<template>
  <section class="wap-contact" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
    <basic-h2
      v-for="item in cmp.info.title" :key="item.id"
      :details="{data: item, cmpId: cmp.id, containerId, elType: 'title'}"
    ></basic-h2>
    </template>
    <!-- <h2 v-if="cmp.info.title">{{ cmp.info.title.txt }}</h2> -->
    <template v-if="cmp.info.subtitle">
    <basic-paragraph
      v-for="item in cmp.info.subtitle" :key="item.id"
      :details="{data: item, cmpId: cmp.id,containerId, elType: 'title'}"
    ></basic-paragraph>
    </template>
    <!-- <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle.txt }}</p> -->
    <template v-if="cmp.info.buttons">
    <basic-btn
      v-for="item in cmp.info.buttons" :key="item.id" 
      :details="{data: item, cmpId: cmp.id, containerId, elType: 'buttons'}"
    ></basic-btn>
    </template>
    <!-- <button v-if="cmp.info.btnTxt">{{ cmp.info.btnTxt.txt }}</button> -->
  </section>
</template>

<script>
  import basicH2 from './basic-cmps/basic-h2-cmp.vue';
  import basicParagraph from './basic-cmps/basic-paragraph.cmp.vue';
  import basicBtn from './basic-cmps/basic-btn-cmp.vue';
  export default {
    props: ['cmp','containerId'],
    components: {basicH2, basicParagraph, basicBtn},
    data() {
      return {};
    },
    computed: {
      getCurrStyle() {
        const style = {
          backgroundImage: this.cmp.style.background,
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px', //fix fontSize not change
          backgroundColor: this.cmp.style.backgroundColor,
          //new size style
          height: this.cmp.style.height + 'vh', // problem range too small
          paddingTop: this.cmp.style.paddingTop + '%',
          paddingBottom: this.cmp.style.paddingBottom + '%',
          paddingLeft: this.cmp.style.paddingLeft + '%',
          paddingRight: this.cmp.style.paddingRight + '%',
        };
        return style;
      },
    },
  };
</script>

<style></style>

title subtitle button h2 p btn
