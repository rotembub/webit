<template>
  <section class="basic-h2">
    <h2
      @click.stop="setSelected"
      :style="getStyle"
      contenteditable
      @input="onInput($event)"
    >
      {{ details.data.txt }}
    </h2>
    <basic-el-toolbar
      @removeEl="removeEl"
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
  data() {
    return {
      isSelected: false,
      text: "",
      currWap: null,
      currCmpIdx: null,
    };
  },
  components: {
    basicElToolbar,
  },
  created() {
    this.currWap = this.$store.getters.getCurrWap;
    this.currCmpIdx = this.currWap.cmps.findIndex(
      (cmp) => cmp.id === this.details.cmpId
    );
    this.onInput = utilService.debounce(this.onInput); //using debounce
  },
  computed: {
    getStyle() {
      return {
        color: this.details.data.style.color,
        fontSize: this.details.data.style.fontSize + "px",
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
    setSelected() {
      if (this.isSelected) {
        this.isSelected = false;
        this.$store.commit({
          type: "setSelectedElement",
          id: null,
        });
      } else {
        this.isSelected = true;
        this.$store.commit({
          type: "setSelectedElement",
          id: this.details.data.id,
        });
      }
    },
    onInput(event) {
      console.log(event, "event content");
      const value = event.target.innerText;
      // this.text = value;
      //  this.details.data.txt = value;
      this.currWap.cmps[this.currCmpIdx].info.logo.txt = value;
      this.$store.dispatch({
        type: "updateWapStyle",
        currWap: this.currWap,
        cmpId: this.details.cmpId,
      });
    },
  },
};
</script>

<style></style>
