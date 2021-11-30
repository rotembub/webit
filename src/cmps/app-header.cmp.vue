<template>
  <section class="app-header">
    <div>
      <img src="@/assets/Logo.png" alt="" />
    </div>
    <div class="nav-bar">
      <router-link to="/">Home</router-link> |
      <router-link to="/template">Templates</router-link>
    </div>
    <!-- <router-link to="/editor">Editor</router-link> | -->
  </section>
</template>

<script>
export default {
  created() {
    this.$store.dispatch({ type: "setCurrWap" });
  },
};
</script>

<style>
</style>