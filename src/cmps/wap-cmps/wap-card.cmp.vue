PROTOTYPE REFACTOR
<template>
  <section class="wap-card" :style="getCurrStyle" :class="cmp.theme">
    <div class="text-block">
      <template v-if="cmp.info.title">
        <basic-h1
          v-for="item in cmp.info.title"
          :key="item.id"
          :details="{data: item, cmpId: cmp.id, elType: 'title'}"
        ></basic-h1>
        <!-- <h1 v-for="item in cmp.info.title" :key="'k' + item.id">
          {{ item.txt }}
        </h1> -->
      </template>
      <template v-if="cmp.info.subtitle">
        <basic-paragraph
          v-for="item in cmp.info.subtitle"
          :key="item.id"
          :details="{data: item, cmpId: cmp.id, elType: 'subtitle'}"
        ></basic-paragraph>
        <!-- <p v-for="item in cmp.info.subtitle" :key="'k' + item.id">
          {{ item.txt }}
        </p> -->
      </template>
      <template v-if="cmp.info.buttons">
        <basic-btn
          v-for="item in cmp.info.buttons"
          :key="item.id"
          :details="{data: item, cmpId: cmp.id, elType: 'buttons'}"
        ></basic-btn>
        <!-- <button v-for="button in cmp.info.buttons" :key="button.id">
          {{ button.txt }}
        </button> -->
      </template>
    </div>
    <template v-if="cmp.info.imgUrl">
      <basic-img
        :details="{
          data: {url: cmp.info.imgUrl},
          cmpId: cmp.id,
          elType: 'imgUrl',
        }"
      ></basic-img>
      <!-- <img :src="require('@/assets/wap-imgs/' + cmp.info.imgUrl)" alt="" /> -->
    </template>
  </section>
</template>

<script>
  import basicImg from './basic-cmps/basic-img-cmp.vue';
  import basicH1 from './basic-cmps/basic-h1-cmp.vue';
  import basicParagraph from './basic-cmps/basic-paragraph.cmp.vue';
  import basicBtn from './basic-cmps/basic-btn-cmp.vue';
  export default {
    props: ['cmp'],
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
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px',
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
