<template>
  <section class="basic-btn">
    <!-- on click here refresh the page need to fix -->
    <button
      @click.stop.prevent="setSelected"
      contenteditable
      @input.prevent="onInput($event)"
      :style="getStyle"
    >
      {{ details.data.txt }}
    </button>
    <basic-el-toolbar
      @removeEl="removeEl"
      @dupElement="dupElement"
      :cmpId="getCmpId"
      v-if="isEdit"
      :elStyle="details.data.style"
    ></basic-el-toolbar>
  </section>
</template>

<script>
import basicElToolbar from "../../editor-cmps/basic-el-toolbar.cmp.vue";
import { utilService } from "../../../services/util.service.js";

export default {
  props: ["details"],
  components: {
    basicElToolbar,
  },
  data() {
    return {
      isSelected: false,
    };
  },
  created() {
    this.onInput = utilService.debounce(this.onInput); //using debounce
  },
  computed: {
    getStyle() {
      return {
        backgroundColor: this.details.data.style.backgroundColor,
        color: this.details.data.style.color,
        fontSize: this.details.data.style.fontSize + "px",
        lineHeight: this.details.data.style.lineHeight + "px",
        paddingTop: this.details.data.style.paddingTop + "%",
        paddingBottom: this.details.data.style.paddingBottom + "%",
        paddingRight: this.details.data.style.paddingRight + "%",
        paddingLeft: this.details.data.style.paddingLeft + "%",
        fontStyle: this.details.data.style.fontStyle,
        fontFamily: this.details.data.style.fontFamily,
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
    onInput(event) {
      const value = event.target.innerText;
      this.details.data.txt = value;
      this.$store.dispatch({
        type: "updateWapStyle",
        currWap: this.currWap,
        cmpId: this.details.cmpId,
      });
    },
    setSelected(ev) {
      const pos = {
        y: ev.target.offsetTop,
        x: ev.target.offsetLeft,
      };
      // console.log("Ypressed:", ev.offsetY, "Xpressed:", ev.offsetX,"targetHeight",ev.target.offsetHeight,"offseTtop:",ev.target.offsetTop,"calc:",ev.target.offsetTop + ev.target.offsetHeight/2);
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
  },
};
</script>

<style></style>
