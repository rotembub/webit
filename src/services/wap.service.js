
import { storageService } from './async-storage.service'

const KEY = 'wap_DB'

export const wapService = {
  // add,
  query,
  remove,
  getById,
  getEmptyWap
}

// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})


function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.wapId}`
  // return httpService.get(`wap${queryStr}`)
  return JSON_TEST1;
  return gWap;
  return storageService.query(KEY)
}
function getById(id) {
  return storageService.get(KEY, id)
  // return wap;
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



var gWap = {
  "_id": "5e28393890dd7201a06d4e44",
  "name": "HairDresser Baluta Marketing Site",
  "imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
  // "isEdit" : false,
  "createdBy": {
    "_id": "5e26e0b718a0891d4c995527",
    "username": "Hekro Special"
  },
  "usersData": {
    "contacts": [{ "email": "user@user.com", "msg": "Please send me stuff", "at": 123 }],
    "signups": [{ "email": "user@user.com", "at": 123 }]
  },

  "cmps": [
    {
      "id": "wc02",
      "type": "wap-header",
      "info": {
        "title": "HairDresser Baluta",
        "substitle": "Your Hair is !(Who you Are)",
        "btn": { "label": "Schedule Today!", "link": "#wc03" }
      },
      "theme": "theme-header-happy",
      "style": {
        "background": "url()",
        "font": "Fontush",
        "color": "red",
      }
    },
    {
      "id": "wc03",
      "type": "wap-container",
      "info": {
        "dir": "row",
        "cmps": [
          {},
          {}
        ]
      },
      "theme": "theme-container-base",
      "style": {
      }
    }
  ],
  "isPublic": true
}


// {
//   "_id": "5e28393890dd7201a06d4e44",
//   "name": "HairDresser Baluta Marketing Site",
//   "imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
//   // "isEdit" : false,
//   "createdBy": {
//     "_id": "5e26e0b718a0891d4c995527",
//     "username": "Hekro Special"
//   },
//   "usersData": {
//     "contacts": [{ "email": "user@user.com", "msg": "Please send me stuff", "at": 123 }],
//     "signups": [{ "email": "user@user.com", "at": 123 }]
//   },

//   "cmps": [
//     {
//       "id": "wc02",
//       "type": "wap-header",
//       "info": {
//         "title": "HairDresser Baluta",
//         "substitle": "Your Hair is !(Who you Are)",
//         "btn": { "label": "Schedule Today!", "link": "#wc03" }
//       },
//       "theme": "theme-header-happy",
//       "style": {
//         "background": "url()",
//         "font": "Fontush",
//         "color": "red",
//       }
//     },
//     {
//       "id": "wc01",
//       "type": "wap-map",
//       "info": {
//         "name": "Paris",
//         "lat": 12.909,
//         "lng": 23.9,
//         "zoom": 2
//       },
//       "theme": "theme-map-exciting",
//       "style": {
//         "height": "300px",
//       }
//     },
//     {
//       "id": "wc03",
//       "type": "wap-container",
//       "info": {
//         "dir": "row",
//         "cmps": [
//           {},
//           {}
//         ]
//       },
//       "theme": "theme-container-base",
//       "style": {
//       }
//     }
//   ],
//   "isPublic": true
// }

const JSON_TEST1 = {
  "_id": "5e28391631467774",
  "name": "TEST1",
  "imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
  "createdBy": {
    "_id": "5e26e0b718a0891d4c995527",
    "username": "Hekro Special"
  },
  "usersData": {
    "contacts": [{ "email": "user@user.com", "msg": "Please send me stuff", "at": 123 }],
    "signups": [{ "email": "user@user.com", "at": 123 }]
  },

  "cmps": [
    {
      "id": "wc02",
      "type": "wap-header",
      "info": {
        "title": "",
        "substitle": "",
        "logo": { "type": "txt", "txt": "something" },
        "navBar": ["Menu", "Gallery", "About", "Contact"]
      },
      "theme": "theme-header-happy",
      "style": {
        "background": "url()",
        "font": "Fontush",
        "color": "red",
      }
    },
    {
      "id": "wc1asd122",
      "type": "wap-gallery",
      "info": {
        "title": "HairDresser Baluta",
        "substitle": "Your Hair is !(Who you Are)",
        "photos": [{ "url": "blalba.com", "title": "i like images", "txt": "ready for melt down" }]
      },
      "theme": "theme-gallery-happy",
      "style": {
        "background": "url()",
        "font": "Fontush",
        "color": "red",
      }
    },
    {
      "id": "w777777351dsas2",
      "type": "wap-text",
      "info": {
        "title": "The best in beauty care",
        "substitle": "a week with our product and you would feel like a new person",
      },
      "theme": "theme-text-happy",
      "style": {
        "background": "url()",
        "font": "Fontush",
        "color": "red",
      }
    },
    {
      "id": "wc7744999",
      "type": "wap-gallery",
      "info": {
        "title": "Our recent works",
        "substitle": "",
        "photos": [
          { "url": "blalba1.com", "title": "goof", "txt": "" },
          { "url": "blalba2.com", "title": "something", "txt": "" },
          { "url": "blalba3.com", "title": "geton with it", "txt": "" },
          { "url": "blalba4.com", "title": "delvin", "txt": "" },
        ]
      },
      "theme": "theme-gallery-happy",
      "style": {
        "background": "url()",
        "font": "Fontush",
        "color": "red",
      }
    },
    {
      "id": "w525121212251dsas2",
      "type": "wap-contact",
      "info": {
        "title": "Contact us!",
        "substitle": "We would lose to hear your opinion!",
      },
      "theme": "theme-contact-happy",
      "style": {
        "background": "url()",
        "font": "Fontush",
        "color": "red",
      }
    },
    {
      "id": "wc12312",
      "type": "wap-footer",
      "info": {
        "logo": "url",
        "contactDetails": ["tel: 09-29292929", "email: contactus@gmail.com"]
      },
      "theme": "theme-footer-happy",
      "style": {
        "background": "url()",
        "font": "Fontush",
        "color": "red",
      }
    },
  ],
  "isPublic": true
}