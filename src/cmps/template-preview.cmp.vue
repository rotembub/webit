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
  <section @click.stop.prevent="toTheEditor" v-if="wap && imgUrl">
    <el-row>
      <el-col :span="25">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="require('@/assets/tempImgs/' + imgUrl)" class="image" />
          <div style="padding: 14px">
            <!-- <span>{{ wap.name }}</span> -->
            <div class="bottom clearfix"></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  props: ['wap', 'imgUrl'],
  created() {
    // console.log('created preview')
  },
  methods: {
    toTheEditor() {
      this.$router.push('/editor/' + this.wap._id)
    },
  },
}
</script>

<style></style>
