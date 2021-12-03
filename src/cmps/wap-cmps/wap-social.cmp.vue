<template>
  <section class="wap-social" :class="cmp.theme">
    <template v-if="cmp.info.icons">
      <a
        v-for="(icon, idx) in cmp.info.icons"
        :key="'k' + icon + idx"
        href=""
        >{{ icon }}</a
      > <!--NOT READY YET NEED TO FIGURE OUT WHETHER TO USE A LIBRARY FOR THE ICONS OR SIMPLY USE IMGS -->
    </template>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>


social icons ...