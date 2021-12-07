<template>
  <section class="basic-img-publish">
    <img :src="require('@/assets/wap-imgs/' + details.data.url)" alt="" />
  </section>
</template>

<script>
export default {
  props: ["details"],
  computed: {},
  methods: {},
};
</script>

<style>
</style>