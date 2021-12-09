import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import { httpService } from './http.service.js'

const KEY = 'wap_DB'
const CMP_KEY = 'cmp_DB'
const ENDPOINT = 'wap'

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
  duplicateEl,
  updateElStyle,
  updateEl
}

// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})

// Create Test Data:

// function createWaps() {
//   const waps = localStorage.getItem(KEY);

//   storageService.postMany(KEY, [
//     wap_architecture,
//     wap_fylo,
//     wap_sunnyside,
//     wap_feliciano,
//   ]);
//   // storageService.post(KEY, wap_architecture)
//   // console.log('waps found in storage:', waps)
//   // if (!waps || !waps.length)
//   //   localStorage.setItem(KEY, JSON.stringify([wap_architecture]))
// }

async function query(filterBy) {
  // try {
  //   const wap = await storageService.query(KEY);
  //   // if (!wap || !wap.length) return wap_architecture
  //   return wap;
  // } catch (err) {
  //   console.log('couldnt find Waps', err);
  // }
  return await httpService.get(ENDPOINT, filterBy)
}
async function getById(id) {
  // try {
  //   const foundWap = await storageService.get(KEY, id);
  //   return foundWap;
  // } catch (err) {
  //   console.log('couldnt get wap by ID', err);
  // }
  return await httpService.get(`${ENDPOINT}/${id}`)
}

async function updateCmp(wap, newCmp) {
  //get wap not wapId change in store
  // console.log('here at Update CMP', wapId, newCmp);
  // var wap = await getById(wapId);
  // const idx = wap.cmps.findIndex((cmp) => cmp.id === newCmp.id);
  // wap.cmps.splice(idx, 1, newCmp);
  // console.log(wap);
  // return await save(wap);
  const idx = wap.cmps.findIndex(cmp => cmp.id === newCmp.id)
  wap.cmps.splice(idx, 1, newCmp)
  return Promise.resolve(wap)
}

// prototype:
async function removeCmp(wap, cmpId) {
  // var wap = await getById(wapId);
  // console.log('wap found:', wap);
  // console.log('removing cmp id:', cmpId);
  // const idx = wap.cmps.findIndex((cmp) => cmp.id === cmpId);
  // wap.cmps.splice(idx, 1);
  // return await save(wap);
  // return wap;
  const idx = wap.cmps.findIndex(cmp => cmp.id === cmpId)
  wap.cmps.splice(idx, 1)
  return Promise.resolve(wap)
}
// prototype:
async function addCmp(wap, cmp, idx) {
  // console.log('adding cmp with ID:', cmp.id);
  // var wap = await getById(wapId);
  // wap.cmps.splice(idx, 0, cmp);
  // return await save(wap);
  wap.cmps.splice(idx, 0, cmp)
  console.log('wap after splice', wap)
  return Promise.resolve(wap)
}

async function copyCmp(wap, cmpId) {
  // var wap = await getById(wapId);
  // const cmp = wap.cmps.find((cmp) => cmp.id === cmpId);
  // const newCopyCmp = JSON.parse(JSON.stringify(cmp));
  // newCopyCmp.id = utilService.makeId(); //change id soo it will not duplicate
  // return newCopyCmp;
  const cmp = wap.cmps.find(cmp => cmp.id === cmpId)
  const newCopyCmp = JSON.parse(JSON.stringify(cmp))
  newCopyCmp.id = utilService.makeId() //change id soo it will not duplicate
  return newCopyCmp
}

async function save(wap) {
  // try {
  //   const savedWap = wap._id
  //     ? await storageService.put(KEY, wap)
  //     : await storageService.post(KEY, wap);
  //   return savedWap;
  // } catch (err) {
  //   console.log('failed to save wap');
  // }
  if (wap._id) {
    return await httpService.put(`${ENDPOINT}/${wap._id}`, wap)
  } else {
    return await httpService.post(ENDPOINT, wap)
  }
}

