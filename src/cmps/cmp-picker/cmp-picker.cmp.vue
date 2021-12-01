<template>
  <el-collapse class="cmp-picker-collapse">
    <el-collapse-item
      title="Headers"
      @click.native="loadThemes('wap-header')"
      name="1"
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
  </el-collapse>
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
    }
  },
  methods: {
    async add(cmpId) {
      console.log(cmpId)
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
      console.log(this.themes)
    },
  },
}
</script>

<style></style>
