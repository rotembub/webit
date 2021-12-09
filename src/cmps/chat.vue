<template>
  <section>
    <div v-if="chatOpen" class="chat-container">
      <ul class="messages">
        <li v-for="(msg, idx) in msgs" :key="idx">
          <span>{{ msg.from }}:</span>{{ msg.txt }}
        </li>
      </ul>
      <div v-if="isTyping" class="typing">
        <span v-for="(user, idx) in typingUsers" :key="idx"
          >{{ user }} is typing...
        </span>
      </div>
      <form id="form" @submit.prevent="sendMsg">
        <input
          @input="startTyping()"
          v-model="msg.txt"
          id="input"
          autocomplete="off"
        />
        <button>Send</button>
      </form>
      <el-button @click="chatOpen = !chatOpen" class="close-chat-btn"
        >X</el-button
      >
    </div>
    <div v-else>
      <el-button
        class="open-chat-ctn"
        @click="chatOpen = !chatOpen"
        type="success"
        >Open Chat</el-button
      >
    </div>
  </section>
</template>

<script>
import { socketService } from '../services/socket.service.js'
export default {
  props: ['wap'],
  data() {
    return {
      chatOpen: false,

      msg: { from: 'me', txt: '' },
      msgs: [],
      user: null,
      typingUsers: [],
      timeOut: null,
      isTyping: false,
    }
  },
  components: {},
  created() {
    // socketService.setup();
    console.log(this.wap)
    socketService.emit('chat topic', this.wap._id)
    socketService.on('chat addMsg', this.addMsg)
    socketService.on('typing', this.newTypingUser)
    socketService.on('stop typing', this.deleteTypingUser)
    this.user = this.$store.getters.getLoggedinUser
  },
  destroyed() {
    socketService.off('chat addMsg', this.addMsg)
    // socketService.terminate();
  },
  computed: {
    // getLoggedinUser() {
    //   console.log('MATAI ANI RAS')
    //   return this.$store.getters.getLoggedinUser
    // },
  },
  methods: {
    newTypingUser(userName) {
      if (
        this.typingUsers.includes(userName) ||
        userName === this.user.username
      )
        return
      this.typingUsers.push(userName)
      this.isTyping = true
    },
    deleteTypingUser(userName) {
      this.typingUsers = this.typingUsers.filter(user => user !== userName)
      console.log(this.typingUsers.length, 'LENGTH')
      if (this.typingUsers.length === 0) this.isTyping = false
    },
    startTyping() {
      socketService.emit('typing', this.user.username)

      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        socketService.emit('stop typing', this.user.username)
      }, 1000)
    },
    addMsg(msg) {
      this.msgs.push(msg)
    },
    sendMsg() {
      this.user
      console.log(
        '🚀 ~ file: chat.vue ~ line 63 ~ sendMsg ~ this.user',
        this.user
      )
      this.msg.from = this.user.username

      console.log('Sending', this.msg)
      socketService.emit('chat newMsg', this.msg)
      this.msg = { from: 'Me', txt: '' }
    },
    changeTopic() {
      socketService.emit('chat topic', this.wap._id)
    },
  },
}
</script>

<style></style>
