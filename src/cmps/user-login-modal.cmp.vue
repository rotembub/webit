<template>
  <section class="user-modal" :class="{'hide-user-modal': hide}">
    <div v-if="isLogin">
      <h3>Login</h3>
      <form @submit.prevent="login">
        <el-input type="text" placeholder="user Name" v-model="cred.username" />
        <el-input
          type="password"
          placeholder="password"
          v-model="cred.password"
        />
        <div class="btn-container">
          <button>Login</button>
          <button @click="isGuest = true">Continue as guest</button>
          <p>
            Need an account? <span @click="changeIsLogin">{{ showLink }}</span>
          </p>
        </div>
      </form>
    </div>
    <div v-else>
      <h3>Signup</h3>
      <form @submit.prevent="signup">
        <el-input type="text" placeholder="fullname" v-model="cred.fullname" />
        <el-input type="text" placeholder="user Name" v-model="cred.username" />
        <el-input
          type="password"
          placeholder="password"
          v-model="cred.password"
        />
        <div class="btn-container">
          <button>Sign Up</button>
          <button>Continue as guest</button>
          <p>
            Need an account? <span @click="changeIsLogin">{{ showLink }}</span>
          </p>
        </div>
      </form>
    </div>
    <!-- <button @click="logout">Logout</button> -->
  </section>
</template>

<script>
  export default {
    data() {
      return {
        isLogin: true,
        isGuest: false,
        cred: {
          fullname: '',
          username: '',
          password: '',
        },
      };
    },
    created() {},
    methods: {
      async login() {
        try {
          if (this.isGuest) {
            this.cred = {
              fullname: 'guest', //change to Guest
              username: 'guest',
              password: 'guest',
            };
          }
          await this.$store.dispatch({type: 'login', cred: this.cred});
          this.$store.commit({type: 'setIsHide'});
          this.$router.push('/');
        } catch (err) {
          console.log('invalid username or password');
        }
      },
      async signup() {
        await this.$store.dispatch({type: 'signup', cred: this.cred});
        this.$store.commit({type: 'setIsHide'});
        this.$router.push('/');
      },
      changeIsLogin() {
        this.isLogin = !this.isLogin;
      },
    },
    computed: {
      showLink() {
        return this.isLogin ? 'Sign Up' : 'Login';
      },
      hide() {
        return this.$store.getters.getIsHide;
      },
    },
  };
</script>

<style></style>
