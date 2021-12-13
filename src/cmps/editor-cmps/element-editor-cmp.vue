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
    <!-- <span @click.stop>
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
    </span> -->
    <div>
      <span>Font size</span>
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.fontSize"
        type="range"
        min="10"
        max="120"
        step="1"
      />
    </div>
    <div>
      <span> Line height</span>
      <input
        @mousemove.stop=""
        @mouseup="styleChanged"
        v-model="editedStyle.lineHeight"
        type="range"
        min="10"
        max="100"
        step="0.5"
      />
    </div>
    <div class="font-box">
      <span>Style</span>
      <!-- <button >I</button> -->

      <div class="font-box-inner">
        <i @click="makeFontStyle('italic')" class="fas fa-italic"></i>
        <!-- <button >N</button> -->
        <i @click="makeFontStyle('normal')" class="fas fa-font"></i>
        <i @click="boldFont('bold')" class="fas fa-bold"></i>
        <!-- <button >B</button> -->
      </div>
    </div>
    <div>
      <span>Font </span>
      <el-select
        @change="styleChanged"
        v-model="editedStyle.fontFamily"
        placeholder="Select"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <!-- <select>
        <option value="Poppins">Poppins</option>
        <option value="Opensans">Opensans</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Fantasy">Fantasy</option>
      </select> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'elStyle', 'cmpId'],
  data() {
    return {
      isText: false,
      isImg: false,
      boldToggle: false,
      editedStyle: {},
      options: [
        {
          value: 'Poppins',
          label: 'Poppins',
        },
        {
          value: 'Opensans',
          label: 'Opensans',
        },
        {
          value: 'Helvetica',
          label: 'Helvetica',
        },
        {
          value: 'Montserrat',
          label: 'Montserrat',
        },
        {
          value: 'Fantasy',
          label: 'Fantasy',
        },
      ],
    }
  },
  created() {
    // console.log("at the el font modal");
    this.editedStyle = { ...this.elStyle }
  },
  methods: {
    makeFontStyle(value) {
      if (value === 'bold' && !this.editedStyle.fontWeight)
        this.editedStyle.fontWeight = value
      else if (value === 'bold' && this.editedStyle.fontWeight)
        this.editedStyle.fontWeight = null
      else this.editedStyle.fontStyle = value
      this.styleChanged()
    },
    boldFont() {
      if (this.boldToggle) this.editedStyle.fontWeight = 'bold'
      else this.editedStyle.fontWeight = 'initial'
      this.boldToggle = !this.boldToggle
      // console.log(this.editedStyle);
      this.styleChanged()
    },
    styleChanged() {
      this.$emit('styleChanged', this.editedStyle)
    },
  },
  computed: {
    getPos() {
      console.log(this.$store.getters.getModalPos)
      const pos = this.$store.getters.getModalPos
      // console.log(pos);
      return { right: pos.right + 'px', top: pos.top + 'px' }
    },
  },
}
</script>

<style></style>
style: { background: 'url()', color: '', backgroundColor: '', fontSize: '',
paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '',
lineHeight: '', fontFamily: '', fontStyle: '', },
