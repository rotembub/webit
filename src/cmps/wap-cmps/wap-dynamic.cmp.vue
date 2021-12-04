<template>
  <section class="wap-dynamic" @click="isEdit = !isEdit">
    <slot v-if="isEdit"></slot>
    <component :cmp="cmp" :is="cmp.type" :key="cmp.id"></component>
  </section>
</template>

<script>
  import wapContainer from './wap-container.cmp.vue';
  import wapHeader from './wap-header.cmp.vue';
  import wapFooter from './wap-footer.cmp.vue';
  import wapGallery from './wap-gallery.cmp.vue';
  import wapSocial from './wap-social.cmp.vue';
  import wapSignup from './wap-signup.cmp.vue';
  import wapContact from './wap-contact.cmp.vue';
  import wapText from './wap-text.cmp.vue';
  import wapCard from './wap-card.cmp.vue';
  import wapReview from './wap-review.cmp.vue';

  export default {
    props: ['cmp'],
    data() {
      return {
        isEdit: false,
      };
    },
    components: {
      wapContainer,
      wapHeader,
      wapFooter,
      wapGallery,
      wapSocial,
      wapSignup,
      wapContact,
      wapText,
      wapCard,
      wapReview,
    },
  };
</script>

<style></style>
