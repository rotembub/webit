<template>
  <!-- <section
    v-if="wap && imgUrl"
    class="template-preview"
    @click.stop.prevent="toTheEditor"
  >
    <h4>preview</h4>
    <div>wap id: {{ wap._id }}</div>
    <img :src="require('@/assets/tempImgs/' + imgUrl)" alt="" />

  </section> -->

  <section @click.stop.prevent="toTheEditor" v-if="template && imgUrl">
    <el-row>
      <el-col :span="25">
        <el-card
          :body-style="{ padding: '0px' }"
          :class="!template.name && 'color-change-2x add-new'"
        >
          <img
            v-if="template.name"
            :src="require('@/assets/tempImgs/' + imgUrl)"
            class="image"
          />
          <div style="padding: 10px" :class="!template.name && 'add-new-text'">
            <span>{{ template.name || 'Start from Scratch' }}</span>
            <div class="bottom clearfix"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  props: ['template', 'imgUrl'],
  created() {
    // console.log('created preview')
  },
  methods: {
    async toTheEditor() {
      this.$emit('onCreateWap', this.template._id)
    },
  },
}
</script>

<style></style>
