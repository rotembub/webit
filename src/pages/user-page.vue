<template>
  <section class="user-details">
    <div class="user-detail-bar">
      <div class="user-details-title"></div>
      <div class="user-profile">
        <p>{{ showUser }}</p>

        <button v-if="user" @click="logout">logOut</button>
      </div>
    </div>
    <div class="user-main-container">
      <userLogin></userLogin>
    </div>
  </section>
</template>

<script>
  import userLogin from '../cmps/user-login-modal.cmp.vue';

  export default {
    components: {
      userLogin,
    },
    data() {
      return {
        user: null,
      };
    },
    methods: {
      async logout() {
        await this.$store.dispatch({type: 'logout'});
        this.$router.push('/');
      },
    },
    computed: {
      showUser() {
        this.user = this.$store.getters.getUser;
        return this.user ? this.user.username : 'Guest';
      },
    },
  };
</script>

<style></style>
