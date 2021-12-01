<template>
  <section class="app-header">
    <div>
      <img src="@/assets/Logo.png" alt="" />
    </div>
    <div class="nav-bar">
<<<<<<< HEAD
      <router-link to="/">Home</router-link> |
      <router-link to="/template">Templates</router-link>|
      <router-link to="/editor">Editor</router-link>
=======
      <router-link to="/">Home</router-link>
      <router-link to="/template">Templates</router-link>
>>>>>>> 6f382b604c675e87d52b9c834442f243d5484fae
    </div>
    <!-- <router-link to="/editor">Editor</router-link> | -->
  </section>
</template>

<script>
<<<<<<< HEAD
  export default {
    created() {
      this.$store.dispatch({type: 'setCurrWap'});
    },
  };
=======
export default {
  created() {
    this.$store.dispatch({ type: 'setCurrWap' })
  },
}
>>>>>>> 6f382b604c675e87d52b9c834442f243d5484fae
</script>

<style></style>
