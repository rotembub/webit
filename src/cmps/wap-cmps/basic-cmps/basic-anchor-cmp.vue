<template>
  <section class="basic-anchor">
    <a
      @click.stop="setSelected"
      contenteditable
      @input="onInput($event)"
      :style="getStyle"
      >{{ details.data.txt }}</a
    >
    <basic-el-toolbar
      @removeEl="removeEl"
      :cmpId="getCmpId"
      v-if="isEdit"
      :elStyle="details.data.style"
    ></basic-el-toolbar>
    <!-- <wap-tool-bar v-if="isEdit" :style="details.style"></wap-tool-bar> -->
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
        color: this.details.data.style.color,
        fontSize: this.details.data.style.fontSize + "px",
        // backgroundColor: this.cmp.style.backgroundColor,
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
      // this.$emit("removeEl", this.details.id, this.elType);
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
      console.log("event", ev);
      console.log("Ypressed:", ev.offsetY, "Xpressed:", ev.offsetX,"targetHeight",ev.target.offsetHeight,"offseTtop:",ev.target.offsetTop,"calc:",ev.target.offsetTop - ev.target.offsetHeight/2);
      const pos = {
        y: ev.target.offsetTop + ev.target.offsetHeight,
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
  },
};
</script>

<style></style>
