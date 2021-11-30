
import { storageService } from './async-storage.service'

const KEY = 'wap_DB'

export const wapService = {
  add,
  query,
  remove,
  getById,
  getEmptyWap
}


// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})

async function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.wapId}`
  // return httpService.get(`wap${queryStr}`)   
  return storageService.query(KEY)
}
async function getById(id) {
  return storageService.get(KEY, id)
}

async function save(wap) {
  const savedWap = wap._id
    ? storageService.put(KEY, wap)
    : storageService.post(KEY, wap)
  return savedWap
}

async function remove(wapId) {
  // return httpService.delete(`wap/${wapId}`)
  return storageService.delete(KEY, wapId)

}

function getEmptyWap() {
  return Promise.resolve({
    // _id: '',
    // name: '',
    // price: null,
    // labels: ['Doll', 'Battery Powered', 'Baby'],
    // createdAt: new Date(Date.now()).toLocaleString(),
    // inStock: true,
    // reviews: [],
  })
}

// This IIFE functions for Dev purposes 
// It allows testing of real time updates (such as sockets) by listening to storage events
(async () => {
  var waps = await storageService.query(KEY)

  // Dev Helper: Listens to when localStorage changes in OTHER browser
  window.addEventListener('storage', async () => {
    console.log('Storage updated');
    const freshWaps = await storageService.query(KEY)
    if (freshWaps.length === waps.length + 1) {
      console.log('Wap Added - localStorage updated from another browser')
      socketService.emit(SOCKET_EVENT_REVIEW_ADDED, freshWaps[freshWaps.length - 1])
    }
    waps = freshWaps
  });
})()

