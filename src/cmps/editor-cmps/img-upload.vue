<template>
  <section  class="img-upload element-editor">
    <label class="clickable" v-if="!isLoading">
      <!-- <img :src="require('../assets/uploadimg.png')" alt="" /> -->
      <span @click.stop="">click here</span>
      <input type="file" id="uploadImg" @click.stop="" @change="onUploadImg" hidden />
    </label>
    <img
      v-else
      :src="require('../../assets/element-editor/loading.gif')"
      alt=""
    />
  </section>
</template>

<script>
import { uploadImg } from "../../services/img-upload.service.js";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async onUploadImg(ev) {
      try {
        this.isLoading = true;
        let res = await uploadImg(ev);
        // console.log(res);
        this.$emit("onSaveImg", res.url);
        this.isLoading = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>