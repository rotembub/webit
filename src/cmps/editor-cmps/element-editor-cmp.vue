<template>
  <div @click.stop="" class="element-editor-cmp">
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
    <!-- ////////////////////////////////// -->
    <span>
      BackgroundColor :
      <input
        @input="updateCmp(currWap.cmps[currCmpIdx].style.backgroundColor)"
        v-model="currWap.cmps[currCmpIdx].style.backgroundColor"
        type="color"
      />
    </span>
    <span>
      Text Color :
      <input
        @input="updateCmp(currWap.cmps[currCmpIdx].style.color)"
        v-model="currWap.cmps[currCmpIdx].style.color"
        type="color"
      />
    </span>
    <span>
      Font size :
      <input
        @input="updateCmp(currWap.cmps[currCmpIdx].style.fontSize)"
        v-model="currWap.cmps[currCmpIdx].style.fontSize"
        type="range"
      />
    </span>
  </div>
</template>

<script>
  import {ColorPicker} from 'element-ui';
  export default {
    props: ['id'],
    data() {
      return {
        // style{

        // }
        // fontSize
        // color,
        // bgc:

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
      async updateCmp(value) {
        console.log(this.currCmpIdx);
        console.log(value, 'updateCmp');
        console.log(this.currWap, 'currWap');
        try {
          const updatedWap = await this.$store.dispatch({
            type: 'updateWapStyle',
            currWap: this.currWap,
            cmpId: this.id, // WATCHOUT
          });
          // console.log(updatedWap);
          // this.currWap = updatedWap;
          // this.$emit("updated", updatedWap);
        } catch (err) {
          console.log(err);
        }
      },
    },
    computed: {
      setWap() {
        console.log(this.$store.getters.getCurrWap, 'store wap');
        return this.$store.getters.getCurrWap;
      },
    },
  };
</script>

<style></style>