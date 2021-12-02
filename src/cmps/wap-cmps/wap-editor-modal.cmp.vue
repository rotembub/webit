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
        @input="updateCmp($event, currWap.cmps[0].style.backgroundColor)"
        v-model="currWap.cmps[0].style.backgroundColor"
        type="color"
      />
    </span>
    <span>
      Text Color :
      <input
        @input="updateCmp($event, currWap.cmps[0].style.color)"
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
      currWap: this.setWap,
    }
  },
  created() {
    this.currWap = this.$store.getters.getCurrWap
    console.log(this.currWap)
  },
  methods: {
    updateCmp(ev, value) {
      console.log(value)

      this.$store.dispatch({ type: 'updateWapStyle', currWap: this.currWap })
    },
  },
  computed: {
    setWap() {
      return this.$store.getters.getCurrWap
    },
  },
}
</script>

<style></style>
