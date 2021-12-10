<template>
  <section class="basic-input">
    <input
      :style="getStyle"
      @click.stop="setSelected"
      :class="details.class"
      type="email"
      placeholder="email@example.com"
    />
    <basic-el-toolbar
      @removeEl="removeEl"
      @dupElement="dupElement"
      @styleChanged="styleChanged"
      :cmpId="getCmpId"
      v-if="isEdit"
      :elType="details.elType"
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
    };
  },
  components: {
    basicElToolbar,
  },
  computed: {
    getStyle() {
      return {
        color: this.details.data.style.color,
        backgroundColor: this.details.data.style.backgroundColor,
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
    isEdit() {
      const id = this.$store.getters.getElSelectedId;
      if (id === this.details.data.id) return true;
      return false;
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
    async updateEl(updatedEl) {
      this.$store.dispatch({
        type: "updateElement",
        cmpId: this.details.cmpId,
        elType: this.details.elType,
        elId: this.details.data.id,
        containerId: this.details.containerId,
        updatedEl,
      });
    },
    setSelected(ev) {
      const pos = {
        y: ev.target.offsetTop,
        x: ev.target.offsetLeft,
      };
      if (ev.offsetY > ev.target.offsetHeight / 2) {
        pos.y = ev.target.offsetTop + ev.target.offsetHeight + 5;
      } else pos.y = ev.target.offsetTop - 30;
      if (ev.clientX > window.innerWidth - 150)
        pos.x = ev.target.offsetLeft - 50;
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
      let updatedEl = JSON.parse(JSON.stringify(this.details.data));
      updatedEl.style = style;
      this.updateEl(updatedEl);
    },
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
  },
};
</script>

<style>
</style>