<template>
  <div @click.stop="" class="wap-editor-modal">
    <span>
      Height :
      <input
        type="range"
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.height"
      />
      <!-- add on mouse move , fix the problem when the height become too small, min,max,step,value,-->
    </span>
    <span>
      Top spacing :
      <input
        type="range"
        min="30"
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.paddingTop"
      />
    </span>
    <!-- adding padding 2em from the start works good with paddingTop/ archit headr dont have it -->
    <!-- can change the min value later -->
    <span>
      Bottom spacing :
      <input
        type="range"
        min="30"
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.paddingBottom"
      />
    </span>
    <span>
      Left spacing :
      <input
        type="range"
        min="30"
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.paddingLeft"
      />
    </span>
    <span>
      Right spacing :
      <input
        type="range"
        min="30"
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.paddingRight"
      />
    </span>
    <!-- ////////////////////////////////// -->
    <!-- <span>
      BackgroundColor :
      <input
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.backgroundColor"
        type="color"
      />
    </span>
    <span>
      Text Color :
      <input
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.color"
        type="color"
      />
    </span> -->
    <!-- only background color edit on cmps -->
    <!-- <span>
      Font size :
      <input
        @input="updateCmp"
        v-model="currWap.cmps[currCmpIdx].style.fontSize"
        type="range"
      />
    </span> -->
  </div>
</template>

<script>
  import {ColorPicker} from 'element-ui';
  export default {
    props: ['id'],
    data() {
      return {
        isText: false,
        isImg: false,
        currWap: null,
        currCmpIdx: null,
      };
    },
    created() {
      this.currWap = this.$store.getters.getCurrWap;
      console.log(this.currWap, 'created');
      this.currCmpIdx = this.currWap.cmps.findIndex(
        (cmp) => cmp.id === this.id
      );
    },
    methods: {
      async updateCmp() {
        try {
          const updatedWap = await this.$store.dispatch({
            type: 'updateWapStyle',
            currWap: this.currWap,
            cmpId: this.id, // WATCHOUT
          });
        } catch (err) {
          console.log(err);
        }
      },
    },
    computed: {},
  };
</script>

<style></style>
