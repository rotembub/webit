
PROTOTYPE REFACTOR
<template>
  <section class="wap-card" :style="getCurrStyle" :class="cmp.theme">
    <div class="text-block">
      <template v-if="cmp.info.title">
        <h1 v-for="item in cmp.info.title" :key="'k' + item.id">
          {{ item.txt }}
        </h1>
      </template>
      <template v-if="cmp.info.subtitle">
        <p v-for="item in cmp.info.subtitle" :key="'k' + item.id">
          {{ item.txt }}
        </p>
      </template>
    </div>
    <template v-if="cmp.info.imgUrl">
      <img :src="require('@/assets/wap-imgs/' + cmp.info.imgUrl)" alt="" />
    </template>
  </section>
</template>

<script>
  export default {
    props: ['cmp'],
    computed: {
      getCurrStyle() {
        const style = {
          color: this.cmp.style.color,
          fontSize: this.cmp.style.fontSize + 'px',
          backgroundColor: this.cmp.style.backgroundColor,
        };
        return style;
      },
    },
  };
</script>

<style></style>
