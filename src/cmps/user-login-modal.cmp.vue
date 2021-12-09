<template>
  <section class="user-modal">
    <div v-if="isLogin">
      <h3>Login</h3>
      <form @submit.prevent="login">
        <el-input type="text" placeholder="user Name" v-model="cred.username" />
        <el-input
          type="password"
          placeholder="password"
          v-model="cred.password"
        />
        <button>Login</button>
        <button>Continue as guest</button>
        <p>
          Need an account? <span @click="changeIsLogin">{{ showLink }}</span>
        </p>
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
        <button>Sign Up</button>
        <button>Continue as guest</button>
        <p>
          Need an account? <span @click="changeIsLogin">{{ showLink }}</span>
        </p>
      </form>
    </div>
    <!-- <button @click="logout">Logout</button> -->
  </section>
</template>

<script>
  export default {
    data() {
      return {
        // userToEdit: null,
        isLogin: true,
        cred: {
          fullname: '',
          username: '',
          password: '',
        },
      };
    },
    created() {
      // this.userToEdit = userService.getEmptyUser();
      // console.log(this.userToEdit);
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch({type: 'login', cred: this.cred});
          this.$router.push('/');
        } catch (err) {
          console.log('invalid username or password');
        }
      },
      async signup() {
        await this.$store.dispatch({type: 'signup', cred: this.cred});
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
    },
  };
</script>

<style></style>
