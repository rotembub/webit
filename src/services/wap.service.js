import {storageService} from './async-storage.service';
import {utilService} from './util.service';

const KEY = 'wap_DB';

export const wapService = {
  // add,
  query,
  remove,
  getById,
  getCmpById,
  getEmptyWap,
  getThemesFor,
};

// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})

function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.wapId}`
  // return httpService.get(`wap${queryStr}`)
  return JSON_TEST1;
  return gWap;
  return storageService.query(KEY);
}
function getById(id) {
  return storageService.get(KEY, id);

  // return wap;
}

function getCmpById(id) {
  // return storageService.get(KEY, id);
  const cmp = gWap.cmps.find((currCmp) => currCmp.id === id);
  const copyCmp = JSON.parse(JSON.stringify(cmp));
  copyCmp.id = utilService.makeId(); //change id soo it will not duplicate
  return Promise.resolve(copyCmp);
  // return wap;
}

function getThemesFor(cmpType) {
  const themes = gThemes[cmpType];
  return themes;
}

async function save(wap) {
  const savedWap = wap._id
    ? storageService.put(KEY, wap)
    : storageService.post(KEY, wap);
  return savedWap;
}

async function remove(wapId) {
  // return httpService.delete(`wap/${wapId}`)
  return storageService.delete(KEY, wapId);
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
  });
}

// This IIFE functions for Dev purposes
// It allows testing of real time updates (such as sockets) by listening to storage events
(async () => {
  var waps = await storageService.query(KEY);

  // Dev Helper: Listens to when localStorage changes in OTHER browser
  window.addEventListener('storage', async () => {
    console.log('Storage updated');
    const freshWaps = await storageService.query(KEY);
    if (freshWaps.length === waps.length + 1) {
      console.log('Wap Added - localStorage updated from another browser');
      socketService.emit(
        SOCKET_EVENT_REVIEW_ADDED,
        freshWaps[freshWaps.length - 1]
      );
    }
    waps = freshWaps;
  });
})();

// *. add <select> for theme (themes are hard coded inservice.getThemesFor(wapCmp.type))    -- classes?
//make hardcoded cmps array

const gThemes = {
  'wap-header': [
    {type: 'theme-header-happy', cmpId: 'wc02'},
    {type: 'theme-header-good'},
  ],
};

var gWap = {
  _id: '5e28393890dd7201a06d4e44',
  name: 'HairDresser Baluta Marketing Site',
  imgUrl:
    'http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png',
  // "isEdit" : false,
  createdBy: {
    _id: '5e26e0b718a0891d4c995527',
    username: 'Hekro Special',
  },
  usersData: {
    contacts: [{email: 'user@user.com', msg: 'Please send me stuff', at: 123}],
    signups: [{email: 'user@user.com', at: 123}],
  },

  cmps: [
    {
      id: 'wc02',
      type: 'wap-header',
      info: {
        title: 'HairDresser Baluta',
        substitle: 'Your Hair is !(Who you Are)',
        btn: {label: 'Schedule Today!', link: '#wc03'},
      },
      theme: 'theme-header-happy',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc03',
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [{}, {}],
      },
      theme: 'theme-container-base',
      style: {},
    },
  ],
  isPublic: true,
};

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
<<<<<<< HEAD
=======

const JSON_TEST1 = {
  _id: '5e28391631467774',
  name: 'TEST1',
  imgUrl:
    'http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png',
  createdBy: {
    _id: '5e26e0b718a0891d4c995527',
    username: 'Hekro Special',
  },
  usersData: {
    contacts: [
      { email: 'user@user.com', msg: 'Please send me stuff', at: 123 },
    ],
    signups: [{ email: 'user@user.com', at: 123 }],
  },

  cmps: [
    {
      id: 'wc02',
      type: 'wap-header',
      info: {
        title: '',
        subtitle: '',
        logo: { type: 'txt', txt: 'Utica' },
        navBar: ['Work', 'About', 'Our Team', 'Press', 'Contact'],
      },
      theme: 'theme-header-architecture',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc1asd122',
      type: 'wap-gallery',
      info: {
        title: 'Utica is an architecture firm based in Copenhagen, Denmark.',
        subtitle: '',
        photos: [{ url: 'building1.jpg', title: '', txt: '' }],
      },
      theme: 'theme-gallery-architecture',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'w777777351dsas2',
      type: 'wap-text',
      info: {
        title: 'Recent Work...',
        subtitle:
          'Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through',
      },
      theme: 'theme-text-architecture',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc7744999',
      type: 'wap-gallery',
      info: {
        title: '',
        subtitle: '',
        photos: [
          { url: 'proj1.jpg', title: 'Project one', txt: '' },
          { url: 'proj2.jpg', title: 'Project two', txt: '' },
          { url: 'proj3.jpg', title: 'Project three', txt: '' },
          { url: 'proj4.jpg', title: 'Project four', txt: '' },
        ],
      },
      theme: 'theme-gallery-architecture-v2',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'w525121212251dsas2',
      type: 'wap-contact',
      info: {
        title: "Let's Work Together!",
        subtitle:
          'We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.',
        btnTxt: 'Contact Us',
      },
      theme: 'theme-contact-architecture',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    // {
    // 	"id": "wc12312",
    // 	"type": "wap-footer",
    // 	"info": {
    // 		"logo": "url",
    // 		"contactDetails": ["tel: 09-29292929", "email: contactus@gmail.com"]
    // 	},
    // 	"theme": "theme-footer-happy",
    // 	"style": {
    // 		"background": "url()",
    // 		"font": "Fontush",
    // 		"color": "red",
    // 	}
    // },
  ],
  isPublic: true,
}
>>>>>>> 6f382b604c675e87d52b9c834442f243d5484fae
