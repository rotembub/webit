<template>
  <section v-if="templates" class="template-list">
    <div class="template-preview-container">
      <template-preview
        @onCreateWap="onCreateWap"
        class="add-new-image"
        :template="{ _id: '' }"
        :imgUrl="'add-new.png'"
      >
      </template-preview>
      <template-preview
        @onCreateWap="onCreateWap"
        v-for="template in templates"
        :key="template._id"
        :template="template"
        :imgUrl="template.imgUrl"
      ></template-preview>
      <!-- watchout for the imgUrls these are fake i made just for show till we gonna have proper templates -->
    </div>
  </section>
</template>

<script>
import templatePreview from './template-preview.cmp.vue'

export default {
  props: ['templates'],
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
  methods: {
    onCreateWap(templateId) {
      console.log('amihere?')
      this.$emit('onCreateWap', templateId)
    },
  },
  computed: {
    // getWaps() {
    //   return this.waps;
    // },
  },
}
</script>

<style></style>
