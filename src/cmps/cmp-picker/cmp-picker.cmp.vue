<template>
  <el-collapse class="cmp-picker-collapse" accordion>
    <el-collapse-item
      v-for="type in types"
      :title="getProperTxt(type)"
      :key="'k' + type"
      @click.native="loadThemes(type)"
    >
      <template v-if="themes">
        <ul v-for="theme in themes" :key="theme.type">
          <!-- {{
            theme.type
          }} -->
          <li @click="add(theme.cmpId)">
            <img
              :src="
                require('@/assets/cmp-picker-preview/theme-header-architecture.png')
              "
            />
          </li>
        </ul>
      </template>
    </el-collapse-item>
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

export default {
  name: 'cmpPicker',
  components: {
    wapHeader,
    Collapse,
    CollapseItem,
  },
  data() {
    return {
      themes: null,
      types: ['wap-header', 'wap-gallery', 'wap-text', 'wap-contact'],
    }
  },
  methods: {
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
