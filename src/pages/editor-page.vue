<template>
  <section>
    <!-- <editor-header></editor-header> -->
    <section @mousemove="moveMouse($event)" class="editor-page flex">
      <cmp-picker @onMobileState="onMobile" :class="classForPicker" />
      <wap-builder :class="classForBuilder" />

      <div
        v-if="client"
        :style="{top: client.y + 'px', left: client.x + 'px'}"
        class="cursor"
      >
        <i class="fas fa-mouse-pointer"></i>
      </div>
    </section>
  </section>
</template>

<script>
  import wapBuilder from '../cmps/wap-builder.cmp.vue';
  import cmpPicker from '../cmps/cmp-picker/cmp-picker.cmp.vue';
  import {socketService} from '../services/socket.service.js';
  // import editorHeader from '../cmps/editor-header.cmp.vue'

  export default {
    components: {
      wapBuilder,
      cmpPicker,
      // editorHeader,
    },
    data() {
      return {
        client: null,
      };
    },
    async created() {
      const id = this.wapId;
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ I WAS CRETEAD!!!', id);
      if (!id) await this.$store.dispatch({type: 'getEmptyWap'});
      else await this.$store.dispatch({type: 'setCurrWap', wapId: id});
      socketService.emit('wap id', this.$store.getters.getCurrWap._id);
      socketService.on('wap updated', (wap) => {
        console.log('wap from socket: ', wap);
        this.updateWap(wap, 'socket');
      });
      socketService.on('mousemove', (clientXY) => {
        // console.log('wap from socket: ', clientXY);
        this.client = clientXY;
      });
    },
    watch: {
      '$store.getters.getCurrWap'(wap) {
        console.log('--------------------------> EVENT TYPE', wap.updateEvent);
        if (!wap.updateEvent) {
          socketService.emit('wap updated', wap);
        } else {
          console.log('SOCKET WAP', wap);
        }
      },
    },
    methods: {
      moveMouse(ev) {
        // console.log(ev)
        let clientXY = {
          x: ev.clientX,
          y: ev.clientY,
        };
        socketService.emit('mousemove', clientXY);
      },
      updateWap(wap, eventType) {
        console.log(wap, 'WAP');
        this.$store.dispatch({type: 'updateWap', wap, eventType});
      },
      onMobile(str) {
        this.$store.dispatch({type: 'isMobile', str});
      },
    },
    computed: {
      oldWap() {
        // const isFullScreen =
        this.$store.getters.getCurrWap;
      },
      classForPicker() {
        // const isFullScreen =
        if (this.$store.getters.isFullScreen) return 'cmp-picker-fullscreen';
        else return 'cmp-picker';
      },
      classForBuilder() {
        const isFullScreen = this.$store.getters.isFullScreen;
        const isMobile = this.$store.getters.isMobile;
        console.log(isMobile);

        let classForBuilder = '';

        if (isFullScreen) classForBuilder = 'wap-builder-fullscreen';
        if (isMobile) classForBuilder = 'wap-builder-mobile';
        else classForBuilder = 'wap-builder';
        return classForBuilder;
      },
      wapId() {
        return this.$route.params.wapId;
      },
    },
  };
</script>

<style></style>
