<template>
  <section :style="cmpStyle" class="wap-header" :class="cmp.theme">
    <!-- <div v-for="(item, idx) in cmp.info" :key="'k' + idx">
      <p>{{ item }}</p> -->
    <!-- </div> -->
    <!-- :style="{ fontSize: cmpStyle.fontSize }" -->
    <div class="logo">
      <h2 contenteditable v-if="cmp.info.logo && cmp.info.logo.type === 'txt'">
        {{ cmp.info.logo.txt }}
      </h2>
      <img
        v-if="cmp.info.logo && cmp.info.logo.type === 'img'"
        :src="cmp.info.logo.url"
        alt=""
      />
    </div>
    <div class="nav-bar">
      <a v-for="(item, idx) in cmp.info.navBar" :key="'k' + idx" href=""
        >{{ item }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cmpStyle: {
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + 'px',
        backgroundColor: this.cmp.style.backgroundColor,
      },
    }
  },
  props: ['cmp'],
  created() {
    console.log('IM HERE', this.cmp)
    console.log('IM HERE!!!', this.cmpStyle)
  },
  methods: {
    test() {
      console.log('try')
    },
  },
}
</script>

<style></style>
{ "id": "wc02", "type": "wap-header", "info": { "title": "HairDresser Baluta",
"substitle": "Your Hair is !(Who you Are)", "btn": { "label": "Schedule Today!",
"link": "#wc03" } }, "theme": "theme-header-happy", "style": { "background":
"url()", "font": "Fontush", "color": "red", }
