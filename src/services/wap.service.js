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
      id: 'wc223f02',
      type: 'wap-header',
      info: {
        title: '',
        subtitle: '',
        logo: { type: 'txt', txt: 'Utica' },
        navBar: ['Work', 'About', 'Our Team', 'Press', 'Contact'],
      },
      theme: 'theme-header-architecture',
      style: {
        backgroundColor: '#74b9ff',
        fontSize: '16px',
        color: '#a29bfe',
      },
    },
    {
      id: 'wc1asd122',
      type: 'wap-card',
      info: {
        title: ['Utica is an architecture firm based in Copenhagen, Denmark.'],
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
      id: 'w777777351dsas2',
      type: 'wap-text',
      info: {
        title: ['Recent Work...'],
        subtitle: [
          'Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through',
        ],
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
        imgs: [
          { url: 'proj1.jpg', title: 'Project one', txt: '' },
          { url: 'proj2.jpg', title: 'Project two', txt: '' },
          { url: 'proj3.jpg', title: 'Project three', txt: '' },
          { url: 'proj4.jpg', title: 'Project four', txt: '' },
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
      id: '353544d22',
      type: 'wap-header',
      info: {
        title: '',
        subtitle: '',
        logo: { type: 'img', url: 'fylo-imgs/logo.svg', txt: '' },
        navBar: ['Features', 'Team', 'Sign In'],
      },
      theme: 'theme-header-fylo',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc1asd342122',
      type: 'wap-card',
      info: {
        title: ['All your files in one secure location'],
        subtitle: [
          'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers',
        ],
        imgUrl: 'fylo-imgs/illustration-intro.png',
        buttons: ['Get Started'],
      },
      theme: 'theme-card-fylo-v1',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc2552299',
      type: 'wap-gallery',
      info: {
        title: '',
        subtitle: '',
        imgs: [
          {
            url: 'fylo-imgs/icon-access-anywhere.svg',
            title: 'Access your files, anywhere',
            txt: ' The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere',
          },
          {
            url: 'fylo-imgs/icon-security.svg',
            title: 'Security you can trust',
            txt: ' 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files',
          },
          {
            url: 'fylo-imgs/icon-collaboration.svg',
            title: 'Real-time collaboration',
            txt: ' Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
          },
          {
            url: 'fylo-imgs/icon-any-file.svg',
            title: 'Store any type of file',
            txt: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared",
          },
        ],
      },
      theme: 'theme-gallery-fylo',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc575752',
      type: 'wap-card',
      info: {
        title: ['Stay productive, wherever you are'],
        subtitle: [
          'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs',
          'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
        ],
        // link: 'See how Fylo works',
        imgUrl: 'fylo-imgs/illustration-stay-productive.png',
      },
      theme: 'theme-card-fylo-v2',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: '6336T333',
      type: 'wap-review',
      info: {
        quotesImg: 'fylo-imgs/bg-quotes.png',
        reviews: [
          {
            txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            name: 'Satish Patel',
            title: 'Founder & CEO, Huddle',
            avatar: 'fylo-imgs/profile-1.jpg',
          },
          {
            txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            name: 'Bruce McKenzie',
            title: 'Founder & CEO, Huddle',
            avatar: 'fylo-imgs/profile-2.jpg',
          },
          {
            txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            name: 'Iva Boyd',
            title: 'Founder & CEO, Huddle',
            avatar: 'fylo-imgs/profile-3.jpg',
          },
        ],
      },
      theme: 'theme-review-fylo',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: '1231F13FF131F3F3',
      type: 'wap-signup',
      info: {
        title: 'Get Early Access Today',
        subtitle:
          'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you',
        inputTxt: 'Get Started For Free!',
        btnTxt: 'Sign me up!',
      },
      theme: 'theme-signup-fylo',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
  ],
}

storageService.post('wap_DB', wap_fylo)
storageService.post('wap_DB', wap_architecture)

createWaps()
