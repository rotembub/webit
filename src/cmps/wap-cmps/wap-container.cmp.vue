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


		{
			"id": "wc03",
			"type": "wap-container",
			"info": {
				"dir": "row",
				"cmps": [
					{},
					{}
				]
			},
			"theme": "theme-container-base",
			"style": {
			}