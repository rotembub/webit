<template>
  <div @click.stop="" class="element-editor-cmp">
    <template v-if="isImg">
      <span>
        Width :
        <input type="range" />
      </span>
      <span>
        Top spacing :
        <input type="range" />
      </span>
      <span>
        Bottom spacing :
        <input type="range" />
      </span>
      <span>
        Left spacing :
        <input type="range" />
      </span>
      <span>
        Right spacing :
        <input type="range" />
      </span>
    </template>
    <!-- ////////////////////////////////// -->
    <span>
      <!-- BackgroundColor :
      <input
        @input="updateCmp()"
        v-model="elStyle.backgroundColor"
        type="color"
      /> -->
    </span>
    <span>
      Text Color :
      <input v-model="elStyle.color" type="color" />
    </span>
    <span>
      Font size :
      <input
        v-model="elStyle.fontSize"
        
        type="range"
        min="10"
        max="30"
        step="1"
      />
    </span>
  </div>
</template>

<script>
import { ColorPicker } from "element-ui";
export default {
  props: ["id", "elStyle"],
  data() {
    return {
      isText: false,
      isImg: false,
      currWap: null,
      currCmpIdx: null,
    };
  },
  created() {
    // this.elStyle.fontSize = 16 + "px";
    // this.currWap = this.$store.getters.getCurrWap;
    // console.log(this.currWap, "created");
    // this.currCmpIdx = this.currWap.cmps.findIndex((cmp) => cmp.id === this.id);
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
  computed: {
    // setFontSize(value) {
    //   this.elStyle.fontSize = this.elStyle.fontSize + "px";
    // },
    // setWap() {
    //   console.log(this.$store.getters.getCurrWap, "store wap");
    //   return this.$store.getters.getCurrWap;
    // },
  },
};
</script>

<style></style>