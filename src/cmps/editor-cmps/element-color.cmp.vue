<template>
  <div @click.stop="" :style="getPos" class="element-editor element-size">
    <span @click.stop>
      Text Color :
      <el-color-picker
        @drag.stop
        v-model="editedStyle.color"
        @change="styleChanged"
      ></el-color-picker>
    </span>
    <span @click.stop>
      Background Color :
      <el-color-picker
        @drag.stop
        v-model="editedStyle.backgroundColor"
        @change="styleChanged"
      ></el-color-picker>
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
      editedStyle: {},
    };
  },
  created() {
    // console.log("at the el size modal");
    this.editedStyle = {
      ...this.elStyle,
      // marginTop: "",
      // marginRight: "",
      // marginBottom: "",
      // marginLeft: "",
    };
  },
  methods: {
    styleChanged() {
      this.$emit("styleChanged", this.editedStyle);
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