<template>
  <section class="wap-header" :class="cmp.theme">
    <wap-editor v-if="isEditing" />
    <!-- <div v-for="(item, idx) in cmp.info" :key="'k' + idx">
      <p>{{ item }}</p> -->
    <!-- </div> -->
    <div @click="isEditing = !isEditing" class="logo">
      <h2 v-if="cmp.info.logo && cmp.info.logo.type === 'txt'">
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
import wapEditor from './wap-tool-bar.cmp.vue'

export default {
  components: {
    wapEditor,
  },
  data() {
    return {
      isEditing: false,
    }
  },
  props: ['cmp'],
  created() {
    console.log('IM HERE', this.cmp)
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
