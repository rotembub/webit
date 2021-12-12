<template>
  <section class="img-upload element-editor">
    <div class="linkable" v-if="!isLoading" @click.stop="">
      <label class="clickable">
        <!-- <img :src="require('../assets/uploadimg.png')" alt="" /> -->
        Upload
        <span @click.stop=""><i class="fas fa-file-upload"></i></span>
        <input
          type="file"
          id="uploadImg"
          @click.stop=""
          @change="onUploadImg"
          hidden
        />
      </label>
      <el-input
        @click.stop.prevent=""
        v-model="link"
        placeholder="Link"
      ></el-input>
      <el-button @click.stop="linkImg">Link</el-button>
      <!-- <button>Link</button> -->
    </div>
    <img
      v-else
      :src="require('../../assets/element-editor/loading.gif')"
      alt=""
    />
  </section>
</template>

<script>
import { uploadImg } from '../../services/img-upload.service.js'

export default {
  data() {
    return {
      isLoading: false,
      link: '',
    }
  },
  methods: {
    async onUploadImg(ev) {
      try {
        this.isLoading = true
        let res = await uploadImg(ev)
        // console.log(res);
        this.$emit('onSaveImg', res.url)
        this.isLoading = false
      } catch (err) {
        console.log(err)
      }
    },
    linkImg() {
      this.$emit('onSaveImg', this.link)
    },
  },
}
</script>
