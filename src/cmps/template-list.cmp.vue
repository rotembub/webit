<template>
  <section v-if="waps" class="template-list">
    <div class="template-preview-container">
      <template-preview
        class="add-new-image"
        :wap="{ _id: '' }"
        :imgUrl="'add-new.png'"
      >
      </template-preview>

      <template-preview
        v-for="(wap, idx) in waps"
        :key="wap._id"
        :wap="wap"
        :imgUrl="urls[idx]"
        v-if="wap.isPublic"
      ></template-preview>
      <!-- watchout for the imgUrls these are fake i made just for show till we gonna have proper templates -->
    </div>
  </section>
</template>

<script>
import templatePreview from './template-preview.cmp.vue'

export default {
  props: ['waps'],
  components: {
    templatePreview,
  },
  created() {
    // console.log('created list')
  },
  data() {
    return {
      urls: [
        'utica-template.png',
        'fylo-template.png',
        'sunnyside-template.png',
        'feliciano-template.png',
        '5.jpg',
        '6.jpg',
        '7.png',
        '8.png',
        '9.jpg',
        '10.jpg',
        '11.png',
        '12.png',
      ],
    }
  },
  computed: {
    // getWaps() {
    //   return this.waps;
    // },
  },
}
</script>

<style></style>
