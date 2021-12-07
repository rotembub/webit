<template>
  <div @click.stop="" :style="getPos" class="element-editor element-size">
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
    <span>
      Top Spacing :
      <input
        @mousemove.stop=""
        @mouseup="updateStyle"
        v-model="elStyle.paddingTop"
        type="range"
        min="0"
        max="100"
        step="0.5"
      />
    </span>
    <span>
      Bottom Spacing :
      <input
        @mousemove.stop=""
        @mouseup="updateStyle"
        v-model="elStyle.paddingBottom"
        type="range"
        min="0"
        max="100"
      />
    </span>
    <span>
      Right Spacing :
      <input
        @mousemove.stop=""
        @mouseup="updateStyle"
        v-model="elStyle.paddingRight"
        type="range"
        min="0"
        max="100"
      />
    </span>
    <span>
      Left Spacing :
      <input
        @mousemove.stop=""
        @mouseup="updateStyle"
        v-model="elStyle.paddingLeft"
        type="range"
        min="0"
        max="100"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: ["id", "elStyle", "cmpId"],
  data() {
    return {
      isText: false,
      isImg: false,
      currWap: null,
      currCmpIdx: null,
    };
  },
  created() {},
  methods: {
    async updateStyle() {
      console.log(this.elStyle.lineHeight, "elStyle-linehight");
      console.log(this.elStyle, "elStyle");
      try {
        this.$store.dispatch({ type: "updateWapStyle", cmpId: this.cmpId });
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    getPos() {
      console.log(this.$store.getters.getModalPos);
      const pos = this.$store.getters.getModalPos;
      // console.log(pos);
      return { right: pos.right + "px", top: pos.top + "px" };
    },
  },
};
</script>

<style></style>
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: '',
                    fontStyle: '',
                  },