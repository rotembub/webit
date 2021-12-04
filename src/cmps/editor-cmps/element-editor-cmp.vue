<template>
  <div @click.stop="" class="element-editor">
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
    <span @click.stop>
      Text Color :
      <input @drag.stop v-model="elStyle.color" type="color" />
    </span>
    <span>
      Font size :
      <input @mousemove.stop=""
        v-model="elStyle.fontSize"
        
        type="range"
        min="10"
        max="50"
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
  },
};
</script>

<style></style>