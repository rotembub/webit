<template>
  <div @click.stop="" class="wap-editor-modal">
    <!-- <span>
      Height :
      <input
        type="range"
        min="1"
        max="100"
        
        @mousemove.stop
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.height"
      />
    </span> -->
    <span>
      Top spacing :
      <input
        type="range"
        min="1"
        max="100"
        @mousemove.stop
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.paddingTop"
      />
    </span>
    <!-- adding padding 2em from the start works good with paddingTop/ archit headr dont have it -->
    <!-- can change the min value later -->
    <span>
      Bottom spacing :
      <input
        type="range"
        min="1"
        max="100"
        @mousemove.stop
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.paddingBottom"
      />
    </span>
    <span>
      Left spacing :
      <input
        type="range"
        min="1"
        max="100"
        @mousemove.stop
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.paddingLeft"
      />
    </span>
    <span>
      Right spacing :
      <input
        type="range"
        min="1"
        max="100"
        @mousemove.stop
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.paddingRight"
      />
    </span>
  </div>
</template>

<script>
import { ColorPicker } from "element-ui";
export default {
  props: ["id"],
  data() {
    return {
      isText: false,
      isImg: false,
      currWap: null,
      currCmpIdx: null,
      maxSize: "",
      cmpStyle: {
        background: "url()",
        color: "",
        backgroundColor: "",
        fontSize: "",
        paddingRight: "",
        paddingTop: "",
        paddingBottom: "",
        paddingLeft: "",
        lineHeight: "",
        fontFamily: "",
        fontStyle: "",
        marginTop: "",
        marginRight: "",
        marginBottom: "",
        marginLeft: "",
        maxHeight: "",
        maxWidth: "",
      },
    };
  },
  created() {
    this.currWap = this.$store.getters.getCurrWap;
    // console.log(this.currWap, 'created');
    this.currCmpIdx = this.currWap.cmps.findIndex((cmp) => cmp.id === this.id);
    this.maxSize =
      parseInt(this.currWap.cmps[this.currCmpIdx].style.height) + 50 + "";
    // console.log(this.maxSize, 'maxSize');
  },
  methods: {
    async updateCmp() {
      try {
        const updatedWap = await this.$store.dispatch({
          type: "updateWapStyle",
          currWap: this.currWap,
          cmpId: this.id, // WATCHOUT
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {},
};
</script>

<style></style>
