<template>
  <section class="wap-dynamic" @click="setSelected">
    <slot v-if="isEdit"></slot>
    <component
      :cmp="cmp"
      :is="cmp.type"
      :key="cmp.id"
      :name="cmp.id"
    ></component>
  </section>
</template>

<script>
import wapContainer from "./wap-container.cmp.vue";
import wapHeader from "./wap-header.cmp.vue";
import wapFooter from "./wap-footer.cmp.vue";
import wapGallery from "./wap-gallery.cmp.vue";
import wapSocial from "./wap-social.cmp.vue";
import wapSignup from "./wap-signup.cmp.vue";
import wapContact from "./wap-contact.cmp.vue";
import wapText from "./wap-text.cmp.vue";
import wapCard from "./wap-card.cmp.vue";
import wapReview from "./wap-review.cmp.vue";
import wapImg from "./wap-img.cmp.vue";

export default {
  props: ["cmp"],
  data() {
    return {
      // isEdit: false,
      isSelected: false,
    };
  },
  methods: {
    setSelected(ev) {
      if (this.isSelected) {
        this.isSelected = false;
        this.$store.commit({
          type: "setSelectedElement",
          id: null,
          pos: null,
        });
      } else {
        this.isSelected = true;
        this.$store.commit({
          type: "setSelectedElement",
          id: this.cmp.id,
          pos: null,
        });
      }
    },
  },
  computed: {
    isEdit() {
      const id = this.$store.getters.getElSelectedId;
      return (id === this.cmp.id) 
    },
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
    wapImg,
  },
};
</script>

<style></style>
