<template>
  <section class="wap-card" :class="cmp.theme">
    <h1 v-if="cmp.info.title">{{ cmp.info.title }}</h1>
    <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle }}</p>

    <div v-for="(card, idx) in cmp.info.cards" :key="'k' + idx" class="card">
      <h3 v-if="card.title">{{ card.title }}</h3>
      <p v-if="card.txt">{{ card.txt }}</p>
      <img :src="require('@/assets/wap-imgs/' + card.url)" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>

img?   txt?  title?
<img>  <p>     <h1>