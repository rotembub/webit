<template>
  <section v-if="waps" class="template-list">
    <div class="template-preview-container">
      <!-- <user-preview
        class="add-new-image"
        :template="{ _id: '' }"
        :imgUrl="'add-new.png'"
      >
      </user-preview> -->
      <user-preview
        v-for="wap in waps"
        :key="wap._id"
        :wap="wap"
        :imgUrl="wap.imgUrl"
      ></user-preview>
    </div>
  </section>
</template>

<script>
  import userPreview from '../cmps/user-wap-preview.cmp.vue';

  export default {
    props: ['waps'],
    components: {
      userPreview,
    },
    created() {},
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
      };
    },
    computed: {},
  };
</script>

<style></style>
