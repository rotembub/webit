<template>
  <el-collapse>
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
      <!-- <component
        v-for="cmp in wap.cmps"
        :cmp="cmp"
        :is="cmp.type"
        :key="cmp.id"
      >
      </component> -->
      <!-- <component
        v-for="(item, idx) in divs"
        :is="item.type"
        :key="idx"
        :cmpData="item"
        @removed="removeItem"
      ></component> -->
      <!-- <draggable :group="{name: 'my-group', pull: 'clone', put: false}">
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to;
          </div>
        </draggable>
        <draggable :group="{name: 'my-group', pull: 'clone', put: false}">
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </draggable> -->
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  import {Collapse, CollapseItem} from 'element-ui';
  import wapHeader from '../wap-cmps/wap-header.cmp.vue';
  import {cmpService} from '../../services/cmp.service.js';

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
      };
    },
    methods: {
      async add(cmpId) {
        console.log(cmpId);
        try {
          const cmp = await this.$store.dispatch({
            type: 'addCmp',
            id: cmpId,
          });
        } catch (err) {
          console.log(err);
        }
      },
      loadThemes(cmpType) {
        const allThemes = cmpService.getThemesFor(cmpType);
        this.themes = allThemes;
        console.log(this.themes);
      },
    },
    created() {
      //   this.$store.dispatch({type: 'loadCmps'});
    },
    computed: {
      cmps() {
        return this.$store.getters.cmps;
      },
      wap() {
        console.log(this.$store.getters.getCurrWap);
        return this.$store.getters.getCurrWap;
      },
      showThemes() {
        console.log('show');
        return this.themes;
      },
    },
  };
</script>

<style></style>
