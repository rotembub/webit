import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const KEY = 'wap_DB'
const CMP_KEY = 'cmp_DB'

export const wapService = {
  // add,
  query,
  remove,
  save,
  getById,
  getEmptyWap,
  removeCmp,
  addCmp,
  updateCmp,
}

// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})

// Create Test Data:

function createWaps() {
  const waps = localStorage.getItem(KEY)

  storageService.postMany(KEY, [wap_architecture, wap_fylo])
  // storageService.post(KEY, wap_architecture)
  // console.log('waps found in storage:', waps)
  // if (!waps || !waps.length)
  //   localStorage.setItem(KEY, JSON.stringify([wap_architecture]))
}

async function query(filterBy) {
  // console.log('query in services')
  try {
    const wap = await storageService.query(KEY)
    // if (!wap || !wap.length) return wap_architecture
    return wap
  } catch (err) {
    console.log('couldnt find Waps', err)
  }
}
async function getById(id) {
  console.log(id)
  // if (!id) return getEmptyWap();
  try {
    // console.log('i am still here')
    const foundWap = await storageService.get(KEY, id)
    return foundWap
    // var copiedWap = JSON.parse(JSON.stringify(foundWap))
    // delete copiedWap._id   // when working with mongo be sure to delete the ID entirely before send it to the DB
    // const newWap = save(copiedWap)
    // return newWap;
  } catch (err) {
    console.log('couldnt get wap by ID', err)
  }
}

async function updateCmp(wapId, newCmp) {
  console.log('here at Update CMP', wapId, newCmp)
  var wap = await getById(wapId)
  const idx = wap.cmps.findIndex(cmp => cmp.id === newCmp.id)
  wap.cmps.splice(idx, 1, newCmp)
  console.log(wap)
  return await save(wap)
}

// prototype:
async function removeCmp(wapId, cmpId) {
  var wap = await getById(wapId)
  console.log('wap found:', wap)
  console.log('removing cmp id:', cmpId)
  const idx = wap.cmps.findIndex(cmp => cmp.id === cmpId)
  wap.cmps.splice(idx, 1)
  return await save(wap)
  // return wap;
}
// prototype:
async function addCmp(wapId, cmp) {
  console.log('adding cmp with ID:', cmp.id)
  var wap = await getById(wapId)
  wap.cmps.push(cmp)
  return await save(wap)
}

async function save(wap) {
  try {
    const savedWap = wap._id
      ? await storageService.put(KEY, wap)
      : await storageService.post(KEY, wap)
    return savedWap
  } catch (err) {
    console.log('failed to save wap')
  }
}

async function remove(wapId) {
  // return httpService.delete(`wap/${wapId}`)
  try {
    return await storageService.delete(KEY, wapId)
  } catch (err) {
    console.log('failed to delete wap', err)
  }
}

// async function getEmptyWap() {
//   return Promise.resolve({
//     _id: utilService.makeId(),
//     name: '',
//     imgUrl: '',
//     createdBy: {
//       _id: '',
//       username: '',
//     },
//     usersData: {
//       contacts: [{ email: '', msg: '', at: null }],
//       signups: [{ email: '', at: null }],
//     },
//     cmps: [],
//   });
// }

async function getEmptyWap() {
  const newWap = {
    name: '',
    imgUrl: '',
    createdBy: {
      _id: '',
      username: '',
    },
    usersData: {
      contacts: [{ email: '', msg: '', at: null }],
      signups: [{ email: '', at: null }],
    },
    cmps: [],
  }
  return await save(newWap)
}

// This IIFE async functions for Dev purposes
// It allows testing of real time updates (such as sockets) by listening to storage events
// ; (async () => {
//   var waps = await storageService.query(KEY)

//   // Dev Helper: Listens to when localStorage changes in OTHER browser
//   window.addEventListener('storage', async () => {
//     console.log('Storage updated')
//     const freshWaps = await storageService.query(KEY)
//     if (freshWaps.length === waps.length + 1) {
//       console.log('Wap Added - localStorage updated from another browser')
//       socketService.emit(
//         SOCKET_EVENT_REVIEW_ADDED,
//         freshWaps[freshWaps.length - 1]
//       )
//     }
//     waps = freshWaps
//   })
// })()

