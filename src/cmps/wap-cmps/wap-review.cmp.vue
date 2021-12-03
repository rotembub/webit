
<template>
  <section class="wap-review" :class="cmp.theme">
    <div
      v-for="review in cmp.info.reviews"
      :key="review.name"
      class="review-card"
    >
      <p>{{ review.txt }}</p>
      <div class="customer">
        <img
          :src="require('@/assets/wap-imgs/' + review.avatar)"
          alt="avatar"
        />
        <h5>
          {{ review.name }} <br />
          <span>{{ review.title }}</span>
        </h5>
      </div>
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

info: {
        quotesImg: 'fylo-imgs/bg-quotes.png', // NEED TO GET BACK HERE THIS COULD BE COMPLICATED
        reviews: [
          { id: utilService.makeId(4), txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Satish Patel', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-1.jpg" },
          { id: utilService.makeId(4), txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Bruce McKenzie', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-2.jpg" },
          { id: utilService.makeId(4), txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Iva Boyd', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-3.jpg" }
        ]
      },