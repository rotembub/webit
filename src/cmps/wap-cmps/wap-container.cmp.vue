<!--
<template>
  <section v-if="cmp" class="wap-container" :class="cmp.theme">
   //need to make the resize and color work on the container
  
    <wap-dynamic
      v-for="cmp in cmp.info.cmps"
      :cmp="cmp"
      :is="cmp.type"
      :key="cmp.id"
      :name="cmp.id"
    >
    </wap-dynamic>
  </section>
</template>
-->

<template>
  <section v-if="cmp" class="wap-container" :class="cmp.theme">
    <!--Need to see if its fits or not as a class  -->
    <!-- <slot>
      <cmps-tool-bar :id="cmp.id"></cmps-tool-bar>
    </slot> -->
    <component
      v-for="innerCmp in cmp.info.cmps"
      :cmp="innerCmp"
      :is="innerCmp.type"
      :key="innerCmp.id"
      :name="innerCmp.id"
      :containerId="cmp.id"
    >
    </component>
  </section>
</template>

<script>
  import wapDynamic from './wap-dynamic.cmp.vue';

  import wapHeader from './wap-header.cmp.vue';
  import wapFooter from './wap-footer.cmp.vue';
  import wapGallery from './wap-gallery.cmp.vue';
  import wapSocial from './wap-social.cmp.vue';
  import wapSignup from './wap-signup.cmp.vue';
  import wapContact from './wap-contact.cmp.vue';
  import wapText from './wap-text.cmp.vue';
  import wapCard from './wap-card.cmp.vue';
  import wapReview from './wap-review.cmp.vue';
  import wapImg from './wap-img.cmp.vue';
  export default {
    components: {
      wapDynamic,
      wapHeader,
      wapFooter,
      wapGallery,
      wapSocial,
      wapSignup,
      wapContact,
      wapText,
      wapCard,
      wapReview,
      wapImg,
    },
    props: ['cmp'],
  };
</script>