// *. add <select> for theme (themes are hard coded inservice.getThemesFor(wapCmp.type))    -- classes?
//make hardcoded cmps array

const wap_architecture = {
  // _id: 'aaaaa12',
  name: 'wap_architecture_refactor',
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
      id: utilService.makeId(4),
      type: 'wap-header',
      info: {
        title: '',
        subtitle: '',
        logo: { type: 'txt', txt: 'Utica', style: { color: '', fontSize: '' } },
        navBar: [{ id: utilService.makeId(6), txt: "Work", style: { color: '', fontSize: '' } }, { id: utilService.makeId(6), txt: 'About', style: { color: '', fontSize: '' } }, { id: utilService.makeId(6), txt: 'Our Team', style: { color: '', fontSize: '' } }, { id: utilService.makeId(6), txt: 'Press', style: { color: '', fontSize: '' } }, { id: utilService.makeId(6), txt: 'Contact', style: { color: '', fontSize: '' } }],
      },
      theme: 'theme-header-architecture',
      style: {
        backgroundColor: '#74b9ff',
        fontSize: '16px',
        color: '#a29bfe',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-card',
      info: {
        title: [{ id: utilService.makeId(4), txt: 'Utica is an architecture firm based in Copenhagen, Denmark.', style: { color: '', fontSize: '' } }],
        subtitle: '',
        imgUrl: 'building1.jpg',
      },
      theme: 'theme-card-architecture',
      style: {
        backgroundColor: '#74b9ff',
        fontSize: '16px',
        color: '#a29bfe',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-text',
      info: {
        title: [{ id: utilService.makeId(4), txt: 'Recent Work...', style: { color: '', fontSize: '' } }],
        subtitle: [{ id: utilService.makeId(4), txt: 'Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through', style: { color: '', fontSize: '' } }],

      },
      theme: 'theme-text-architecture',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-gallery',
      info: {
        title: '',
        subtitle: '', // CHANGE THE IMGS BELOW DONT FORGET!
        imgs: [
          { id: utilService.makeId(6), url: 'proj1.jpg', title: { txt: 'Project one', style: { color: '', fontSize: '' } }, txt: '', },
          { id: utilService.makeId(6), url: 'proj2.jpg', title: { txt: 'Project two', style: { color: '', fontSize: '' } }, txt: '', },
          { id: utilService.makeId(6), url: 'proj3.jpg', title: { txt: 'Project three', style: { color: '', fontSize: '' } }, txt: '', },
          { id: utilService.makeId(6), url: 'proj4.jpg', title: { txt: 'Project four', style: { color: '', fontSize: '' } }, txt: '', },
        ],
      },
      theme: 'theme-gallery-architecture',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-contact',
      info: {
        title: { id: utilService.makeId(6), txt: 'Let\'s Work Together!', style: { color: '', fontSize: '' } },
        subtitle: { id: utilService.makeId(6), txt: 'We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.', style: { color: '', fontSize: '' } },
        btnTxt: { id: utilService.makeId(6), txt: 'Contact Us', style: { color: '', fontSize: '' } },
      },
      theme: 'theme-contact-architecture',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
  ],
  isPublic: true,
}

const wap_fylo = {
  // _id: '999994123sd12',
  name: 'fylo',
  imgUrl: '',
  createdBy: {
    _id: '',
    username: '',
  },
  usersData: {
    contacts: [
      { email: 'user@user.com', msg: 'Please send me stuff', at: 123 },
    ],
    signups: [{ email: 'user@user.com', at: 123 }],
  },
  theme: 'fylo-main',

  cmps: [
    {
      id: utilService.makeId(4),
      type: 'wap-header',
      info: {
        title: '',
        subtitle: '',
        logo: { type: 'img', url: 'fylo-imgs/logo.svg', txt: '', style: { color: '', fontSize: '' } },
        navBar: [{ id: utilService.makeId(6), txt: 'Features', style: { color: '', fontSize: '' } }, { id: utilService.makeId(6), txt: 'Team', style: { color: '', fontSize: '' } }, { id: utilService.makeId(6), txt: 'Sign In', style: { color: '', fontSize: '' } }],
      },
      theme: 'theme-header-fylo',
      style: {
        background: 'url()',
        font: '',
        color: '',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-card',
      info: {
        title: [{ id: utilService.makeId(4), txt: 'All your files in one secure location', style: { color: '', fontSize: '' } }],
        subtitle: [{ id: utilService.makeId(4), txt: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers', style: { color: '', fontSize: '' } }],
        imgUrl: 'fylo-imgs/illustration-intro.png',
        buttons: [{ id: utilService.makeId(6), txt: 'Get Started', style: { color: '', fontSize: '' } }]
      },
      theme: 'theme-card-fylo-v1',
      style: {
        background: 'url()',
        font: '',
        color: '',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-gallery',
      info: {
        title: '',
        subtitle: '',
        imgs: [
          { id: utilService.makeId(4), url: 'fylo-imgs/icon-access-anywhere.svg', title: { txt: 'Access your files, anywhere', style: { color: '', fontSize: '' } }, txt: { txt: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere', style: { color: '', fontSize: '' } } },
          { id: utilService.makeId(4), url: 'fylo-imgs/icon-security.svg', title: { txt: 'Security you can trust', style: { color: '', fontSize: '' } }, txt: { txt: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files', style: { color: '', fontSize: '' } } },
          { id: utilService.makeId(4), url: 'fylo-imgs/icon-collaboration.svg', title: { txt: 'Real-time collaboration', style: { color: '', fontSize: '' } }, txt: { txt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required', style: { color: '', fontSize: '' } } },
          { id: utilService.makeId(4), url: 'fylo-imgs/icon-any-file.svg', title: { txt: 'Store any type of file', style: { color: '', fontSize: '' } }, txt: { txt: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared', style: { color: '', fontSize: '' } } },
        ],
      },
      theme: 'theme-gallery-fylo',
      style: {
        background: 'url()',
        font: '',
        color: '',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-card',
      info: {
        title: [{ id: utilService.makeId(4), txt: 'Stay productive, wherever you are', style: { color: '', fontSize: '' } }],
        subtitle: [{ id: utilService.makeId(4), txt: 'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs', style: { color: '', fontSize: '' } }, { id: utilService.makeId(4), txt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required', style: { color: '', fontSize: '' } }
        ],
        // link: 'See how Fylo works',
        imgUrl: 'fylo-imgs/illustration-stay-productive.png',
      },
      theme: 'theme-card-fylo-v2',
      style: {
        background: 'url()',
        font: '',
        color: '',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-review',
      info: {
        quotesImg: 'fylo-imgs/bg-quotes.png', // NEED TO GET BACK HERE THIS COULD BE COMPLICATED
        reviews: [
          { id: utilService.makeId(4), txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Satish Patel', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-1.jpg" },
          { id: utilService.makeId(4), txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Bruce McKenzie', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-2.jpg" },
          { id: utilService.makeId(4), txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Iva Boyd', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-3.jpg" }
        ]
      },
      theme: 'theme-review-fylo',
      style: {
        background: 'url()',
        font: '',
        color: '',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-signup',
      info: {
        title: { id: utilService.makeId(4), txt: 'Get Early Access Today', style: { color: '', fontSize: '' } },
        subtitle: { id: utilService.makeId(4), txt: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you', style: { color: '', fontSize: '' } },
        inputTxt: { id: utilService.makeId(4), txt: 'Get Started For Free!', style: { color: '', fontSize: '' } },
        btnTxt: { id: utilService.makeId(4), txt: 'Sign Me Up!', style: { color: '', fontSize: '' } }
      },
      theme: 'theme-signup-fylo',
      style: {
        background: 'url()',
        font: '',
        color: '',
      },
    },
  ],
}

storageService.post('wap_DB', wap_fylo)
storageService.post('wap_DB', wap_architecture)

createWaps()



