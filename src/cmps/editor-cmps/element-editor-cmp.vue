<template>
  <div @click.stop="" :style="getPos" class="element-editor">
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
      <el-color-picker @drag.stop v-model="elStyle.color" @change="updateStyle"></el-color-picker>
      <!-- <input
        @drag.stop
        v-model="elStyle.color"
        @mouseup="updateStyle"
        type="color"
      /> -->
    </span>
        <span @click.stop>
      Background Color :
      <el-color-picker @drag.stop v-model="elStyle.backgroundColor" @change="updateStyle"></el-color-picker>
      <!-- <input
        @drag.stop
        v-model="elStyle.backgroundColor"
        @mouseup="updateStyle"
        type="color"
      /> -->
    </span>
    <span>
      Font size :
      <input
        @mousemove.stop=""
        @mouseup="updateStyle"
        v-model="elStyle.fontSize"
        type="range"
        min="10"
        max="50"
        step="1"
      />
    </span>
    <span>
      Line Height :
      <input
        @mousemove.stop=""
        @mouseup="updateStyle"
        v-model="elStyle.lineHeight"
        type="range"
        min="10"
        max="100"
        step="0.5"
      />
    </span>
    <span>
      Style :
      <button @click="makeFontStyle('italic')">I</button>
      <button @click="makeFontStyle('normal')">N</button>
      <button @click="boldFont('bold')">B</button>
    </span>
    <span>
      Font :
      <select @change="updateStyle" v-model="elStyle.fontFamily">
        <option value="Poppins">Poppins</option>
        <option value="Opensans">Opensans</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Fantasy">Fantasy</option>
      </select>
    </span>
  </div>
</template>

<script>
import { utilService } from "../../services/util.service";
import { ColorPicker } from "element-ui";
export default {
  props: ["id", "elStyle", "cmpId"],
  data() {
    return {
      isText: false,
      isImg: false,
      currWap: null,
      currCmpIdx: null,
      boldToggle: false,
    };
  },
  created() {
    // this.elStyle.fontSize = 16 + "px";
    // this.currWap = this.$store.getters.getCurrWap;
    // console.log(this.currWap, "created");
    // this.currCmpIdx = this.currWap.cmps.findIndex((cmp) => cmp.id === this.id);
    console.log("this.pos OF MODAL :", this.pos);
    console.log("cmpId", this.cmpId);
  },
  methods: {
    makeFontStyle(value) {
      if (value === "bold" && !this.elStyle.fontWeight)
        this.elStyle.fontWeight = value;
      else if (value === "bold" && this.elStyle.fontWeight)
        this.elStyle.fontWeight = null;
      else this.elStyle.fontStyle = value;
      this.updateStyle();
    },
    boldFont() {
      if (this.boldToggle) this.elStyle.fontWeight = "bold";
      else this.elStyle.fontWeight = "initial";
      this.boldToggle = !this.boldToggle;
      console.log(this.elStyle);
      this.updateStyle();
    },

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