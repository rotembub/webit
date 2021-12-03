<template>
  <section v-if="cmp" class="wap-container" :class="cmp.info.dir">
    <!--Need to see if its fits or not as a class  -->
    <wap-dynamic
      v-for="cmp in cmp.info.cmps"
      :cmp="cmp"
      :is="cmp.type"
      :key="cmp.id"
    >
    </wap-dynamic>
  </section>
</template>

<script>
import wapDynamic from "./wap-dynamic.cmp.vue";
export default {
  components: { wapDynamic },
  props: ["cmp"],
};
</script>

knows how to get other CMPs and render them 1 by 1 with a unique class supplied to it