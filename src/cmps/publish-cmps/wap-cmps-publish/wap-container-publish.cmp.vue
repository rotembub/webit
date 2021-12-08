

<template>
  <section
    v-if="cmp"
    :style="getCurrStyle"
    class="wap-container"
    :class="cmp.theme"
  >
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
  import wapHeader from './wap-header-publish.cmp.vue';
  import wapFooter from './wap-footer-publish.cmp.vue';
  import wapSocial from './wap-social-publish.cmp.vue';
  import wapSignup from './wap-signup-publish.cmp.vue';
  import wapContact from './wap-contact-publish.cmp.vue';
  import wapText from './wap-text-publish.cmp.vue';
  import wapCard from './wap-card-publish.cmp.vue';
  import wapReview from './wap-review-publish.cmp.vue';
  import wapImg from './wap-img-publish.cmp.vue';
  export default {
    components: {
      wapHeader,
      wapFooter,
      wapSocial,
      wapSignup,
      wapContact,
      wapText,
      wapCard,
      wapReview,
      wapImg,
    },
    props: ['cmp'],
    computed: {
      getCurrStyle() {
        // console.log(this.cmp.style,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        // console.log('IM HERE Gallery', this.cmp.style);
        // console.log('color', this.cmp.style.color);
        const style = {
          backgroundImage: this.cmp.style.background,
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px', //fix fontSize not change
          backgroundColor: this.cmp.style.backgroundColor,
          //new size style
          height: this.cmp.style.height + 'px', // **problem range too small
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
