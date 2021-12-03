<template>
  <section class="wap-review" :style="getCurrStyle" :class="cmp.theme">
    <div
      v-for="review in cmp.info.reviews"
      :key="review.name"
      class="review-card"
    >
      <basic-paragraph :details="review"></basic-paragraph>
      <!-- <p>{{ review.txt }}</p> -->
      <div class="customer">
        <basic-img :details="{url: review.avatar ,id:review.id}"></basic-img>
        <!-- <img
          :src="require('@/assets/wap-imgs/' + review.avatar)"
          alt="avatar"
        /> -->
        <basic-paragraph :details="{txt: review.name, id:review.id}">
            <slot>
              <basic-span :details="{txt:review.title, id:review.id}"></basic-span>
            </slot>
        </basic-paragraph>
        <!-- <p>
          {{ review.name }} <br />
          <span>{{ review.title }}</span>
        </p> -->
      </div>
    </div>
  </section>
</template>

<script>
import basicParagraph from './basic-cmps/basic-paragraph.cmp.vue'
import basicImg from './basic-cmps/basic-img-cmp.vue'
import basicSpan from './basic-cmps/basic-span-cmp.vue'

export default {
  props: ["cmp"],
  components:{
    basicParagraph,
    basicImg,
    basicSpan
  },
  computed: {
    getCurrStyle() {
      const style = {
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px",
        backgroundColor: this.cmp.style.backgroundColor,
      };
      return style;
    },
  },
};
</script>

<style></style>

info: { quotesImg: 'fylo-imgs/bg-quotes.png', // NEED TO GET BACK HERE THIS
COULD BE COMPLICATED reviews: [ { id: utilService.makeId(4), txt: "Fylo has
improved our team productivity by an order of magnitude. Since making the switch
our team has become a well-oiled collaboration machine.", name: 'Satish Patel',
title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-1.jpg" }, { id:
utilService.makeId(4), txt: "Fylo has improved our team productivity by an order
of magnitude. Since making the switch our team has become a well-oiled
collaboration machine.", name: 'Bruce McKenzie', title: 'Founder & CEO, Huddle',
avatar: "fylo-imgs/profile-2.jpg" }, { id: utilService.makeId(4), txt: "Fylo has
improved our team productivity by an order of magnitude. Since making the switch
our team has become a well-oiled collaboration machine.", name: 'Iva Boyd',
title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-3.jpg" } ] },
