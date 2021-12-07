<template>
  <section class="wap-footer" :class="cmp.theme">
    <!-- <div v-for="(item, idx) in cmp.info" :key="'k' + idx">
      <p>{{ item }}</p>
    </div> -->

    <div>
      <h1 v-if="cmp.info.logo && cmp.info.logo.type === 'txt'">
        {{ cmp.info.logo }}
      </h1>
      <img
        v-if="cmp.info.logo && cmp.info.logo.type === 'img'"
        :src="cmp.info.logo.url"
        alt=""
      />
    </div>
    <div v-if="cmp.info.navBar">
      <a v-for="(item, idx) in cmp.info.navBar" :key="'k' + idx" href="">{{
        item
      }} </a>
    </div>
    <div v-if="cmp.info.contactDetails"> <!-- might change this to cmp.info.txt later to avoid complications -->
      <div
        v-for="(detail, idx) in cmp.info.contactDetails"
        :key="'k' + idx"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['cmp','containerId'],
  created() {
    // console.log("IM HERE", this.cmp);
  },
};
</script>

<style>
</style>