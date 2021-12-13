Dynamic component
<template>
  <div>
    <!--Dynamic component -->
    <section class="wap-dynamic" @click="setSelected">
      <slot v-if="isEdit"></slot>
      <component
        :cmp="cmp"
        :is="cmp.type"
        :key="cmp.id"
        :name="cmp.id"
      ></component>
    </section>

    <!--Container example -->
    <section v-if="cmp" class="wap-container">
      <Container
        :style="getCurrStyle"
        :orientation="getDirection"
        :class="cmp.theme"
        :auto-scroll-enabled="true"
        group-name="4"
        :get-child-payload="getChildPayload1"
        @drop="onDrop('4', $event)"
      >
        <Draggable
          v-for="innerCmp in cmp.info.cmps"
          :key="innerCmp.id"
          :class="innerCmp.theme"
        >
          <component
            :cmp="innerCmp"
            :is="innerCmp.type"
            :name="innerCmp.id"
            :containerId="cmp.id"
          >
          </component>
        </Draggable>
      </Container>
    </section>

    <!--Card example-->
    <section class="wap-card" :style="getCurrStyle" :class="cmp.theme">
      <div class="text-block">
        <template v-if="cmp.info.title">
          <basic-h1
            v-for="item in cmp.info.title"
            :key="item.id"
            :details="{ data: item, cmpId: cmp.id, containerId, elType }"
          ></basic-h1>
        </template>
        <template v-if="cmp.info.subtitle">
          <basic-paragraph
            v-for="item in cmp.info.subtitle"
            :key="item.id"
            :details="{ data: item, cmpId: cmp.id, containerId, elType }"
          ></basic-paragraph>
        </template>
        <template v-if="cmp.info.buttons">
          <basic-btn
            v-for="item in cmp.info.buttons"
            :key="item.id"
            :details="{ data: item, cmpId: cmp.id, containerId, elType }"
          ></basic-btn>
        </template>
      </div>
      <template v-if="cmp.info.imgs">
        <basic-img
          v-for="img in cmp.info.imgs"
          :key="img.id"
          :details="{ data: img, cmpId: cmp.id, containerId, elType }"
        ></basic-img>
      </template>
    </section>
  </div>
</template>





<script>

const exampleJSON = {
  id: utilService.makeId(4),
  type: 'wap-container',
  screenshotImg: 'feliciano-examples/feliciano-gallery.png',
  category: 'Galleries',
  info: {
    dir: 'horizontal',
    toggle: true,
    cmps: [
      {
        id: utilService.makeId(4),
        type: 'wap-img',
        info: {
          imgs: [
            {
              id: utilService.makeId(4),
              url: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80',
              style: {
                background: 'url()',
                color: '',
                backgroundColor: '',
                fontSize: '',
                paddingRight: '',
                paddingTop: '',
                paddingBottom: '',
                paddingLeft: '',
                lineHeight: '',
                fontFamily: '',
                fontStyle: '',
              },
            },
          ],
        },
        theme: 'wap-img-gallery-feli',
        style: {
          background: 'url()',
          color: '',
          backgroundColor: '',
          fontSize: '',
          paddingRight: '',
          paddingTop: '',
          paddingBottom: '',
          paddingLeft: '',
          lineHeight: '',
          fontFamily: '',
          fontStyle: '',
        },
      },
      {
      id: utilService.makeId(4),
      type: 'wap-text',
      screenshotImg: 'feliciano-examples/chefs-text.png',
      category: 'Text',
      info: {
        title: [
          {
            id: utilService.makeId(4),
            txt: 'Our Master Chefs',
            style: {
              background: '',
              color: '',
              fontFamily: 'Poppins',
              fontStyle: '50px',
            },
          },
        ],
        subtitle: [
          {
            id: utilService.makeId(4),
            txt: 'And their specialties...',
            style: {
              background: '',
              color: '#c8a97e',
              fontFamily: 'GreatVibes',
              fontStyle: '',
            },
          },
        ],
      },
      theme: 'wap-feliciano-catering',
      style: {
        background: ``,
        color: '',
        backgroundColor: '',
        fontSize: '',
        paddingRight: '',
        paddingTop: '',
        paddingBottom: '',
        paddingLeft: '',
        lineHeight: '',
        fontFamily: '',
        fontStyle: '',
      },
    },
    ],
  },
  theme: 'wap-gallery-feli',
  style: {
    background: 'url()',
    color: '',
    backgroundColor: '',
    fontSize: '',
    paddingRight: '',
    paddingTop: '',
    paddingBottom: '',
    paddingLeft: '',
    lineHeight: '',
    fontFamily: '',
    fontStyle: '',
  },
},



</script>