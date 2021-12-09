<template>
  <section class="user-details">
    <div class="user-detail-bar">
      <div class="user-details-title">User Profile</div>
      <div class="user-profile">
        <p>{{ showUser }}</p>

        <button v-if="user" @click="logout">logOut</button>

        <button class="modal-btn" @click="toggleModal">open Modal</button>
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
      toggleModal() {
        this.$store.commit('toggleModal');
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
