<template>
  <section class="wap-card" :class="cmp.theme">
    <h1 v-if="cmp.info.title">{{ cmp.info.title }}</h1>
    <p v-if="cmp.info.subtitle">{{ cmp.info.subtitle }}</p>

    <div v-for="(card, idx) in cmp.info.cards" :key="'k' + idx" class="card">
      <h3 v-if="card.title">{{ card.title }}</h3>
      <p v-if="card.txt">{{ card.txt }}</p>
      <img :src="require('@/assets/wap-imgs/' + card.url)" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["cmp"],
};
</script>

<style>
</style>


        title: '',
        subtitle: '',
        cards: [
          { url: 'proj1.jpg', title: 'Access your files, anywhere', txt: ' The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere' },
          { url: 'proj2.jpg', title: 'Security you can trust', txt: ' 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files' },
          { url: 'proj3.jpg', title: 'Real-time collaboration', txt: ' Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required' },
          { url: 'proj4.jpg', title: 'Store any type of file', txt: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared' },
        ],