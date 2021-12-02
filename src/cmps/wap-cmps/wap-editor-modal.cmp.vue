<template>
  <div class="wap-editor-modal">
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
        @input="updateCmp(currWap.cmps[0].style.backgroundColor)"
        v-model="currWap.cmps[0].style.backgroundColor"
        type="color"
      />
    </span>
    <span>
      Text Color :
      <input
        @input="updateCmp(currWap.cmps[0].style.color)"
        v-model="currWap.cmps[0].style.color"
        type="color"
      />
    </span>
    <span>
      Font size :
      <input
        @input="updateCmp(currWap.cmps[0].style.fontSize)"
        v-model="currWap.cmps[0].style.fontSize"
        type="range"
      />
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isText: false,
        isImg: false,
        currWap: null,
      };
    },
    created() {
      this.currWap = this.$store.getters.getCurrWap;
      console.log(this.currWap, 'created');
    },
    methods: {
      async updateCmp(value) {
        console.log(value, 'updateCmp');
        console.log(this.currWap, 'currWap');
        try {
          const updatedWap = await this.$store.dispatch({
            type: 'updateWapStyle',
            currWap: this.currWap,
          });
          console.log(updatedWap);
          this.currWap = updatedWap;
          this.$emit('updated', updatedWap);
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
