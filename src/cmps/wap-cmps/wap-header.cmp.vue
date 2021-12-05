<template>
  <section :style="getCurrStyle" class="wap-header" :class="cmp.theme">
    <div :style="getCurrStyle" class="logo">
      <basic-h2
        v-if="cmp.info.logo && cmp.info.logo.type === 'txt'"
        :details="{ data: cmp.info.logo, cmpId: cmp.id, containerId, elType: 'logo' }"
        :elType="'logo'"
      ></basic-h2>
      <basic-img
        v-if="cmp.info.logo && cmp.info.logo.type === 'img'"
        :details="{ data: cmp.info.logo, cmpId: cmp.id, containerId, elType: 'logo' }"
        :elType="'logo'"
      ></basic-img>
    </div>
    <div class="nav-bar">
      <basic-anchor
        @removeEl="removeEl"
        v-for="item in cmp.info.navBar"
        :key="item.details"
        :details="{ data: item, cmpId: cmp.id, containerId, elType: 'navBar' }"
        :elType="'navBar'"
      ></basic-anchor>
    </div>
  </section>
</template>

<script>
import basicH2 from "./basic-cmps/basic-h2-cmp.vue";
import basicImg from "./basic-cmps/basic-img-cmp.vue";
import basicAnchor from "./basic-cmps/basic-anchor-cmp.vue";

export default {
  components: {
    basicImg,
    basicH2,
    basicAnchor,
  },
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
  props: ["cmp", "containerId"],
  created() {
    // console.log('IM HERE', this.cmp)
  },
  computed: {
    getCurrStyle() {
      console.log("IM HERE cmpStyle", this.cmp.style);
      const style = {
        color: this.cmp.style.color,
        fontSize: this.cmp.style.fontSize + "px",
        backgroundColor: this.cmp.style.backgroundColor,
        //new size style
        height: this.cmp.style.height + "px",
        paddingTop: this.cmp.style.paddingTop + "px",
        paddingBottom: this.cmp.style.paddingBottom + "px",
        paddingLeft: this.cmp.style.paddingLeft + "px",
        paddingRight: this.cmp.style.paddingRight + "px",
      };
      return style;
    },
  },
  methods: {
    setType(type) {
      this.elType = type;
    },
    removeEl(elId, elType) {
      console.log("elId and elType", elId, elType);
      this.$store.dispatch({
        type: "removeElFromCmp",
        cmpId: this.cmp.id,
        elType: "navBar",
        elId,
      });
      this.open2();
    },
    open2() {
      this.$message({
        showClose: true,
        message: "Congrats, this is a success message.",
        type: "success",
      });
    },
  },
};
</script>

<style></style>
// navBar: [{id: 123, txt: "Work", style:{color:'',fontSize:''}}, {id:444 // //
,txt:'About',style:{color:'',fontSize:''}}, {id:333, txt:'Our // //
Team',style:{color:'',fontSize:''}}, {id:4412, // //
txt:'Press',style:{color:'',fontSize:''}},{id:44944,txt: // //
'Contact',style:{color:'',fontSize:''}}] style:{backgroundColor: '' // //
,color:'',fontSize:''} style:{color:'',fontSize:''} logo navbar txt/img As
