<template>
  <div @click.stop="" class="element-editor">
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
      <input
        @drag.stop
        v-model="elStyle.color"
        @mouseup="updateStyle"
        type="color"
      />
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
      <!-- lineHeight: '',
                  fontFamily: '',
                  fontStyle: '', -->
    </span>
    <span>
      Line Height :
      <input
        @mousemove.stop=""
        @mouseup="updateStyle"
        v-model="elStyle.lineHeight"
        type="range"
        min="10"
        max="50"
        step="0.5"
      />
      <!-- lineHeight: '',
                  fontFamily: '',
                  fontStyle: '', -->
    </span>
    <span>
      Top Space :
      <input
        @mousemove.stop=""
        @mouseup="updateStyle"
        v-model="elStyle.paddingTop"
        type="range"
        min="1"
      />
      <!-- lineHeight: '',
                  fontFamily: '',
                  fontStyle: '', -->
    </span>
    <span>
      Style :
      <button @click="makeFontStyle('italic')">I</button>
      <button @click="makeFontStyle('normal')">N</button>
      <!-- lineHeight: '',
                  fontFamily: '',
                  fontStyle: '', -->
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
      <!-- lineHeight: '',
                  fontFamily: '',
                  fontStyle: '', -->
    </span>
  </div>
</template>

<script>
  import {utilService} from '../../services/util.service';
  import {ColorPicker} from 'element-ui';
  export default {
    props: ['id', 'elStyle', 'cmpId'],
    data() {
      return {
        isText: false,
        isImg: false,
        currWap: null,
        currCmpIdx: null,
      };
    },
    created() {
      // this.elStyle.fontSize = 16 + "px";
      // this.currWap = this.$store.getters.getCurrWap;
      // console.log(this.currWap, "created");
      // this.currCmpIdx = this.currWap.cmps.findIndex((cmp) => cmp.id === this.id);
      console.log('cmpId', this.cmpId);
    },
    methods: {
      makeFontStyle(value) {
        if (value === 'italic') {
          this.elStyle.fontStyle = 'italic';
          console.log(this.elStyle.fontStyle, 'font style');
          this.updateStyle();
        } else if (value === 'normal') {
          this.elStyle.fontStyle = 'normal';
          console.log(this.elStyle.fontStyle, 'font style');
          this.updateStyle();
        }
      },
      // async updateCmp() {
      //   try {
      //     const updatedWap = await this.$store.dispatch({
      //       type: "updateWapStyle",
      //       currWap: this.currWap,
      //       cmpId: this.id, // WATCHOUT
      //     });
      //   } catch (err) {
      //     console.log(err);
      //   }
      // },
      async updateStyle() {
        console.log(this.elStyle.lineHeight, 'elStyle-linehight');
        console.log(this.elStyle, 'elStyle');
        try {
          this.$store.dispatch({type: 'updateWapStyle', cmpId: this.cmpId});
        } catch (err) {
          console.log(err);
        }
      },
    },
    computed: {},
  };
</script>

<style></style>
