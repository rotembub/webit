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

<template>
  <section v-if="cmp" class="wap-container">
    <!--Need to see if its fits or not as a class  -->
    <!-- <slot>
      <cmps-tool-bar :id="cmp.id"></cmps-tool-bar>
    </slot> -->
    <!-- orientation="horizontal" -->
    <Container
      :style="getCurrStyle"
      :orientation="getDirection"
      :class="cmp.theme"
      :auto-scroll-enabled="true"
      group-name="4"
      :get-child-payload="getChildPayload1"
      @drop="onDrop('4', $event)"
    >
      <Draggable
        v-for="innerCmp in cmp.info.cmps"
        :key="innerCmp.id"
        :class="innerCmp.theme"
      >
        <!-- <slot><cmps-tool-bar :id="innerCmp.id"></cmps-tool-bar></slot> -->
        <component
          :cmp="innerCmp"
          :is="innerCmp.type"
          :name="innerCmp.id"
          :containerId="cmp.id"
        >
        </component>
      </Draggable>
    </Container>
  </section>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import wapDynamic from './wap-dynamic.cmp.vue'
// import cmpsToolBar from '../editor-cmps/cmps-tool-bar.cmp.vue'
import wapHeader from './wap-header.cmp.vue'
import wapFooter from './wap-footer.cmp.vue'
import wapGallery from './wap-gallery.cmp.vue'
import wapSocial from './wap-social.cmp.vue'
import wapSignup from './wap-signup.cmp.vue'
import wapContact from './wap-contact.cmp.vue'
import wapText from './wap-text.cmp.vue'
import wapCard from './wap-card.cmp.vue'
import wapReview from './wap-review.cmp.vue'
import wapImg from './wap-img.cmp.vue'
import utilService from '../../services/util.service'
export default {
  components: {
    wapDynamic,
    wapHeader,
    wapFooter,
    wapGallery,
    wapSocial,
    wapSignup,
    wapContact,
    wapText,
    wapCard,
    wapReview,
    wapImg,
    Container,
    Draggable,
  },
  props: ['cmp'],
  data() {
    return {
      mediaWidth: window.innerWidth,
    }
  },
  created() {},
  computed: {
    getCurrStyle() {
      const style = {
        backgroundImage: this.cmp.style.background,
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + 'px', //fix fontSize not change
        backgroundColor: this.cmp.style.backgroundColor,
        //new size style
        height: this.cmp.style.height + 'vh', // **problem range too small
        paddingTop: this.cmp.style.paddingTop + '%',
        paddingBottom: this.cmp.style.paddingBottom + '%',
        paddingLeft: this.cmp.style.paddingLeft + '%',
        paddingRight: this.cmp.style.paddingRight + '%',
      }
      return style
    },
    getDirection() {
      // console.log(this.mediaWidth);
      if (this.cmp.info.toggle && this.mediaWidth <= 800) {
        console.log('switching to vertical')
        return 'vertical'
      }
      console.log(window.innerWidth)
      return this.cmp.info.dir
    },
  },
  mounted() {
    // failed attemped to make it reactive
    // window.onresize = () => {
    //   console.log("updating the data ");
    //   this.mediaWidth = window.innerWidth;
    // };
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  // watch: {
  //   "window.innerWidth": {
  //     handler() {
  //       console.log("updating", window.innerWidth);
  //       this.mediaWidth = window.innerWidth;
  //     },
  //     immediate: true,
  //   },
  // },
  methods: {
    getChildPayload1(index) {
      return this.cmp.info.cmps[index]
    },
    onDrop(groupName, dropResult) {
      if (dropResult.removedIndex === dropResult.addedIndex) return
      if (dropResult.removedIndex === null && dropResult.addedIndex >= 0) {
        console.log('groupName', groupName, 'dropResult', dropResult)
        // this.$store.dispatch({
        //   type: "addCmp",
        //   id: dropResult.payload.cmpId,
        //   idx: dropResult.addedIndex,
        // });
      } else {
        const removed = this.cmp.info.cmps.splice(dropResult.removedIndex, 1)
        this.cmp.info.cmps.splice(dropResult.addedIndex, 0, removed[0])
        this.$store.dispatch({
          type: 'updateWapComponents',
          wap: null,
        })
      }
    },
    onResize() {
      this.mediaWidth = window.innerWidth
      // this.onResizeScreen()
    },
    // onResizeScreen() {
    //   this.mediaWidth = window.innerWidth
    //   clearTimeout(this.debounceScreen)
    //   this.debounceScreen = setTimeout(() => {
    //     if (this.mediaWidth < 500) {
    //       this.$store.dispatch('isMobile', { isMobile: true })
    //       console.log('Setting Mobile')
    //     } else {
    //       this.$store.dispatch('isMobile', { isMobile: false })
    //       console.log('Setting Desktop')
    //     }
    //   }, 500)
    // },
  },
}
</script>

<component
  v-for="innerCmp in cmp.info.cmps"
  :cmp="innerCmp"
  :is="innerCmp.type"
  :key="innerCmp.id"
  :name="innerCmp.id"
  :containerId="cmp.id"
>
        </component>