async function remove(wapId) {
  // return httpService.delete(`wap/${wapId}`)
  // try {
  //   return await storageService.delete(KEY, wapId);
  // } catch (err) {
  //   console.log('failed to delete wap', err);
  // }
  return await httpService.delete(`${ENDPOINT}/${wapId}`)
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
  // return await save(newWap);
  return await httpService.post(ENDPOINT, newWap)
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
async function duplicateEl(wap, cmpId, elType, elId, containerId) {
  // const wap = await getById(wapId);
  if (!containerId) {
    const cmp = wap.cmps.find(cmp => cmp.id === cmpId)
    console.log('cmp FOUnd in dup', cmp.id, cmp)
    // if (elType === 'logo') delete cmp.info[elType]
    console.log('elType:', elType)
    const originalEl = cmp.info[elType].find(el => el.id === elId)
    const dupEl = JSON.parse(JSON.stringify(originalEl))
    dupEl.id = utilService.makeId(6)
    cmp.info[elType].push(dupEl)
  } else {
    const container = wap.cmps.find(cmp => cmp.id === containerId)
    console.log(wap, container)
    const innerCmp = container.info.cmps.find(cmp => cmp.id === cmpId)
    const originalEl = innerCmp.info[elType].find(el => el.id === elId)
    const dupEl = JSON.parse(JSON.stringify(originalEl))
    dupEl.id = utilService.makeId(6)
    innerCmp.info[elType].push(dupEl)
  }
  // return await save(wap);
  return wap
}

async function removeEl(wap, cmpId, elType, elId, containerId) {
  //get wap no wapId from store
  // if no type is sent we can delete the entire type from the cmp
  console.log(wap, cmpId, elType, elId, containerId)
  // const wap = await getById(wapId);
  if (!containerId) {
    const cmp = wap.cmps.find(cmp => cmp.id === cmpId)
    if (elType === 'logo') {
      delete cmp.info[elType]
      const idx = wap.cmps.findIndex(cmp => cmp.id === cmpId)
      wap.cmps.splice(idx, 1, cmp);
    }
    else {
      console.log('elType:', elType)
      const idx = cmp.info[elType].findIndex(el => el.id === elId)
      cmp.info[elType].splice(idx, 1)
    }
    // return await save(wap);
    return Promise.resolve(wap)
  } else {
    const container = wap.cmps.find(cmp => cmp.id === containerId)
    console.log(wap, container)
    const innerCmp = container.info.cmps.find(cmp => cmp.id === cmpId)
    if (elType === 'logo') delete innerCmp.info[elType]
    else {
      const idx = innerCmp.info[elType].findIndex(el => el.id === elId)
      innerCmp.info[elType].splice(idx, 1)
    }
    // return await save(wap);
    return Promise.resolve(wap)
  }
}

async function updateElStyle(wap, cmpId, elType, elId, containerId, style) {
  // if no type is sent we can delete the entire type from the cmp
  console.log(wap, cmpId, elType, elId, containerId)
  // const wap = await getById(wapId)

  if (!containerId) {
    const cmp = wap.cmps.find(cmp => cmp.id === cmpId)
    if (elType === 'logo') cmp.info[elType].style = style
    else {
      console.log('elType:', elType)
      const element = cmp.info[elType].find(el => el.id === elId)
      element.style = style
    }
  } else {
    const container = wap.cmps.find(cmp => cmp.id === containerId)
    console.log(wap, container)
    const innerCmp = container.info.cmps.find(cmp => cmp.id === cmpId)
    if (elType === 'logo') innerCmp.info[elType].style = style
    else {
      const element = innerCmp.info[elType].find(el => el.id === elId)
      element.style = style
      // innerCmp.info[elType].splice(idx, 1)
    }
  }
  return wap
  // return await save(wap)
}

async function updateEl(wap, cmpId, elType, elId, containerId, updatedEl) {
  // if no type is sent we can delete the entire type from the cmp
  console.log(wap, cmpId, elType, elId, containerId, updatedEl)
  // const wap = await getById(wapId)

  if (!containerId) {
    const cmp = wap.cmps.find(cmp => cmp.id === cmpId)
    if (elType === 'logo') cmp.info[elType] = updatedEl
    else {
      console.log('elType:', elType)
      const idx = cmp.info[elType].findIndex(el => el.id === elId)
      cmp.info[elType].splice(idx, 1, updatedEl)
    }
  } else {
    const container = wap.cmps.find(cmp => cmp.id === containerId)
    console.log(wap, container)
    const innerCmp = container.info.cmps.find(cmp => cmp.id === cmpId)
    if (elType === 'logo') innerCmp.info[elType] = updatedEl
    else {
      const idx = innerCmp.info[elType].findIndex(el => el.id === elId)
      innerCmp.info[elType].splice(idx, 1, updatedEl)
      // innerCmp.info[elType].splice(idx, 1)
    }
  }
  return wap
  // return await save(wap)
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
      screenshotImg: 'archi-examples/theme-header-architecture.png',
      category: 'Headers',
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
      screenshotImg: 'archi-examples/card-archi.png',
      category: 'Cards',
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
            url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047582/k6uufj8vqob5zmeqqguz.jpg',
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
      screenshotImg: 'archi-examples/text-archi.png',
      category: 'Text',
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
      screenshotImg: 'archi-examples/gallery-archi.png',
      category: 'Galleries',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047583/z37wb0ptsbys73axascc.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047584/divy2h23e5uzapcqpqup.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047583/cb0vpto1vvxblurhj3rf.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047585/uywwyuledud6ctzctxit.jpg',
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
      screenshotImg: 'archi-examples/contact-archi.png',
      category: 'Contacts',
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
            txt: "We're always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.",
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
  isPublic: true,
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
      screenshotImg: 'fylo-examples/fylo-header.png',
      category: 'Headers',
      info: {
        title: '',
        subtitle: '',
        logo: {
          type: 'img',
          url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046911/y8xzjmh6sikx4iaxsjoy.svg',
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
      screenshotImg: 'fylo-examples/fylo-card-v1.png',
      category: 'Landings',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046608/nwynylnvzz3cl5rtsmdo.png',
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
      screenshotImg: 'fylo-examples/fylo-gallery.png',
      category: 'Cards',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046824/hdxrb2fjvotkfjrglqkb.svg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046802/z1cwegkmiv9qawbmmwad.svg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046825/g1weljwqgxhryicacme3.svg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046824/lq0ngmmk0ciulsowcdb0.svg',
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
      screenshotImg: 'fylo-examples/fylo-card-v2.png',
      category: 'Cards',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046608/so8bjwwlzcl4eikovxgr.png',
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
      screenshotImg: 'fylo-examples/fylo-review.png',
      category: 'Reviews',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046608/tcrmtyvjpse0llvh7r45.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046608/ongddbdwdh9wjmscaydh.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639046608/j4wfnxxodyuxlayfvjno.jpg',
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
      screenshotImg: 'fylo-examples/fylo-sign-up.png',
      category: 'Contacts',
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
  isPublic: true,
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
      screenshotImg: 'sunnyside-examples/hero.png',
      category: 'Landings',
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
                url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047189/gvhktnel0e6qvqxpnooy.svg',
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
      screenshotImg: 'sunnyside-examples/egg.png',
      category: 'Cards',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047278/tchg2bfwn2rcbo7u5jsr.jpg',
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
      screenshotImg: 'sunnyside-examples/pink.png',
      category: 'Cards',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047278/l4imdffltxtyeo3muyat.jpg',
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
      screenshotImg: 'sunnyside-examples/orange.png',
      category: 'Cards',
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
            theme: 'wap-card-text-inside wap-bg-img', //maybe same theme like before
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
            theme: 'wap-card-text-inside wap-bg-img', //maybe same theme like before
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
        height: '',
      },
    },
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      screenshotImg: 'sunnyside-examples/reviews.png',
      category: 'Reviews',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047218/vhclmr440m2t8djfwvp3.jpg',
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
              height: '400',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047218/mzogv0hke7fyqncuoofq.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047217/lsttztfqqw0ydmzw2aad.jpg',
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
      screenshotImg: 'sunnyside-examples/imgs.png',
      category: 'Galleries',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047277/obournwajbm91puewp2d.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047277/ypwtbx0kygjlafvspjoa.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047277/xzoon57pmlzolnwh05jw.jpg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047277/xjgf5ouan5y7ielhflby.jpg',
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
      screenshotImg: 'sunnyside-examples/footer.png',
      category: 'Footers',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047488/fsrwrmaypdamlutcckaj.svg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047488/hu70lgble2ovlac6rd3d.svg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047488/kgvy5qmccx4fjf1qk7ic.svg',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639047488/oy2fh5qxeimwjkw5f5zz.svg',
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

const wap_feliciano = {
  isPublic: true,
  name: 'Feliciano',
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
  theme: 'feliciano-main',
  cmps: [
    //Hero container
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      screenshotImg: 'feliciano-examples/hero.png',
      category: 'Landings',
      info: {
        dir: 'column',
        cmps: [
          //HEADER
          {
            id: utilService.makeId(4),
            type: 'wap-header',
            info: {
              title: '',
              subtitle: '',
              logo: {
                type: 'txt',
                txt: 'Feliciano',
                style: {
                  background: 'url()',
                  color: '',
                  backgroundColor: '',
                  fontSize: '20',
                  paddingRight: '',
                  paddingTop: '',
                  paddingBottom: '',
                  paddingLeft: '',
                  lineHeight: '',
                  fontFamily: 'Poppins',
                  fontStyle: '',
                },
              },
              navBar: [
                {
                  id: utilService.makeId(6),
                  txt: 'Home',
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
                    fontFamily: 'Poppins',
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
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(6),
                  txt: 'Menu',
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
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(6),
                  txt: 'Stories',
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
                    fontFamily: 'Poppins',
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
                {
                  id: utilService.makeId(6),
                  txt: 'Book a table',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontSize: '18',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-header-feliciano',
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
          //HEADER
          //TEXT
          {
            id: utilService.makeId(4),
            type: 'wap-text',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Feliciano',
                  style: {
                    background: '',
                    color: '#c8a97e',
                    backgroundColor: '',
                    fontSize: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'GreatVibes',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(4),
                  txt: 'Notorious and Tasty',
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
                    fontFamily: 'Arial',
                    fontStyle: '50px',
                  },
                },
              ],
            },
            theme: 'landing-feliciano', //maybe same theme like before
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
            },
          },
          //TEXT
          //CARDS
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '18',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '14',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045688/uaarokyp98gttuio0rp2.png',
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
            theme: 'card-dish',
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
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '18',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '14',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045687/czna341vpw6mm15tbygi.png',
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
            theme: 'card-dish',
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
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '18',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '14',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045687/so8gr3gawwx5ejpyecw8.png',
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
            theme: 'card-dish',
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
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '18',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '14',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045688/yf4oetd3x5yqgqz6lbe0.png',
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
            theme: 'card-dish',
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
          //CARDS
        ],
      },
      theme: 'feliciano-landing-page',
      style: {
        background: 'url(../../imgs/main-header-feliciano.jpg)',
        color: '',
        backgroundColor: '',
        fontSize: '',
        fontFamily: '',
        height: '',
      },
    },
    //Hero container
    //Container2
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      screenshotImg: 'feliciano-examples/herochefs.png',
      category: 'Cards',
      info: {
        dir: 'row',
        cmps: [
          //IMAGES
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045697/hbahgn9wxtzvj51kctdi.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: '',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045690/dv65ye7pvztvruzwjj4q.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: '',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-img-feliciano',
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
          //IMAGES
          //CARD
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Feliciano Restaurant',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(4),
                  txt: 'Mon - Fri 8 AM - 11 PM',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
                {
                  id: utilService.makeId(4),
                  txt: '+ 1-978-123-4567',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-card-default',
            style: {
              color: '',
              backgroundColor: '',
              fontSize: '',
              fontFamily: '',
              fontStyle: '',
            },
          },
          //CARD
        ],
      },

      theme: 'wap-feliciano-detail-card wap-container-flex',
      style: {
        background: 'url()',
        color: '',
        backgroundColor: '',
        fontSize: '',
        fontStyle: '',
      },
    },
    //Container2
    //TEXT CMP
    {
      id: utilService.makeId(4),
      type: 'wap-text',
      screenshotImg: 'feliciano-examples/text.png',
      category: 'Text',
      info: {
        title: [
          {
            id: utilService.makeId(4),
            txt: 'Catering Services',
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
            txt: 'Catering Services',
            style: {
              background: '',
              color: '#c8a97e',
              fontFamily: 'GreatVibes',
              fontStyle: '',
            },
          },
        ],
      },
      theme: 'wap-feliciano-catering', //maybe same theme like before
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
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      screenshotImg: 'feliciano-examples/services.png',
      category: 'Cards',
      info: {
        dir: 'row',
        cmps: [
          //IMAGES
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Birthday Party',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045685/otxtfe0johrcwqdug2dz.png',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-catering-preview',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Business Meetings',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045686/wx7awvwj6ff2rgpo5496.png',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-catering-preview',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Wedding Party',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045686/cstj9mlafjyman7kbqqv.png',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-catering-preview',
            style: {
              background: 'url()',
              color: '',
            },
          },
          //IMAGES
        ],
      },
      theme: 'wap-container-flex',
      style: {
        background: 'url()',
        color: '',
        backgroundColor: '',
        fontSize: '',
        fontStyle: '',
      },
    },

    //TEXT CMP
    //MENU-CONTAINER
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      screenshotImg: 'feliciano-examples/menu1.png',
      category: 'Cards',
      info: {
        dir: 'row',
        cmps: [
          {
            //1
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045688/uaarokyp98gttuio0rp2.png',
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
            theme: 'wap-img-menu',
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
          }, // 2
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Order now',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-menu-card',
            style: {
              background: 'url()',
              color: '',
            },
          }, // 3
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045687/so8gr3gawwx5ejpyecw8.png',
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
            theme: 'wap-img-menu',
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
            // 4
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Order now',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-menu-card',
            style: {
              background: 'url()',
              color: '',
            },
          }, // end of the first line
          {
            // second line begins // 1
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Order now',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-menu-card',
            style: {
              background: 'url()',
              color: '',
            },
          }, // 2
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045687/czna341vpw6mm15tbygi.png',
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
            theme: 'wap-img-menu',
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
          }, // 3
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Order now',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-menu-card',
            style: {
              background: 'url()',
              color: '',
            },
          }, //4
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045687/p1oib2rzk32ne5mwyxz9.png',
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
            theme: 'wap-img-menu',
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
          }, // 3rd line begins // 1
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045688/yf4oetd3x5yqgqz6lbe0.png',
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
            theme: 'wap-img-menu',
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
            // 2
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Order now',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-menu-card',
            style: {
              background: 'url()',
              color: '',
            },
          }, //3
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045688/uaarokyp98gttuio0rp2.png',
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
            theme: 'wap-img-menu',
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
                  txt: 'Grilled Beef with potatoes',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Meat, Potatoes, Rice, Tomatoe',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Order now',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-menu-card',
            style: {
              background: 'url()',
              color: '',
            },
          }, // 5
        ],
      },
      theme: 'feliciano-menu-gallery container-layout',
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
    //MENU-CONTAINER
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
            txt: 'Our Master Chefs',
            style: {
              background: '',
              color: '#c8a97e',
              fontFamily: 'GreatVibes',
              fontStyle: '',
            },
          },
        ],
      },
      theme: 'wap-feliciano-catering', //maybe same theme like before
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
    //CHEF-IMGS
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      screenshotImg: 'feliciano-examples/chefs-imgs.png',
      category: 'Cards',
      info: {
        dir: 'row',
        cmps: [
          //IMAGES
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'John Smooth',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045686/wtyrzzdhnfdftmyh0cbs.png',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Restaurant Owner',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Contact the chef',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-chef-preview',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Becky Welson',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045686/xgfgpi2znifye1faupoh.png',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Head Chef',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Contact the chef',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-chef-preview',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Kharl Branyt',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045686/qwmjkk2qe7bq4pu0uwyb.png',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Chef',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Contact the chef',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-chef-preview',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-card',
            info: {
              title: [
                {
                  id: utilService.makeId(4),
                  txt: 'Luke Simon',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045686/oqlcyu8uqm7eezumvtb7.png',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                  },
                },
              ],
              subtitle: [
                {
                  id: utilService.makeId(4),
                  txt: 'Chef',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
              buttons: [
                //see if its good
                {
                  id: utilService.makeId(4),
                  txt: 'Contact the chef',
                  style: {
                    background: 'url()',
                    color: 'white',
                    backgroundColor: '#c8a97e',
                    fontFamily: 'Poppins',
                    fontStyle: '',
                  },
                },
              ],
            },
            theme: 'wap-chef-preview',
            style: {
              background: 'url()',
              color: '',
            },
          },
          //IMAGES
        ],
      },
      theme: 'wap-container-center container-layout',
      style: {
        background: 'url()',
        color: '',
        backgroundColor: '',
        fontSize: '',
        fontStyle: '',
      },
    },

    //TEXT CMP
    {
      id: utilService.makeId(4),
      type: 'wap-text',
      screenshotImg: 'feliciano-examples/happy-text.png',
      category: 'Text',
      info: {
        title: [
          {
            id: utilService.makeId(4),
            txt: 'Happy Customer',
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
            txt: 'Happy Customer',
            style: {
              background: '',
              color: '#c8a97e',
              fontFamily: 'GreatVibes',
              fontStyle: '',
            },
          },
        ],
      },
      theme: 'wap-feliciano-catering', //maybe same theme like before
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

    //TEXT CMP
    //Reviews
    {
      id: utilService.makeId(4),
      type: 'wap-container',
      screenshotImg: 'feliciano-examples/reviews.png',
      category: 'Reviews',
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
                  txt: '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."',
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
                  txt: 'Yarden M.',
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
                  txt: 'CEO & Head of lunch',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045689/xdjpu2m2cekusa9sumk9.png',
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
            theme: 'feliciano-review',
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
                  txt: '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."',
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
                  txt: 'Rotem Bublil',
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
                  txt: 'CEO & Head of lunch',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045689/z6kmqgl99aj7quigxfi7.png',
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
            theme: 'feliciano-review',
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
                  txt: '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."',
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
                  txt: 'Matan Lasry',
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
                  txt: 'Chief ',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045688/wcuewyjbvcl1ng9sexp6.png',
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
            theme: 'feliciano-review',
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
                  txt: '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."',
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
                  txt: 'Shani Aharon',
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
                  txt: 'CEO & Head of lunch',
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
                  url: 'https://res.cloudinary.com/rb-mister-toy/image/upload/v1639045689/ynikal9lmpvlmmmyfijm.png',
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
            theme: 'feliciano-review',
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
      theme: 'feliciano-review-container',
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
    //Reviews

    //CHEF-IMGS
  ],
}

//gets the data form database*****
// storageService.post('wap_DB', wap_feliciano);
// storageService.post('wap_DB', wap_fylo);
// storageService.post('wap_DB', wap_sunnyside);
// storageService.post('wap_DB', wap_architecture);

// createWaps();
