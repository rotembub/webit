<template>
  <section class="editor-page flex">
    <cmp-picker class="cmp-picker" />
    <wap-builder class="wap-builder" />
  </section>
</template>

<script>
import wapBuilder from "../cmps/wap-builder.cmp.vue";
import cmpPicker from "../cmps/cmp-picker/cmp-picker.cmp.vue";
export default {
  components: {
    wapBuilder,
    cmpPicker,
  },
  data() {
    return {
      wapToEdit: null,
    };
  },
  created() {
    async () => {
      try {
        await this.$store.dispatch({ type: "setCurrWap", wapId: this.wapId });
        console.log("done");
        this.wapToEdit = JSON.parse(JSON.stringify(wap));
      } catch (err) {
        console.log(err);
      }
    };
  },
  computed: {
    wapId() {
      return this.$route.params.wapId;
    },
  },
};
</script>

<style></style>
