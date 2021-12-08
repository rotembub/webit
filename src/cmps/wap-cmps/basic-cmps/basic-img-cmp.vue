<template>
  <section class="basic-img" :style="getStyle">
    <img
      v-if="!isUploaded"
      @click.stop="setSelected"
      :src="require('@/assets/wap-imgs/' + details.data.url)"
      alt=""
    />
    <img
      v-else
      @click.stop="setSelected"
      :src="details.data.url"
      alt=""
    />
    <basic-el-toolbar
      @removeEl="removeEl"
      @dupElement="dupElement"
      @styleChanged="styleChanged"
      @onSaveImg="saveImg"
      v-if="isEdit"
      :cmpId="getCmpId"
      :elStyle="details.data.style"
    ></basic-el-toolbar>
  </section>
</template>

<script>
import basicElToolbar from "../../editor-cmps/basic-el-toolbar.cmp.vue";
export default {
  props: ["details"],
  data() {
    return {
      isSelected: false,
      isUploaded: false,
    };
  },
  components: {
    basicElToolbar,
  },
  computed: {
    isEdit() {
      const id = this.$store.getters.getElSelectedId;
      if (id === this.details.data.id) return true;
      return false;
    },
    getStyle() {
      return {
        color: this.details.data.style.color,
        fontSize: this.details.data.style.fontSize + "px",
        lineHeight: this.details.data.style.lineHeight + "px",
        paddingTop: this.details.data.style.paddingTop + "rem",
        paddingBottom: this.details.data.style.paddingBottom + "rem",
        paddingRight: this.details.data.style.paddingRight + "rem",
        paddingLeft: this.details.data.style.paddingLeft + "rem",
        fontStyle: this.details.data.style.fontStyle,
        fontFamily: this.details.data.style.fontFamily,
        fontWeight: this.details.data.style.fontWeight,
        marginTop: this.details.data.style.marginTop + "rem",
        marginBottom: this.details.data.style.marginBottom + "rem",
        marginRight: this.details.data.style.marginRight + "rem",
        marginLeft: this.details.data.style.marginLeft + "rem",
      };
    },
    getCmpId() {
      if (this.details.containerId) return this.details.containerId;
      return this.details.cmpId;
    },
  },
  methods: {
    removeEl() {
      this.$store.dispatch({
        type: "removeElFromCmp",
        cmpId: this.details.cmpId,
        elType: this.details.elType,
        elId: this.details.data.id,
        containerId: this.details.containerId,
      });
    },
    dupElement() {
      this.$store.dispatch({
        type: "dupElement",
        cmpId: this.details.cmpId,
        elType: this.details.elType,
        elId: this.details.data.id,
        containerId: this.details.containerId,
      });
    },
    setSelected(ev) {
      console.log("event", ev);
      const pos = {
        y: ev.target.offsetTop,
        x: ev.target.offsetLeft,
      };
      if (ev.offsetY > ev.target.offsetHeight / 2) {
        pos.y = ev.target.offsetTop + ev.target.offsetHeight;
      } else pos.y = ev.target.offsetTop - 16;
      console.log(pos);
      if (this.isSelected) {
        this.isSelected = false;
        this.$store.commit({
          type: "setSelectedElement",
          id: null,
          pos: null,
        });
      } else {
        this.isSelected = true;
        this.$store.commit({
          type: "setSelectedElement",
          id: this.details.data.id,
          pos,
        });
      }
    },
    styleChanged(style) {
      console.log(style);
      // this.details.data.style = style;
      this.updateElStyle(style);
      // this.updateStyle();
    },
    // async updateStyle() {
    //   console.log("updating style of an element");
    //   const id = this.getCmpId;
    //   try {
    //     this.$store.dispatch({ type: "updateWapStyle", cmpId: id });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async updateElStyle(style) {
      this.$store.dispatch({
        type: "updateElementStyle",
        cmpId: this.details.cmpId,
        elType: this.details.elType,
        elId: this.details.data.id,
        containerId: this.details.containerId,
        style,
      });
    },
    saveImg(url) {
      console.log("URL RECEIVED", url);
      this.isUploaded = true;
      this.details.data.url = url;
      this.updateStyle();
    },
  },
};
</script>

<style>
</style>