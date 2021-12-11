<template>
  <section class="wap-text" :style="getCurrStyle" :class="cmp.theme">
    <template v-if="cmp.info.title">
      <basic-h1
        v-for="item in cmp.info.title"
        :key="item.id"
        :details="{ data: item, cmpId: cmp.id, containerId, elType: 'title' }"
      ></basic-h1>
      <!-- <h1 v-for="item in cmp.info.title" :key="'k' + item.id">
        {{ item.txt }}
      </h1> -->
    </template>
    <template v-if="cmp.info.subtitle">
      <basic-h3
        v-for="item in cmp.info.subtitle"
        :key="item.id"
        :details="{
          data: item,
          cmpId: cmp.id,
          containerId,
          elType: 'subtitle',
        }"
      ></basic-h3>
      <!-- <h3 v-for="item in cmp.info.subtitle" :key="'k' + item.id">
        {{ item.txt }}
      </h3> -->
      <!--Currently in h3 cause p is used by txt might change later -->
    </template>
    <template v-if="cmp.info.txt">
      <basic-paragraph
        v-for="item in cmp.info.txt"
        :key="item.id"
        :details="{ data: item, cmpId: cmp.id, containerId, elType: 'txt' }"
      ></basic-paragraph>
      <!-- <p v-for="item in cmp.info.txt" :key="'k' + item.id">{{ item.txt }}</p> -->
    </template>
  </section>
</template>

<script>
import basicH1 from "./basic-cmps/basic-h1-cmp.vue";
import basicH3 from "./basic-cmps/basic-h3-cmp.vue";
import basicParagraph from "./basic-cmps/basic-paragraph.cmp.vue";

export default {
  props: ["cmp", "containerId"],
  components: { basicParagraph, basicH3, basicH1 },
  data() {
    return {};
  },
  computed: {
    getCurrStyle() {
      const style = {
        backgroundImage: this.cmp.style.background,
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px",
        backgroundColor: this.cmp.style.backgroundColor,
        backgroundImage: this.cmp.style.background,
        //new size style
        height: this.cmp.style.height + "vh",
        paddingTop: this.cmp.style.paddingTop + "%",
        paddingBottom: this.cmp.style.paddingBottom + "%",
        paddingLeft: this.cmp.style.paddingLeft + "%",
        paddingRight: this.cmp.style.paddingRight + "%",
      };
      return style;
    },
  },
};
</script>

<style></style>

info: { title: [{ id: utilService.makeId(4), txt: 'Recent Work...', style: {
color: '', fontSize: '' } }], subtitle: [{ id: utilService.makeId(4), txt: 'Our
practice spans from environmental retrofits of existing buildings to the
complete planning and design of new neighborhoods and public spaces. While our
work is aesthetically diverse, our projects are linked by a focus on enhancing
human relationships through', style: { color: '', fontSize: '' } }], },
