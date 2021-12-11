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
    <span v-if="elType === 'imgs'">
      Height :
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.maxHeight"
        type="range"
        min="0"
        max="50"
        step="0.5"
      />
    </span>
    <span v-if="elType === 'imgs'">
      Width :
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.maxWidth"
        type="range"
        min="0"
        max="50"
        step="0.5"
      />
    </span>
    <span>
      Top Spacing :
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.marginTop"
        type="range"
        min="0"
        max="50"
        step="0.5"
      />
    </span>
    <span>
      Bottom Spacing :
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.marginBottom"
        type="range"
        min="0"
        max="50"
      />
    </span>
    <span>
      Right Spacing :
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.marginRight"
        type="range"
        min="0"
        max="50"
      />
    </span>
    <span>
      Left Spacing :
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.marginLeft"
        type="range"
        min="0"
        max="50"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: ["id", "elStyle", "cmpId", "elType"],
  data() {
    return {
      isText: false,
      isImg: false,
      editedStyle: {},
    };
  },
  created() {
    // console.log("at the el size modal");
    this.editedStyle = {
      ...this.elStyle,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      maxHeight: "",
      maxWidth: "",
      // height:'',
      // width: '',
    };
  },
  methods: {
    styleChanged() {
      this.$emit("styleChanged", this.editedStyle);
    },
  },
  computed: {
    getPos() {
      // console.log(this.$store.getters.getModalPos);
      const pos = this.$store.getters.getModalPos;
      // console.log(pos);
      return { right: pos.right + "px", top: pos.top + "px" };
    },
  },
};
</script>

<style></style>
