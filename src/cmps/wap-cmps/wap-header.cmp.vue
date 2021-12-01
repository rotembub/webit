<template>
  <section class="wap-header" :class="cmp.theme" @click="test">
    <div v-for="(item, idx) in cmp.info" :key="'k' + idx">
      <p>{{ item }}</p>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['cmp'],
    created() {
      console.log('IM HERE', this.cmp);
    },
    methods: {
      test() {
        console.log('try');
      },
    },
  };
</script>

<style></style>
{ "id": "wc02", "type": "wap-header", "info": { "title": "HairDresser Baluta",
"substitle": "Your Hair is !(Who you Are)", "btn": { "label": "Schedule Today!",
"link": "#wc03" } }, "theme": "theme-header-happy", "style": { "background":
"url()", "font": "Fontush", "color": "red", }
