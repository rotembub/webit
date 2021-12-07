<template>
  <section class="wap-dynamic-publish">
    <component
      :cmp="cmp"
      :is="cmp.type"
      :key="cmp.id"
      :name="cmp.id"
    ></component>
  </section>
</template>

<script>
import wapContainer from "./wap-container-publish.cmp.vue";
import wapHeader from "./wap-header-publish.cmp.vue";
import wapFooter from "./wap-footer-publish.cmp.vue";
import wapSocial from "./wap-social-publish.cmp.vue";
import wapSignup from "./wap-signup-publish.cmp.vue";
import wapContact from "./wap-contact-publish.cmp.vue";
import wapText from "./wap-text-publish.cmp.vue";
import wapCard from "./wap-card-publish.cmp.vue";
import wapReview from "./wap-review-publish.cmp.vue";
import wapImg from "./wap-img-publish.cmp.vue";

export default {
  props: ["cmp"],
  data() {
    return {
    };
  },
  components: {
    wapContainer,
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
};
</script>

<style></style>
