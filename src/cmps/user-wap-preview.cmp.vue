<template>
  <section @click.stop.prevent="toTheEditor" v-if="wap && imgUrl">
    <el-row>
      <el-col :span="25">
        <el-card :body-style="{padding: '0px'}">
          <img :src="require('@/assets/tempImgs/' + imgUrl)" class="image" />
          <div style="padding: 10px">
            <span>{{ wap.name }}</span>
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
    created() {},
    methods: {
      toTheEditor() {
        // this.$store.dispatch({
        //   type: 'createNewWap',
        //   templateId: this.template._id,
        // });
        this.$router.push('/editor/' + this.wap._id);
      },
    },
  };
</script>

<style></style>
