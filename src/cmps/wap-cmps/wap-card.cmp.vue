
<template>
  <section class="wap-card" :style="getCurrStyle" :class="cmp.theme">
    <!-- <slot></slot> -->
    <div class="text-block">
      <template v-if="cmp.info.title">
        <basic-h1
          v-for="item in cmp.info.title"
          :key="item.id"
          :details="{data: item, cmpId: cmp.id, containerId,elType: 'title'}"
        ></basic-h1>
      </template>
      <template v-if="cmp.info.subtitle">
        <basic-paragraph
          v-for="item in cmp.info.subtitle"
          :key="item.id"
          :details="{data: item, cmpId: cmp.id, containerId,elType: 'subtitle'}"
        ></basic-paragraph>
      </template>
      <template v-if="cmp.info.buttons">
        <basic-btn
          v-for="item in cmp.info.buttons"
          :key="item.id"
          :details="{data: item, cmpId: cmp.id , containerId, elType: 'buttons'}"
        ></basic-btn>
      </template>
    </div>
    <template v-if="cmp.info.imgs">
      <basic-img v-for="img in cmp.info.imgs" :key="img.id"
        :details="{
          data: img,
          cmpId: cmp.id,
          containerId,
          elType: 'imgs',
        }"
      ></basic-img>
    </template>
  </section>
</template>

<script>
  import basicImg from './basic-cmps/basic-img-cmp.vue';
  import basicH1 from './basic-cmps/basic-h1-cmp.vue';
  import basicParagraph from './basic-cmps/basic-paragraph.cmp.vue';
  import basicBtn from './basic-cmps/basic-btn-cmp.vue';
  export default {
    props: ['cmp','containerId'],
    components: {
      basicH1,
      basicParagraph,
      basicBtn,
      basicImg,
    },
    methods: {
      setSelected(element) {},
    },
    computed: {
      getCurrStyle() {
        const style = {
          backgroundImage: this.cmp.style.background,
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px',
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
