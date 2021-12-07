<template>
  <div class="editor flex" v-if="cmps">

<!--wap-header, wap-footer, wap-container
// wap-gallery (photos: {url, title,txt})
// wap-map (center,zoom,markers), 
// wap-video (url, iframe) 
// wap-social (socials) 
// wap-signup => wapService
// wap-chat
// wap-contact-us => wapService
// wap-navbar -->
    <component v-for="(cmp, idx) in wap.cmps" :is="cmp.type" :key="idx">
    </component>
    <!-- </transition-group> -->
    <!-- </draggable> -->
  </div>
</template>

<script>
// import draggable from "vuedraggable";
// import headerCmp from "../cmps/header.cmp.vue";
// import mainCmp from "../cmps/main.cmp.vue";
// import divCmp from "../cmps/div.cmp.vue";
// import { cmpsService } from "../services/wcmp.service.js";
// import { Collapse, CollapseItem } from "element-ui";

export default {
  name: "EditorDrag",
  components: {
    // headerCmp,
    // mainCmp,
    // divCmp,
    // draggable,
    // Collapse,
    // CollapseItem,
  },
  data() {
    return {
      list: [],
      divs: [
        {
          type: "div-cmp",
          data: "yep",
        },
        {
          type: "div-cmp",
          data: "some data",
        },
      ],
    };
  },
  methods: {
    async add(cmp, event) {
      console.log("add");
      console.log(event.item._underlying_vm_); // the item data
      const data = { ...event.item._underlying_vm_ }; // transfer into obj
      console.log(data);
      try {
        const savedCmp = await this.$store.dispatch({
          type: "addCmp",
          cmp: data,
        });
        console.log(`added cmp`, savedCmp);
        // const savedCmp = await cmpsService.save(data); //need to save the order
      } catch (err) {
        console.log(err);
      }
      //see the added element and add it to the model data
    },
    end(event) {
      console.log("end");
      console.log(event);
      // console.log(this.cmps);
    },
    removeItem(id) {
      console.log(id);
    },
  },
  created() {
    this.$store.dispatch({ type: "loadCmps" });
  },
  computed: {
    cmps() {
      return this.$store.getters.cmps;
    },
  },
};
</script>
