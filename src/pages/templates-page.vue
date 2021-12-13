<template>
  <div>
    <app-header></app-header>
    <modal name="startWapModal" :maxWidth="500" :adaptive="true">
      <el-form
        class="create-wap-modal"
        ref="form"
        :model="form"
        label-width="120px"
      >
        <h2>Create New Website</h2>
        <el-divider></el-divider>

        <div class="new-website-form">
          <h3>Your website name</h3>
          <div class="name-box">
            <el-input placeholder="Project name" v-model="form.name"></el-input>
          </div>

          <!-- <el-divider></el-divider>
          <h3>Invite your team</h3>
          <div class="invite-box">
            <el-autocomplete
              v-model="form.searchStr"
              :fetch-suggestions="querySearchAsync"
              placeholder="Add Collaborator"
              @select="handleSelect"
            ></el-autocomplete>
            <el-card class="box-card">
              <div slot="header" class="clearfix">Collaborators</div>
              <div
                v-for="(user, idx) in form.users"
                :key="idx"
                class="text item"
              >
                <div>
                  <el-avatar icon="el-icon-user-solid"></el-avatar>
                </div>
                {{ user.username }}
              </div>
            </el-card>
          </div> -->
        </div>
        <el-form-item>
          <el-button @click="toTheEditor" type="primary">Create</el-button>
          <el-button @click="closeModal">Cancel</el-button>
        </el-form-item>
      </el-form>
    </modal>
    <section class="templates-page">
      <div class="templates-page-title">
        <h1>Choose Your Favourite Template</h1>
      </div>
      <template-list
        @onCreateWap="onCreateWap"
        v-if="templates"
        :templates="templates"
      ></template-list>
    </section>
  </div>
</template>

<script>
import templateList from '../cmps/template-list.cmp.vue'
import appHeader from '../cmps/app-header.cmp.vue'

export default {
  data() {
    return {
      form: {
        searchStr: '',
        name: '',
        users: [],
      },
      foundUsers: [],
      templateId: '',
    }
  },
  created() {
    // this.$store.dispatch({ type: 'loadTemplates' })
  },
  computed: {
    templates() {
      console.log(
        'getting waps for you in templates PAGE',
        this.$store.getters.getTemplates
      )
      return this.$store.getters.getTemplates
    },
  },
  methods: {
    onSubmit() {},
    handleSelect(user) {
      console.log(user)
      this.form.users.push(user.link)
    },
    async querySearchAsync(queryString, cb) {
      console.log(queryString)
      const users = await this.$store.dispatch({
        type: 'getUsers',
        searchStr: this.form.searchStr,
      })
      console.log(users)
      const usernames = users.map(user => {
        return {
          value: user.username,
          link: user,
        }
      })
      console.log(usernames)
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(usernames)
      }, 3000 * Math.random())
    },
    closeModal() {
      this.$modal.hide('startWapModal')
    },
    onCreateWap(templateId) {
      this.templateId = templateId
      console.log('AM I HERE?')
      this.$modal.show('startWapModal')
    },
    async toTheEditor() {
      this.$isLoading(true)
      setTimeout(() => this.$isLoading(false), 1500)
      const wap = await this.$store.dispatch({
        type: 'createNewWap',
        templateId: this.templateId,
        newWapData: this.form,
      })
      this.$notify({
        group: 'foo',
        title: 'Your Website is online',
        type: 'success',
        text: 'Hello user! This is a notification!',
      })
      this.$router.push('/editor/' + wap._id)
    },
  },
  components: {
    templateList,
    appHeader,
  },
}
</script>

<style></style>
