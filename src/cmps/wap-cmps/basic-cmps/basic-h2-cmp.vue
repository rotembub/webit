<template>
  <section class="basic-h2">
    <h2
      @click.stop="isEdit = !isEdit"
      :style="getStyle"
      contenteditable
      @input="onInput($event)"
    >
      {{ details.data.txt }}
    </h2>
    <basic-el-toolbar
      @removeEl="removeEl"
      v-if="isEdit"
      :elStyle="details.data.style"
    ></basic-el-toolbar>
  </section>
</template>

<script>
  import basicElToolbar from '../../editor-cmps/basic-el-toolbar.cmp.vue';
  export default {
    props: ['details'],
    data() {
      return {
        isEdit: false,
        text: '',
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
    },
    computed: {
      getStyle() {
        return {
          color: this.details.data.style.color,
          fontSize: this.details.data.style.fontSize + 'px',
        };
      },
    },
    methods: {
      removeEl() {
        this.$store.dispatch({
          type: 'removeElFromCmp',
          cmpId: this.details.cmpId,
          elType: this.details.elType,
          elId: this.details.data.id,
          containerId: this.details.containerId,
        });
      },
      onInput(event) {
        console.log(event, 'event content');
        const value = event.target.innerText;
        // this.text = value;
        //  this.details.data.txt = value;
        this.currWap.cmps[this.currCmpIdx].info.logo.txt = value;
        this.$store.dispatch({
          type: 'updateWapStyle',
          currWap: this.currWap,
          cmpId: this.details.cmpId,
        });
      },
    },
  };
</script>

<style></style>
