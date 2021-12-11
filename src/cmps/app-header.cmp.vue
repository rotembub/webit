<template>
  <section class="app-header">
    <div class="main-logo">
      <img src="@/assets/Logo.png" alt="" />
    </div>
    <div class="nav-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/template">Templates</router-link>
      <router-link to="/editor">Editor</router-link>
      <router-link to="/user">User</router-link>
      <!-- <router-link :to="'/editor/' + wapId">Editor</router-link> -->
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      wapId() {
        return this.$store.getters.getWapId;
      },
    },
  };
</script>

<style></style>
