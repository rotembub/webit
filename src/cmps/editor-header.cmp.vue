<template>
  <section class="editor-header">
    <div v-if="isOpen" @click="toggleHeader" class="screen"></div>
    <!-- <div @click="toggleHeader" class="sticky-tab">
      <div class="">
        <i type="danger" class="el-icon-menu"></i>
      </div>
    </div> -->
    <div @click="toggleHeader" :class="isOpenClass">
      <div @click="openRoute('/')">
        <i type="danger" class="el-icon-s-home"></i>
      </div>
      <div @click="openRoute('/template')">
        <i class="far fa-images"></i>
      </div>
      <!-- <div @click="openRoute('/user')">
        <i type="danger" class="el-icon-user-solid"></i>
      </div> -->

      <!-- <div class="div5">
        <i type="danger" class="el-icon-delete"></i>
      </div> -->

      <!-- <router-link to="/">Home</router-link>
      <router-link to="/template">Templates</router-link>
      <router-link to="/editor">Editor</router-link> -->
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    isOpenClass() {
      return this.isOpen ? 'editor-nav-bar isOpen' : 'editor-nav-bar'
    },
  },
  methods: {
    openRoute(str) {
      this.$router.push(str)
    },
    toggleHeader() {
      // console.log('TOGGLE:', this.isOpen)
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style></style>
