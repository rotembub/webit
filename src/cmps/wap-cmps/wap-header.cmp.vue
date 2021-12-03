<template>
  <section :style="getCurrStyle" class="wap-header" :class="cmp.theme">
    <!-- <div v-for="(item, idx) in cmp.info" :key="'k' + idx">
      <p>{{ item }}</p> -->
    <!-- </div> -->
    <!-- :style="{ fontSize: cmpStyle.fontSize }" -->
    <div :style="getCurrStyle" class="logo">
      <h2 contenteditable v-if="cmp.info.logo && cmp.info.logo.type === 'txt'">
        {{ cmp.info.logo.txt }}
      </h2>
      <img
        v-if="cmp.info.logo && cmp.info.logo.type === 'img'"
        :src="require('@/assets/wap-imgs/' + cmp.info.logo.url)"
        alt=""
      />
    </div>
    <div class="nav-bar">
      <a v-for="(item, idx) in cmp.info.navBar" :key="'k' + idx" href=""
        >{{ item.txt }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cmpStyle: null,

      // {
      //   color: this.cmp.style.color,
      //   fontSize: this.cmp.style.fontSize + 'px',
      //   backgroundColor: this.cmp.style.backgroundColor,
      // },
    };
  },
  props: ["cmp"],
  created() {
    // console.log('IM HERE', this.cmp)
  },
  computed: {
    getCurrStyle() {
      console.log("IM HERE", this.cmp.style);
      console.log("color", this.cmp.style.color);
      const style = {
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px",
        backgroundColor: this.cmp.style.backgroundColor,
      };
      
      return style;
    },
  },
  methods: {
    test() {
      console.log("try");
    },
  },
};
</script>

<style></style>
navBar: [{id: 123, txt: "Work", style:{color:'',fontSize:''}}, {id:444 ,txt:'About',style:{color:'',fontSize:''}}, {id:333, txt:'Our Team',style:{color:'',fontSize:''}}, {id:4412, txt:'Press',style:{color:'',fontSize:''}},{id:44944,txt: 'Contact',style:{color:'',fontSize:''}}]

style:{backgroundColor: '' ,color:'',fontSize:''}
style:{color:'',fontSize:''}
logo      navbar
txt/img      As

