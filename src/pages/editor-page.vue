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
    return {};
  },
  created() {
    const id = this.wapId;
    // console.log(id);
    if (!id) this.$store.dispatch({ type: "getEmptyWap" });
    else this.$store.dispatch({ type: "setCurrWap", wapId: id });
  },
  computed: {
    wapId() {
      return this.$route.params.wapId;
    },
  },
};
</script>

<style></style>
