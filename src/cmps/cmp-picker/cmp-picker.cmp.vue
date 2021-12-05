<template>
  <el-collapse class="cmp-picker-collapse scrollbar style-2" accordion>
    <div>
      <el-collapse-item
        v-for="type in types"
        :title="getProperTxt(type)"
        :key="'k' + type"
        @click.native="loadThemes(type)"
      >
        <template v-if="themes">
          <div class="collapse-items">
            <ul class="collapse-items">
              <Container group-name="1" :get-child-payload="getChildPayload1">
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
                        require(`@/assets/cmp-picker-preview/` + theme.imgPath)
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
      <el-button @click="publishWap" type="primary"
        ><span>Publish</span><i class="el-icon-upload el-icon-right"></i
      ></el-button>
    </div>
  </el-collapse>

  <!-- <el-collapse-item title="Headers" @click.native="loadThemes('wap-header')">
      <div
        v-if="themes"
        v-for="theme in themes"
        :key="theme.type"
        @click.self.stop="add(theme.cmpId)"
      > -->
  <!-- <img
          :src="require('@/assets/cmp-picker-preview/' + theme.type + '.png')"
        /> -->
  <!-- {{ theme.type }}
      </div>
    </el-collapse-item>
    <el-collapse-item
      title="Galleries"
      @click.native="loadThemes('wap-gallery')"
    >
      <div
        v-if="themes"
        v-for="theme in themes"
        @click.self.stop="add(theme.cmpId)"
        :key="theme.type"
      >
        {{ theme.type }}
      </div>
    </el-collapse-item>
    <el-collapse-item title="Text" @click.native="loadThemes('wap-text')">
      <div
        v-if="themes"
        v-for="theme in themes"
        @click.self.stop="add(theme.cmpId)"
        :key="theme.type"
      >
        {{ theme.type }}
      </div>
    </el-collapse-item>
    <el-collapse-item
      title="Contacts"
      @click.native="loadThemes('wap-contact')"
    >
      <div
        v-if="themes"
        v-for="theme in themes"
        @click.self.stop="add(theme.cmpId)"
        :key="theme.type"
      >
        {{ theme.type }}
      </div>
    </el-collapse-item> -->
  <!-- </el-collapse> -->
</template>

<script>
import { Collapse, CollapseItem } from 'element-ui'
import wapHeader from '../wap-cmps/wap-header.cmp.vue'
import { cmpService } from '../../services/cmp.service.js'
import { Container, Draggable } from 'vue-smooth-dnd'

export default {
  name: 'cmpPicker',
  components: {
    wapHeader,
    Collapse,
    CollapseItem,
    Container,
    Draggable,
  },
  data() {
    return {
      themes: null,
      types: [
        'wap-header',
        'wap-gallery',
        'wap-text',
        'wap-contact',
        'wap-card',
        'wap-review',
        'wap-signup',
      ],
      wapToPublish: null,
    }
  },
  methods: {
    getChildPayload1(index) {
      return this.themes[index]
    },
    publishWap() {
      this.wapToPublish = this.$store.getters.getCurrWap
      this.$store.dispatch({
        type: 'publishWap',
        wapToPublish: this.wapToPublish,
      })
      console.log('ID', this.wapToPublish._id)
      this.$router.push(`/publish/${this.wapToPublish._id}`)
      // console.log('wapToPublish', wapToPublish)
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
    loadThemes(cmpType) {
      const allThemes = cmpService.getThemesFor(cmpType)
      this.themes = allThemes
      // console.log(this.themes);
    },
    getProperTxt(type) {
      // console.log(type);
      const textToShow = type.substring(4)
      return textToShow.charAt(0).toUpperCase() + textToShow.slice(1)
    },
  },
  computed: {},
}
</script>

<style></style>
