<template>
  <section class="scrollbar style-2" v-if="wap" :style="getMobileStyle">
    <!-- <component v-for="cmp in wap.cmps" :cmp="cmp" :is="cmp.type" :key="cmp.id">
    </component> -->

    <div :class="wap.theme">
      <Container
        :auto-scroll-enabled="true"
        group-name="1"
        :get-child-payload="getChildPayload1"
        @drop="onDrop('items1', $event)"
      >
        <Draggable v-for="cmp in wap.cmps" :key="cmp.id">
          <wap-dynamic :cmp="cmp">
            <slot>
              <cmps-tool-bar @updated="updateWap" :id="cmp.id"></cmps-tool-bar>
            </slot>
          </wap-dynamic>
        </Draggable>
        <div v-if="!wap.cmps.length" class="drag-here-div">
          <h1>Please Drag Here</h1>
        </div>
      </Container>
    </div>

    <el-button
      v-if="!isMobile"
      @click="toggleFullScreen"
      class="is-full-wap-btn"
      type="info"
      :icon="iconToShow"
      circle
    ></el-button>
  </section>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
// import wapHeader from "./wap-cmps/wap-header.cmp.vue";
import wapDynamic from '../cmps/wap-cmps/wap-dynamic.cmp.vue'
// import wapToolBar from './wap-cmps/wap-tool-bar.cmp.vue'
import cmpsToolBar from '../cmps/editor-cmps/cmps-tool-bar.cmp.vue'
export default {
  data() {
    return {
      isFullScreen: false,
      isMobile: false,
    }
  },
  created() {
    this.$store.dispatch({ type: 'loadCmps' }) //test
    this.isMobile = this.$store.getters.isMobile
    // if (this.isMobile) {
    //   this.$store.dispatch({ type: 'toggleEditorFullScreen' })
    // }
  },
  watch: {
    '$store.getters.isFullScreen'(isFullScreen) {
      this.isFullScreen = isFullScreen
    },
    '$store.getters.isMobile'(isMobile) {
      this.isMobile = isMobile
    },
  },
  methods: {
    getChildPayload1(index) {
      return this.wap.cmps[index]
    },
    onDrop(groupName, dropResult) {
      let currWapToEdit = { ...this.wap }
      if (dropResult.removedIndex === dropResult.addedIndex) return
      if (dropResult.removedIndex === null && dropResult.addedIndex >= 0) {
        // console.log('IN ADDED COMPONENTS')

        // console.log('groupName', groupName, 'dropResult', dropResult);
        this.$store.dispatch({
          type: 'addCmp',
          id: dropResult.payload.cmpId,
          idx: dropResult.addedIndex,
        })
      } else {
        // console.log('IN UPDATE COMPONENTS');
        // console.log('groupName', groupName, 'dropResult', dropResult);
        const removed = currWapToEdit.cmps.splice(dropResult.removedIndex, 1)
        currWapToEdit.cmps.splice(dropResult.addedIndex, 0, removed[0])
        this.$store.dispatch({
          type: 'updateWapComponents',
          wap: currWapToEdit,
        })
      }
    },
    toggleFullScreen() {
      this.$store.dispatch({ type: 'toggleEditorFullScreen' })
    },
    updateWap(updatedWap) {
      // console.log(updatedWap, 'got to wapBuilder')
      //try to update here
    },
  },
  computed: {
    iconToShow() {
      const isFullScreen = this.$store.getters.isFullScreen
      if (isFullScreen) return 'el-icon-right'
      return 'el-icon-rank'
    },
    getMobileStyle() {
      if (this.isFullScreen) return { paddingTop: '0px', paddingLeft: '0px' }
    },
    wap() {
      // console.log(this.$store.getters.getCurrWap);
      // console.log('wapBuilder computed', this.$store.getters.getCurrWap)
      return this.$store.getters.getCurrWap
    },
  },
  components: {
    // wapHeader,
    // wapToolBar,
    cmpsToolBar,
    wapDynamic,
    Container,
    Draggable,
  },
}
</script>

<style></style>
