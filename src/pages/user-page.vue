<template>
  <section class="user-details">
    <div class="user-detail-bar">
      <div class="user-details-title">User Profile</div>
      <div class="user-profile">
        <p class="user-name">{{ showUser }}</p>

        <button v-if="user" @click="logout">logOut</button>
        <div class="usefull-btns">
          <button class="modal-btn" @click="toggleModal">
            <i class="fas fa-user-circle"></i>
            <!-- <i class="fas fa-sign-in-alt"></i> -->
          </button>
          <button class="back-btn" @click="goHome">
            <i class="fas fa-home"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="user-main-container">
      <h3 class="title">Your Sites</h3>

      <template v-if="user">
        <user-list :waps="waps"></user-list>
        <!-- <div v-for="wap in waps" :key="wap._id">
          <p>{{ wap.name }}</p>
        </div> -->
      </template>
      <userLogin></userLogin>
    </div>
  </section>
</template>

<script>
  import userLogin from '../cmps/user-login-modal.cmp.vue';
  import userList from '../cmps/user-wap-list.cmp.vue';

  export default {
    components: {
      userLogin,
      userList,
    },
    data() {
      return {
        userName: null,
        user: null,
        waps: null,
      };
    },
    async created() {
      this.user = this.$store.getters.getUser;
      this.waps = this.user
        ? await this.$store.dispatch({type: 'getUserWaps', user: this.user})
        : null;
    },
    methods: {
      async logout() {
        await this.$store.dispatch({type: 'logout'});
        this.$router.push('/');
      },
      toggleModal() {
        this.$store.commit('toggleModal');
      },
      goHome() {
        this.$router.push('/');
      },
    },
    computed: {
      showUser() {
        this.userName = this.$store.getters.getUser;
        return this.userName ? this.userName.username : 'Guest';
      },
    },
  };
</script>

<style></style>
