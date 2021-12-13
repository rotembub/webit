<template>
  <div :class="classForContainer">
    <div v-if="isFullScreen" class="picker-hover">
      <i class="fas fa-chevron-right"></i>
    </div>

    <div :class="classForPicker">
      <el-collapse accordion>
        <div>
          <editor-header></editor-header>
          <div class="cmp-picker-title">
            <h5 @click="undo">Undo <i class="el-icon-refresh-left"></i></h5>
            <h4>Drag from here</h4>
          </div>
          <el-collapse-item
            v-for="type in types"
            :title="type"
            :key="'k' + type"
            @click.native="loadThemes(type)"
          >
            <template v-if="themes">
              <div class="collapse-items">
                <ul class="collapse-items">
                  <Container
                    group-name="1"
                    :get-child-payload="getChildPayload1"
                  >
                    <Draggable
                      v-for="(theme, idx) in themes"
                      :key="idx * Date.now()"
                    >
                      <!-- {{
            theme.type
          }} -->
                      <li class="cmp-picker-options">
                        <img
                          :src="
                            require(`@/assets/cmp-picker-preview/` +
                              theme.imgPath)
                          "
                        />
                      </li>
                    </Draggable>
                  </Container>
                </ul>
              </div>
            </template>
          </el-collapse-item>
        </div>
        <div class="wap-publish">
          <!-- <el-button
        class="save-btn"
        @click="dialogFormVisible = true"
        type="primary"
        ><span></span><i class="fas fa-save"></i
      ></el-button> -->
          <a @click="copyUrl">Work together</a>
          <div class="publish-icons">
            <i @click="onMobileState('mobile')" class="el-icon-mobile"></i>
            <i @click="onMobileState('desktop')" class="el-icon-monitor"></i>
          </div>
          <el-button @click="publishWap" type="primary"
            ><span>Publish</span><i class="el-icon-upload el-icon-right"></i
          ></el-button>
        </div>
        <!-- <el-dialog
      title="Pick a name for your site"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="Site name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="saveWap">Confirm</el-button>
      </span>
    </el-dialog> -->
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from 'element-ui'
import wapHeader from '../wap-cmps/wap-header.cmp.vue'
import { cmpService } from '../../services/cmp.service.js'
import { Container, Draggable } from 'vue-smooth-dnd'
import editorHeader from '../editor-header.cmp.vue'
import { socketService } from '../../services/socket.service'

export default {
  name: 'cmpPicker',
  components: {
    wapHeader,
    Collapse,
    CollapseItem,
    Container,
    Draggable,
    editorHeader,
  },
  data() {
    return {
      themes: null,
      types: [
        'Headers',
        'Galleries',
        'Text',
        'Contacts',
        'Cards',
        'Reviews',
        'Landings',
        'Footers',
      ],
      wapToPublish: null,
      isMobile: false,
      dialogFormVisible: false,
      form: {
        name: '',
      },
      formLabelWidth: '100px',
      isFullScreen: true,
    }
  },
  watch: {
    '$store.getters.isMobile'(isMobile) {
      this.isMobile = isMobile
    },
    '$store.getters.isFullScreen'(isFullScreen) {
      this.isFullScreen = isFullScreen
    },
  },
  created() {
    this.isFullScreen = this.$store.getters.isFullScreen
  },
  methods: {
    copyUrl() {
      const url = window.location.href
      navigator.clipboard.writeText(url)
      this.$notify({
        group: 'foo',
        title: 'URL Copied to Clipboard',
        type: 'success',
        text: 'Hello user! This is a notification!',
      })
      console.log(url)
    },
    undo() {
      socketService.emit('wap undo', this.$store.getters.getCurrWap)
    },
    onMobileState(str) {
      // console.log('HERE')
      this.$store.dispatch({ type: 'setScreenState', str })
    },
    getChildPayload1(index) {
      return this.themes[index]
    },
    publishWap() {
      console.log('wapToPublish ID: ')
      this.$notify({
        group: 'foo',
        title: 'Your website is now online!',
        type: 'success',
        text: 'Hello user! This is a notification!',
      })
      const wapCopy = JSON.parse(
        // copy the json for creating new templates/sites
        JSON.stringify(this.$store.getters.getCurrWap)
      )
      delete wapCopy._id
      const JsonText = JSON.stringify(wapCopy)
      // navigator.clipboard.writeText(JsonText);
      console.log('copy to clip', JsonText)
      window.open(`/publish/${this.$store.getters.getCurrWap._id}`, '_blank')
    },
    saveWap() {
      //need to save to database the user  waps
      this.dialogFormVisible = false
      const wapId = this.$store.getters.getCurrWap._id
      const wapToSave = {
        wapId,
        siteName: this.form.name,
      }
      this.form.name = ''
      const user = this.$store.getters.getUser
      if (!user) this.$store.commit({ type: 'saveGuestWap', wapId: wapToSave })
      //change it save in db guest waps
      else {
        user.waps.push(wapToSave)
        this.$store.dispatch({ type: 'updateUser', user }) //user.waps.push(wapToSaveId);
      }
      console.log('saved', user)
    },
    async add(cmpId) {
      // console.log(cmpId);
      try {
        const cmp = await this.$store.dispatch({
          type: 'addCmp',
          id: cmpId,
        })
      } catch (err) {
        console.log(err)
      }
    },
    loadThemes(cmpCat) {
      const allThemes = cmpService.getThemesFor(cmpCat)
      this.themes = allThemes
      // console.log(this.themes);
    },

    getProperTxt(type) {
      // console.log(type);
      const textToShow = type.substring(4)
      return textToShow.charAt(0).toUpperCase() + textToShow.slice(1)
    },
  },
  computed: {
    classForPicker() {
      // const isFullScreen =
      if (this.$store.getters.isFullScreen)
        return 'cmp-picker-collapse scrollbar style-2 cmp-picker-fullscreen'
      else return 'cmp-picker-collapse scrollbar style-2 cmp-picker'
    },
    classForContainer() {
      if (this.$store.getters.isFullScreen)
        return 'cmp-picker-container-fullscreen'
      return 'cmp-picker-container'
    },
  },
}
</script>

<style></style>
