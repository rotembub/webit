<template>
  <section class="wap-review"  :class="cmp.theme">
    <div class="review-card">
      <basic-paragraph
        v-for="item in cmp.info.txt"
        :key="item.id"
        :details="{ data: item, cmpId: cmp.id, containerId, elType: 'txt' }"
      ></basic-paragraph>

      <div class="customer">
        <basic-img
          v-for="item in cmp.info.avatar"
          :key="item.id"
          :details="{ data: item, cmpId: cmp.id, containerId, elType: 'avatar' }"
        ></basic-img>
        <basic-paragraph
          v-for="item in cmp.info.name"
          :key="item.id"
          :details="{ data: item, cmpId: cmp.id, containerId, elType: 'name' }"
        >
        </basic-paragraph>
        <basic-paragraph
          v-for="item in cmp.info.title"
          :key="item.id"
          :details="{ data: item, cmpId: cmp.id, containerId, elType: 'title' }"
        >
        </basic-paragraph>
      </div>
    </div>
  </section>
</template>

<script>
import basicParagraph from "./basic-cmps/basic-paragraph.cmp.vue";
import basicImg from "./basic-cmps/basic-img-cmp.vue";
import basicSpan from "./basic-cmps/basic-span-cmp.vue";

export default {
  props: ['cmp','containerId'],
  components: {
    basicParagraph,
    basicImg,
    basicSpan,
  },
  computed: {
    getCurrStyle() {
      const style = {
        backgroundImage: this.cmp.style.background,
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px",
        backgroundColor: this.cmp.style.backgroundColor,
        //new size style
        height: this.cmp.style.height + "vh",
          paddingTop: this.cmp.style.paddingTop + '%',
          paddingBottom: this.cmp.style.paddingBottom + '%',
          paddingLeft: this.cmp.style.paddingLeft + '%',
          paddingRight: this.cmp.style.paddingRight + '%',
      };
      return style;
    },
  },
};
</script>

<style></style>

 reviews: [{
                id: utilService.makeId(4),
                txt: [{ id: utilService.makeId(4), txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                name: [{ id: utilService.makeId(4), txt: 'Satish Patel', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                title: [{ id: utilService.makeId(4), txt: 'Founder & CEO, Huddle', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                avatar: [{ id: utilService.makeId(4), url: 'fylo-imgs/profile-1.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
              }]
