import io from 'socket.io-client'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : '//localhost:3000'
// export const socketService = createSocketService()
export const socketService = createSocketService()

window.socketService = socketService

// var socketIsReady = false;
socketService.setup()

function createSocketService() {
  var socket = null
  const socketService = {
    async setup() {
      socket = io(baseUrl)
    },
    on(eventName, cb) {
      socket.on(eventName, cb)
    },
    off(eventName, cb = null) {
      if (!socket) return
      if (!cb) socket.removeAllListeners(eventName)
      else socket.off(eventName, cb)
    },
    emit(eventName, data) {
      // console.log('\n\nEmitting Socket Event', eventName)
      socket.emit(eventName, data)
    },
    terminate() {
      socket = null
    },
  }
  return socketService
}
