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
    <span>
      Font size :
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.fontSize"
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
        @mouseup="styleChanged"
        v-model="editedStyle.lineHeight"
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
      <select @change="styleChanged" v-model="editedStyle.fontFamily">
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
export default {
  props: ["id", "elStyle", "cmpId"],
  data() {
    return {
      isText: false,
      isImg: false,
      boldToggle: false,
      editedStyle: {},
    };
  },
  created() {
    console.log("at the el font modal");
    this.editedStyle = { ...this.elStyle };
  },
  methods: {
    makeFontStyle(value) {
      if (value === "bold" && !this.editedStyle.fontWeight)
        this.editedStyle.fontWeight = value;
      else if (value === "bold" && this.editedStyle.fontWeight)
        this.editedStyle.fontWeight = null;
      else this.editedStyle.fontStyle = value;
      this.styleChanged();
    },
    boldFont() {
      if (this.boldToggle) this.editedStyle.fontWeight = "bold";
      else this.editedStyle.fontWeight = "initial";
      this.boldToggle = !this.boldToggle;
      console.log(this.editedStyle);
      this.styleChanged();
    },
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