<template>
  <section class="wap-contact" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
    <basic-h2
      v-for="item in cmp.info.title" :key="item.id"
      :details="{data: item}"
    ></basic-h2>
    </template>
    <template v-if="cmp.info.subtitle">
    <basic-paragraph
      v-for="item in cmp.info.subtitle" :key="item.id"
      :details="{data: item}"
    ></basic-paragraph>
    </template>
    <template v-if="cmp.info.buttons">
    <basic-btn
      v-for="item in cmp.info.buttons" :key="item.id" 
      :details="{data: item}"
    ></basic-btn>
    </template>
  </section>
</template>

<script>
  import basicH2 from '../basic-cmps-publish/basic-h2-publish.cmp.vue';
  import basicParagraph from '../basic-cmps-publish/basic-paragraph-publish.cmp.vue';
  import basicBtn from '../basic-cmps-publish/basic-btn-publish.cmp.vue';
  export default {
    props: ['cmp','containerId'],
    components: {basicH2, basicParagraph, basicBtn},
    data() {
      return {};
    },
    computed: {
      getCurrStyle() {
        // console.log('IM HERE Gallery', this.cmp.style);
        // console.log('color', this.cmp.style.color);
        const style = {
          backgroundImage: this.cmp.style.background,
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px', //fix fontSize not change
          backgroundColor: this.cmp.style.backgroundColor,
          //new size style
          height: this.cmp.style.height + 'px', // problem range too small
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

