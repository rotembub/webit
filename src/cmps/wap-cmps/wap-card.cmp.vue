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



PROTOTYPE REFACTOR
<template>
  <section class="wap-card" :class="cmp.theme">
    <template v-if="cmp.info.title">
        <h1  v-for="item in cmp.info.title" :key="'k' + item"> {{ item }}</h1>
    </template>
    <template v-if="cmp.info.subtitle">
        <p v-for="item in cmp.info.subtitle" :key="'k' + item">{{ item }}</p>
    </template>
    <template v-if="cmp.info.imgUrl">
        <img :src="require('@/assets/wap-imgs/' + cmp.info.imgUrl)" alt="" />
    </template>
    </section>
</template>

<script>
export default {
  props: ["cmp"],
}
</script>

<style>

</style>