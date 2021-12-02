<template>
  <section
    v-if="wap && imgUrl"
    class="template-preview"
    @click.stop.prevent="toTheEditor"
  >
    <!-- <h4>preview</h4>
    <div>wap id: {{ wap._id }}</div> -->
    <img :src="require('@/assets/tempImgs/' + imgUrl)" alt="" />
  </section>
</template>

<script>
export default {
  props: ["wap", "imgUrl"],
  created() {
    console.log("created preview");
  },
  methods: {
    toTheEditor() {
      this.$router.push("/editor/" + this.wap._id);
    },
  },
};
</script>

<style></style>
