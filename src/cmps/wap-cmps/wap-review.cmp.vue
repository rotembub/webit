
<!--
<template>
  <section class="wap-review" :class="cmp.theme">
    <div
      v-for="review in cmp.info.reviews"
      :key="review.name"
      class="review-card"
    >
      <p>
        {{ review.txt }}
      </p>
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


txt / user { avatar / name / title}

<txt>

-->

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