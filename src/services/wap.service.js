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
  copyCmp,
  removeEl,
}

// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})

// Create Test Data:

function createWaps() {
  const waps = localStorage.getItem(KEY)

  storageService.postMany(KEY, [wap_architecture, wap_fylo, wap_sunnyside])
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
async function addCmp(wapId, cmp, idx) {
  console.log('adding cmp with ID:', cmp.id)
  var wap = await getById(wapId)
  wap.cmps.splice(idx, 0, cmp)
  return await save(wap)
}

async function copyCmp(wapId, cmpId) {
  var wap = await getById(wapId)
  const cmp = wap.cmps.find(cmp => cmp.id === cmpId)
  const newCopyCmp = JSON.parse(JSON.stringify(cmp))
  newCopyCmp.id = utilService.makeId() //change id soo it will not duplicate
  return newCopyCmp
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

// async function removeEl(wapId, cmpId, containerId ,elType, elId) {
//   // if no type is sent we can delete the entire type from the cmp

//   const wap = await getById(wapId);
//   const cmp = wap.cmps.find((cmp) => cmp.id === cmpId);
//   console.log('cmp:', cmp);

//   if (typeof elType === 'string') {
//     if (elType === 'logo') delete cmp.info[elType];
//     else {
//       console.log('elType:', elType);
//       const idx = cmp.info[elType].findIndex((el) => el.id === elId);
//       cmp.info[elType].splice(idx, 1);
//     }
//     return await save(wap);
//   } else {
//     const parent = cmp.info[elType.type].find(
//       (el) => el.id === elType.parentId
//     );
//     delete parent[elType.is];
//     return await save(wap);
//     // {type: 'imgs', parentId: img.id  , is:'url'}
//   }
// }

async function removeEl(wapId, cmpId, elType, elId, containerId) {
  // if no type is sent we can delete the entire type from the cmp
  console.log(wapId, cmpId, elType, elId, containerId)
  const wap = await getById(wapId)

  if (!containerId) {
    const cmp = wap.cmps.find(cmp => cmp.id === cmpId)
    if (elType === 'logo') delete cmp.info[elType]
    else {
      console.log('elType:', elType)
      const idx = cmp.info[elType].findIndex(el => el.id === elId)
      cmp.info[elType].splice(idx, 1)
    }
    return await save(wap)
  } else {
    const container = wap.cmps.find(cmp => cmp.id === containerId)
    console.log(wap, container)
    const innerCmp = container.info.cmps.find(cmp => cmp.id === cmpId)
    if (elType === 'logo') delete innerCmp.info[elType]
    else {
      const idx = innerCmp.info[elType].findIndex(el => el.id === elId)
      innerCmp.info[elType].splice(idx, 1)
    }
    return await save(wap)
  }
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
  name: 'Architecture',
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
        logo: {
          type: 'txt',
          txt: 'Utica',
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
        navBar: [
          {
            id: utilService.makeId(6),
            txt: 'Work',
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
            id: utilService.makeId(6),
            txt: 'About',
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
            id: utilService.makeId(6),
            txt: 'Our Team',
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
            id: utilService.makeId(6),
            txt: 'Press',
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
            id: utilService.makeId(6),
            txt: 'Contact',
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
      theme: 'theme-header-architecture',
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
      type: 'wap-card',
      info: {
        title: [
          {
            id: utilService.makeId(4),
            txt: 'Utica is an architecture firm based in Copenhagen, Denmark.',
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
        subtitle: '',
        imgs: [
          {
            id: utilService.makeId(4),
            url: 'building1.jpg',
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
      theme: 'theme-card-architecture',
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
      info: {
        title: [
          {
            id: utilService.makeId(4),
            txt: 'Recent Work...',
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
        subtitle: [
          {
            id: utilService.makeId(4),
            txt: 'Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through',
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
      theme: 'theme-text-architecture',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Project one',
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
              subtitle: '',
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'proj1.jpg',
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
            theme: 'theme-card-architecture-inner',
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
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Project two',
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
              subtitle: '',
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'proj2.jpg',
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
            theme: 'theme-card-architecture-inner',
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
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Project three',
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
              subtitle: '',
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'proj3.jpg',
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
            theme: 'theme-card-architecture-inner',
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
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Project four',
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
              subtitle: '',
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'proj4.jpg',
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
            theme: 'theme-card-architecture-inner',
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
      theme: 'theme-gallery-architecture',
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
      type: 'wap-contact',
      info: {
        title: [
          {
            id: utilService.makeId(6),
            txt: "Let's Work Together!",
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
        subtitle: [
          {
            id: utilService.makeId(6),
            txt: 'We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.',
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
        buttons: [
          {
            id: utilService.makeId(6),
            txt: 'Contact Us',
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
      theme: 'theme-contact-architecture',
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
        logo: {
          type: 'img',
          url: 'fylo-imgs/logo.svg',
          txt: '',
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
        navBar: [
          // need to figure this out quickly
          {
            id: utilService.makeId(6),
            txt: 'Features',
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
            id: utilService.makeId(6),
            txt: 'Team',
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
            id: utilService.makeId(6),
            txt: 'Sign In',
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
      theme: 'theme-header-fylo',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/illustration-intro.png',
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
            theme: 'theme-img-fylo',
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
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'All your files in one secure location',
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
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers',
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
            theme: 'theme-text-fylo',
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
            type: 'wap-card',
            info: {
              title: '',
              subtitle: '',
              imgs: '',
              buttons: [
                {
                  id: utilService.makeId(6),
                  txt: 'Get Started',
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
            theme: 'theme-hero-fylo-v1',
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
      theme: 'theme-hero-fylo-v1',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Access your files, anywhere',
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
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere',
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
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/icon-access-anywhere.svg',
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
            theme: 'theme-card-fylo-inner',
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
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Security you can trust',
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
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files',
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
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/icon-security.svg',
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
            theme: 'theme-card-fylo-inner',
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
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Real-time collaboration',
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
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
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
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/icon-collaboration.svg',
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
            theme: 'theme-card-fylo-inner',
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
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Store any type of file',
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
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared",
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
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/icon-any-file.svg',
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
            theme: 'theme-card-fylo-inner',
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
      theme: 'theme-gallery-fylo',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/illustration-stay-productive.png',
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
            theme: 'theme-img-fylo-v2',
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
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Stay productive, wherever you are',
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
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs',
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
                  txt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
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
            theme: 'theme-text-fylo-v2',
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
      theme: 'theme-container-fylo-v2',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-review',
            info: {
              txt: [
                {
                  id: utilService.makeId(4),
                  txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
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
              name: [
                {
                  id: utilService.makeId(4),
                  txt: 'Satish Patel',
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
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Founder & CEO, Huddle',
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
              avatar: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/profile-1.jpg',
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
            theme: 'theme-review-fylo',
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
            type: 'wap-review',
            info: {
              txt: [
                {
                  id: utilService.makeId(4),
                  txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
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
              name: [
                {
                  id: utilService.makeId(4),
                  txt: 'Bruce McKenzie',
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
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Founder & CEO, Huddle',
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
              avatar: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/profile-2.jpg',
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
            theme: 'theme-review-fylo',
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
            type: 'wap-review',
            info: {
              txt: [
                {
                  id: utilService.makeId(4),
                  txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
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
              name: [
                {
                  id: utilService.makeId(4),
                  txt: 'Iva Boyd',
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
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Founder & CEO, Huddle',
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
              avatar: [
                {
                  id: utilService.makeId(4),
                  url: 'fylo-imgs/profile-3.jpg',
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
            theme: 'theme-review-fylo',
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
      theme: 'theme-reviews-fylo',
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
      type: 'wap-signup',
      info: {
        title: [
          {
            id: utilService.makeId(4),
            txt: 'Get Early Access Today',
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
        subtitle: [
          {
            id: utilService.makeId(4),
            txt: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you',
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
        input: [
          {
            id: utilService.makeId(4),
            txt: '',
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
        buttons: [
          {
            id: utilService.makeId(4),
            txt: 'Get Started For Free!',
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
      theme: 'theme-signup-fylo',
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
}

const wap_sunnyside = {
  name: 'SunnySide',
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
  theme: 'sunnyside-main',
  cmps: [
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      info: {
        dir: 'column',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-header',
            info: {
              title: '',
              subtitle: '',
              logo: {
                type: 'img',
                url: 'sunnyside-imgs/images/logo.svg',
                txt: '',
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
              navBar: [
                // need to figure this out quickly
                {
                  id: utilService.makeId(6),
                  txt: 'About',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '',
                    fontSize: '1.5rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '2rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(6),
                  txt: 'Services',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '',
                    fontSize: '1.5rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '2rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(6),
                  txt: 'Projects',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '',
                    fontSize: '1.5rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '2rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(6),
                  txt: 'Contact',
                  style: {
                    background: 'url()',
                    color: 'black',
                    backgroundColor: '',
                    fontSize: '1.5rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '2rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'theme-header-sunnyside',
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
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'WE ARE CREATIVE',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '3.75rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'theme-text-sunnyside',
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
      theme: 'theme-hero-sunnyside',
      style: {
        background: `url('https://res.cloudinary.com/rb-mister-toy/image/upload/v1638813593/edeyukdwkhhk5we1vbeh.jpg')`, //'url(sunnyside-imgs/images/desktop/image-header.jpg)',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Transform your brand',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '2em',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Fraunces,serif',
                    fontStyle: '',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'We are a full-service creative agency specializing in helping brands grow fast. engage your clients through compelling visuals that do most of the marketing for youre',
                  style: {
                    background: 'url()',
                    color: '#99A799',
                    backgroundColor: '',
                    fontSize: '1.125rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'LEARN MORE',
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
            theme: 'wap-card-default',
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
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/desktop/image-transform.jpg',
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
            theme: 'wap-img-sunny',
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
      theme: 'wap-container-flex',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/desktop/image-stand-out.jpg',
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
            theme: 'wap-img-sunny',
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
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Stand out to the right audience',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '3rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Fraunces,serif',
                    fontStyle: '',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'We are a full-service creative agency specializing in helping brands grow fast. engage your clients through compelling visuals that do most of the marketing for youre',
                  style: {
                    background: 'url()',
                    color: '#99A799',
                    backgroundColor: '',
                    fontSize: '1.125rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'LEARN MORE',
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
            theme: 'wap-card-default',
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
      theme: 'wap-container-flex',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-text',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Graphic Design',
                  style: {
                    background: '',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Fraunces,serif',
                    fontStyle: '1.8rem',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Great design makes you memorable. we deliver artwork that underscores your brand messgae and captures potential clients attention.',
                  style: {
                    background: 'url()',
                    color: '#99A799',
                    backgroundColor: '',
                    fontSize: '1.125rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-card-text-inside wap-bg-img basic-title', //maybe same theme like before
            style: {
              background: `url('https://res.cloudinary.com/rb-mister-toy/image/upload/v1638862155/i2c1irwsrw1eo3ndehxy.jpg')`,
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
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Photography',
                  style: {
                    background: `url()`,
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Fraunces,serif',
                    fontStyle: '1.8rem',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Great design makes you memorable. we deliver artwork that underscores your brand messgae and captures potential clients attention.',
                  style: {
                    background: 'url()',
                    color: '#99A799',
                    backgroundColor: '',
                    fontSize: '1.125rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-card-text-inside wap-bg-img basic-title', //maybe same theme like before
            style: {
              background: ` url(
                'https://res.cloudinary.com/rb-mister-toy/image/upload/v1638862167/u54kaytue4izlyy2aqzd.jpg')`,
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
      theme: 'wap-container-flex',
      style: {
        background: `url()`,
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
        height: '500',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-text',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'CLIENT TESTIMONIALS',
                  style: {
                    background: 'url()',
                    color: '#99A799',
                    backgroundColor: '',
                    fontSize: '1.125rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'theme-text-sunnyside-review-title basic-title',
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
            type: 'wap-review',
            info: {
              txt: [
                {
                  id: utilService.makeId(4),
                  txt: 'We put our trust in sunnyside and they delivered. making sure our needs were met and deadlines were always hit.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              name: [
                {
                  id: utilService.makeId(4),
                  txt: 'Emily R.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Marketing director',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              avatar: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/image-emily.jpg',
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
            theme: 'theme-review-sunnyside',
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
              height: '400'
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-review',
            info: {
              txt: [
                {
                  id: utilService.makeId(4),
                  txt: 'We put our trust in sunnyside and they delivered. making sure our needs were met and deadlines were always hit.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              name: [
                {
                  id: utilService.makeId(4),
                  txt: 'Thomas S.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Marketing director',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              avatar: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/image-thomas.jpg',
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
            theme: 'theme-review-sunnyside',
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
            type: 'wap-review',
            info: {
              txt: [
                {
                  id: utilService.makeId(4),
                  txt: 'We put our trust in sunnyside and they delivered. making sure our needs were met and deadlines were always hit.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              name: [
                {
                  id: utilService.makeId(4),
                  txt: 'Jennie F.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Marketing director',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '1.25rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '1.75rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
              avatar: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/image-jennie.jpg',
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
            theme: 'theme-review-sunnyside',
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
      theme: 'theme-reviews-sunnyside',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/desktop/image-gallery-cone.jpg',
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
            theme: 'wap-img-sunny',
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
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/desktop/image-gallery-milkbottles.jpg',
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
            theme: 'wap-img-sunny',
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
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/desktop/image-gallery-orange.jpg',
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
            theme: 'wap-img-sunny',
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
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/desktop/image-gallery-sugarcubes.jpg',
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
            theme: 'wap-img-sunny',
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
      theme: 'wap-container-flex',
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
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: utilService.makeId(4),
            type: 'wap-text',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'sunnyside',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '3rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Barlow,sans-serif', //maybe change font family
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'theme-text-sunnyside-footer-title',
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
            type: 'wap-header',
            info: {
              title: '',
              subtitle: '',
              navBar: [
                {
                  id: utilService.makeId(6),
                  txt: 'About',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '',
                    fontSize: '1.5rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '2rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(6),
                  txt: 'Services',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '',
                    fontSize: '1.5rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '2rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(6),
                  txt: 'Projects',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '',
                    fontSize: '1.5rem',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '2rem',
                    fontFamily: 'Barlow,sans-serif',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'theme-sunnyside-footer-nav',
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
            type: 'wap-social',
            info: {
              icons: [
                {
                  id: utilService.makeId(4),
                  url: 'sunnyside-imgs/images/icon-facebook.svg',
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
                  url: 'sunnyside-imgs/images/icon-instagram.svg',
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
                  url: 'sunnyside-imgs/images/icon-twitter.svg',
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
                  url: 'sunnyside-imgs/images/icon-pinterest.svg',
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
            theme: 'theme-sunnyside-footer-icons',
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
      theme: 'wap-footer-sunny',
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
}

storageService.post('wap_DB', wap_fylo)
storageService.post('wap_DB', wap_sunnyside)
storageService.post('wap_DB', wap_architecture)

createWaps()
