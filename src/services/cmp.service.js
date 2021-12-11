import {storageService} from './async-storage.service';
import {utilService} from './util.service';
import {httpService} from './http.service.js';

const CMP_KEY = 'cmp_DB';
const ENDPOINT = 'cmp';

export const cmpService = {
  // add,
  query,
  getById,
  getCmpById,
  getThemesFor,
};

let gCmps = [];
let gThemes = {};

// ***get cmps array from the backend and save it in the store then use it

// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})

async function query(filterBy) {
  gCmps = await httpService.get(ENDPOINT, filterBy);
  gThemes = gCmps.reduce((acc, cmp) => {
    if (!acc[cmp.category])
      acc[cmp.category] = [
        {type: cmp.category, cmpId: cmp.id, imgPath: cmp.screenshotImg}, //**change to category in the json
      ];
    else
      acc[cmp.category].push({
        type: cmp.category,
        cmpId: cmp.id,
        imgPath: cmp.screenshotImg,
      });
    return acc;
  }, {});

  console.log('test gThemes funccc', gThemes);

  // console.log("gCmps", gCmps);
  // return gCmps;
}
async function getById(id) {
  return await httpService.get(`${ENDPOINT}/${id}`);
  // return storageService.get(CMP_KEY, id);
}

function nestedLoop(obj) {
  const res = {};
  function recurse(obj, current) {
    for (const key in obj) {
      let value = obj[key];
      if (value != undefined) {
        if (Array.isArray(value)) {
          console.log(value, 'value array');
          value.map((item) => {
            item.id = utilService.makeId();
          });
        } else if (value && typeof value === 'object') {
          recurse(value, key);
        } else {
          // Do your stuff here to var value
          res[key] = value;
        }
      }
    }
  }
  recurse(obj);
  return res;
}

async function getCmpById(id) {
  const cmp = gCmps.find((currCmp) => currCmp.id === id);
  const copyCmp = JSON.parse(JSON.stringify(cmp));
  copyCmp.id = utilService.makeId(); //change id soo it will not duplicate
  const res = nestedLoop(copyCmp);
  console.log(res, 'the res');
  console.log(copyCmp, 'after change copy cmp');
  // go over all the ids indie the cmp and change them, try to use rcurse
  // copyCmp.info.navBar[0].id = utilService.makeId(); // the id inside the info elements is the same
  return Promise.resolve(copyCmp);
}

function getThemesFor(cmpCat) {
  const themes = gThemes[cmpCat];
  console.log('themes', themes);
  return themes;
}

async function save(cmp) {
  const savedCmp = cmp._id
    ? storageService.put(CMP_KEY, cmp)
    : storageService.post(CMP_KEY, cmp);
  return savedCmp;
}

// const gCmps = [
//   {
//     id: utilService.makeId(4),
//     type: 'wap-header',
//     screenshotImg: 'archi-examples/theme-header-architecture.png',
//     info: {
//       title: '',
//       subtitle: '',
//       logo: {type: 'txt', txt: 'Utica', style: {color: '', fontSize: ''}},
//       navBar: [
//         {
//           id: utilService.makeId(6),
//           txt: 'Work',
//           style: {color: '', fontSize: ''},
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'About',
//           style: {color: '', fontSize: ''},
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Our Team',
//           style: {color: '', fontSize: ''},
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Press',
//           style: {color: '', fontSize: ''},
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Contact',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//     },
//     theme: 'theme-header-architecture',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       //new size style
//       height: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-card',
//     screenshotImg: 'archi-examples/card-archi.png', // change to archi card
//     info: {
//       title: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Utica is an architecture firm based in Copenhagen, Denmark.',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//       subtitle: '',
//       imgUrl: 'building1.jpg',
//     },
//     theme: 'theme-card-architecture',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '693.350',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-text',
//     screenshotImg: 'archi-examples/text-archi.png',
//     info: {
//       title: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Recent Work...',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//       subtitle: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//     },
//     theme: 'theme-text-architecture',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '220.100',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-gallery',
//     screenshotImg: 'archi-examples/gallery-archi.png',
//     info: {
//       title: '',
//       subtitle: '', // CHANGE THE IMGS BELOW DONT FORGET!
//       imgs: [
//         {
//           id: utilService.makeId(6),
//           url: 'proj1.jpg',
//           title: {txt: 'Project one', style: {color: '', fontSize: ''}},
//           txt: '',
//         },
//         {
//           id: utilService.makeId(6),
//           url: 'proj2.jpg',
//           title: {txt: 'Project two', style: {color: '', fontSize: ''}},
//           txt: '',
//         },
//         {
//           id: utilService.makeId(6),
//           url: 'proj3.jpg',
//           title: {txt: 'Project three', style: {color: '', fontSize: ''}},
//           txt: '',
//         },
//         {
//           id: utilService.makeId(6),
//           url: 'proj4.jpg',
//           title: {txt: 'Project four', style: {color: '', fontSize: ''}},
//           txt: '',
//         },
//       ],
//     },
//     theme: 'theme-gallery-architecture',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '647.050',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-contact',
//     screenshotImg: 'archi-examples/contact-archi.png',
//     info: {
//       title: {
//         id: utilService.makeId(6),
//         txt: "Let's Work Together!",
//         style: {color: '', fontSize: ''},
//       },
//       subtitle: {
//         id: utilService.makeId(6),
//         txt: 'We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.',
//         style: {color: '', fontSize: ''},
//       },
//       btnTxt: {
//         id: utilService.makeId(6),
//         txt: 'Contact Us',
//         style: {color: '', fontSize: ''},
//       },
//     },
//     theme: 'theme-contact-architecture',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '199.600',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-header',
//     screenshotImg: 'fylo-examples/fylo-header.png',
//     info: {
//       title: '',
//       subtitle: '',
//       logo: {
//         type: 'img',
//         url: 'fylo-imgs/logo.svg',
//         txt: '',
//         style: {color: '', fontSize: ''},
//       },
//       navBar: [
//         {
//           id: utilService.makeId(6),
//           txt: 'Features',
//           style: {color: '', fontSize: ''},
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Team',
//           style: {color: '', fontSize: ''},
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Sign In',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//     },
//     theme: 'theme-header-fylo',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-card',
//     screenshotImg: 'fylo-examples/fylo-card-v1.png',
//     info: {
//       title: [
//         {
//           id: utilService.makeId(4),
//           txt: 'All your files in one secure location',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//       subtitle: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//       imgUrl: 'fylo-imgs/illustration-intro.png',
//       buttons: [
//         {
//           id: utilService.makeId(6),
//           txt: 'Get Started',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//     },
//     theme: 'theme-card-fylo-v1',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '648.675',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-gallery',
//     screenshotImg: 'fylo-examples/fylo-gallery.png',
//     info: {
//       title: '',
//       subtitle: '',
//       imgs: [
//         {
//           id: utilService.makeId(4),
//           url: 'fylo-imgs/icon-access-anywhere.svg',
//           title: {
//             txt: 'Access your files, anywhere',
//             style: {color: '', fontSize: ''},
//           },
//           txt: {
//             txt: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere',
//             style: {color: '', fontSize: ''},
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           url: 'fylo-imgs/icon-security.svg',
//           title: {
//             txt: 'Security you can trust',
//             style: {color: '', fontSize: ''},
//           },
//           txt: {
//             txt: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files',
//             style: {color: '', fontSize: ''},
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           url: 'fylo-imgs/icon-collaboration.svg',
//           title: {
//             txt: 'Real-time collaboration',
//             style: {color: '', fontSize: ''},
//           },
//           txt: {
//             txt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
//             style: {color: '', fontSize: ''},
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           url: 'fylo-imgs/icon-any-file.svg',
//           title: {
//             txt: 'Store any type of file',
//             style: {color: '', fontSize: ''},
//           },
//           txt: {
//             txt: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared",
//             style: {color: '', fontSize: ''},
//           },
//         },
//       ],
//     },
//     theme: 'theme-gallery-fylo',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '848.013',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-card',
//     screenshotImg: 'fylo-examples/fylo-card-v2.png',
//     info: {
//       title: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Stay productive, wherever you are',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//       subtitle: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs',
//           style: {color: '', fontSize: ''},
//         },
//         {
//           id: utilService.makeId(4),
//           txt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
//           style: {color: '', fontSize: ''},
//         },
//       ],
//       // link: 'See how Fylo works',
//       imgUrl: 'fylo-imgs/illustration-stay-productive.png',
//     },
//     theme: 'theme-card-fylo-v2',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '649.438',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-review',
//     screenshotImg: 'fylo-examples/fylo-review.png',
//     info: {
//       quotesImg: 'fylo-imgs/bg-quotes.png', // NEED TO GET BACK HERE THIS COULD BE COMPLICATED
//       reviews: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//           name: 'Satish Patel',
//           title: 'Founder & CEO, Huddle',
//           avatar: 'fylo-imgs/profile-1.jpg',
//         },
//         {
//           id: utilService.makeId(4),
//           txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//           name: 'Bruce McKenzie',
//           title: 'Founder & CEO, Huddle',
//           avatar: 'fylo-imgs/profile-2.jpg',
//         },
//         {
//           id: utilService.makeId(4),
//           txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//           name: 'Iva Boyd',
//           title: 'Founder & CEO, Huddle',
//           avatar: 'fylo-imgs/profile-3.jpg',
//         },
//       ],
//     },
//     theme: 'theme-review-fylo',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '640',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-signup',
//     screenshotImg: 'fylo-examples/fylo-sign-up.png',
//     info: {
//       title: {
//         id: utilService.makeId(4),
//         txt: 'Get Early Access Today',
//         style: {color: '', fontSize: ''},
//       },
//       subtitle: {
//         id: utilService.makeId(4),
//         txt: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you',
//         style: {color: '', fontSize: ''},
//       },
//       inputTxt: {
//         id: utilService.makeId(4),
//         txt: 'Get Started For Free!',
//         style: {color: '', fontSize: ''},
//       },
//       btnTxt: {
//         id: utilService.makeId(4),
//         txt: 'Sign Me Up!',
//         style: {color: '', fontSize: ''},
//       },
//     },
//     theme: 'theme-signup-fylo',
//     style: {
//       backgroundColor: '',
//       fontSize: '16px',
//       color: '',
//       height: '307.725',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       paddingRight: '',
//     },
//   },
// ];
// const gCmps = [
//   {
//     id: utilService.makeId(4),
//     type: 'wap-header',
//     screenshotImg: 'archi-examples/theme-header-architecture.png',
//     info: {
//       title: '',
//       subtitle: '',
//       logo: {
//         type: 'txt',
//         txt: 'Utica',
//         style: {
//           background: 'url()',
//           color: '',
//           backgroundColor: '',
//           fontSize: '',
//           paddingRight: '',
//           paddingTop: '',
//           paddingBottom: '',
//           paddingLeft: '',
//           lineHeight: '',
//           fontFamily: '',
//           fontStyle: '',
//         },
//       },
//       navBar: [
//         {
//           id: utilService.makeId(6),
//           txt: 'Work',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'About',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Our Team',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Press',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Contact',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-header-architecture',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-card',
//     screenshotImg: 'archi-examples/card-archi.png',
//     info: {
//       title: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Utica is an architecture firm based in Copenhagen, Denmark.',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//       subtitle: '',
//       imgs: [
//         {
//           id: utilService.makeId(4),
//           url: 'building1.jpg',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-card-architecture',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '693.350',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-text',
//     screenshotImg: 'archi-examples/text-archi.png',
//     info: {
//       title: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Recent Work...',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//       subtitle: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-text-architecture',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '220.100',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-container',
//     screenshotImg: 'archi-examples/gallery-archi.png',
//     info: {
//       dir: 'row',
//       cmps: [
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Project one',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: '',
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'proj1.jpg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-card-architecture-inner',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Project two',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: '',
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'proj2.jpg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-card-architecture-inner',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Project three',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: '',
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'proj3.jpg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-card-architecture-inner',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Project four',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: '',
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'proj4.jpg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-card-architecture-inner',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-gallery-architecture',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '647.050',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-contact',
//     screenshotImg: 'archi-examples/contact-archi.png',
//     info: {
//       title: [
//         {
//           id: utilService.makeId(6),
//           txt: "Let's Work Together!",
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//       subtitle: [
//         {
//           id: utilService.makeId(6),
//           txt: 'We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//       buttons: [
//         {
//           id: utilService.makeId(6),
//           txt: 'Contact Us',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-contact-architecture',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '199.600',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-header',
//     screenshotImg: 'fylo-examples/fylo-header.png',
//     info: {
//       title: '',
//       subtitle: '',
//       logo: {
//         type: 'img',
//         url: 'fylo-imgs/logo.svg',
//         txt: '',
//         style: {
//           background: 'url()',
//           color: '',
//           backgroundColor: '',
//           fontSize: '',
//           paddingRight: '',
//           paddingTop: '',
//           paddingBottom: '',
//           paddingLeft: '',
//           lineHeight: '',
//           fontFamily: '',
//           fontStyle: '',
//         },
//       },
//       navBar: [
//         // need to figure this out quickly
//         {
//           id: utilService.makeId(6),
//           txt: 'Features',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Team',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(6),
//           txt: 'Sign In',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-header-fylo',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-container',
//     screenshotImg: 'fylo-examples/fylo-card-v1.png',
//     info: {
//       dir: 'row',
//       cmps: [
//         {
//           id: utilService.makeId(4),
//           type: 'wap-img',
//           info: {
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/illustration-intro.png',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-img-fylo',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-text',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'All your files in one secure location',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-text-fylo',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: '',
//             subtitle: '',
//             imgs: '',
//             buttons: [
//               {
//                 id: utilService.makeId(6),
//                 txt: 'Get Started',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-hero-fylo-v1',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-hero-fylo-v1',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '648.675',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-container',
//     screenshotImg: 'fylo-examples/fylo-gallery.png',
//     info: {
//       dir: 'row',
//       cmps: [
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Access your files, anywhere',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/icon-access-anywhere.svg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-card-fylo-inner',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Security you can trust',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: [
//               {
//                 id: utilService.makeId(4),
//                 txt: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/icon-security.svg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-card-fylo-inner',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Real-time collaboration',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/icon-collaboration.svg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-card-fylo-inner',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-card',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Store any type of file',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: [
//               {
//                 id: utilService.makeId(4),
//                 txt: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared",
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/icon-any-file.svg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-card-fylo-inner',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-gallery-fylo',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '848.013',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-container',
//     screenshotImg: 'fylo-examples/fylo-card-v2.png',
//     info: {
//       dir: 'row',
//       cmps: [
//         {
//           id: utilService.makeId(4),
//           type: 'wap-img',
//           info: {
//             imgs: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/illustration-stay-productive.png',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-img-fylo-v2',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-text',
//           info: {
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Stay productive, wherever you are',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             subtitle: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-text-fylo-v2',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-container-fylo-v2',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '649.438',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-container',
//     screenshotImg: 'fylo-examples/fylo-review.png',
//     info: {
//       dir: 'row',
//       cmps: [
//         {
//           id: utilService.makeId(4),
//           type: 'wap-review',
//           info: {
//             txt: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             name: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Satish Patel',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Founder & CEO, Huddle',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             avatar: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/profile-1.jpg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-review-fylo',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-review',
//           info: {
//             txt: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             name: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Bruce McKenzie',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Founder & CEO, Huddle',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             avatar: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/profile-2.jpg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-review-fylo',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//         {
//           id: utilService.makeId(4),
//           type: 'wap-review',
//           info: {
//             txt: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             name: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Iva Boyd',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             title: [
//               {
//                 id: utilService.makeId(4),
//                 txt: 'Founder & CEO, Huddle',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//             avatar: [
//               {
//                 id: utilService.makeId(4),
//                 url: 'fylo-imgs/profile-3.jpg',
//                 style: {
//                   background: 'url()',
//                   color: '',
//                   backgroundColor: '',
//                   fontSize: '',
//                   paddingRight: '',
//                   paddingTop: '',
//                   paddingBottom: '',
//                   paddingLeft: '',
//                   lineHeight: '',
//                   fontFamily: '',
//                   fontStyle: '',
//                 },
//               },
//             ],
//           },
//           theme: 'theme-review-fylo',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-reviews-fylo',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '640',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
//   {
//     id: utilService.makeId(4),
//     type: 'wap-signup',
//     screenshotImg: 'fylo-examples/fylo-sign-up.png',
//     info: {
//       title: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Get Early Access Today',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//       subtitle: [
//         {
//           id: utilService.makeId(4),
//           txt: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//       input: [
//         {
//           id: utilService.makeId(4),
//           txt: '',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//       buttons: [
//         {
//           id: utilService.makeId(4),
//           txt: 'Get Started For Free!',
//           style: {
//             background: 'url()',
//             color: '',
//             backgroundColor: '',
//             fontSize: '',
//             paddingRight: '',
//             paddingTop: '',
//             paddingBottom: '',
//             paddingLeft: '',
//             lineHeight: '',
//             fontFamily: '',
//             fontStyle: '',
//           },
//         },
//       ],
//     },
//     theme: 'theme-signup-fylo',
//     style: {
//       background: 'url()',
//       color: '',
//       backgroundColor: '',
//       fontSize: '',
//       height: '307.725',
//       paddingRight: '',
//       paddingTop: '',
//       paddingBottom: '',
//       paddingLeft: '',
//       lineHeight: '',
//       fontFamily: '',
//       fontStyle: '',
//     },
//   },
// ];

// const gThemes = gCmps.reduce((acc, cmp) => {
//   if (!acc[cmp.type])
//     acc[cmp.type] = [
//       {type: cmp.theme, cmpId: cmp.id, imgPath: cmp.screenshotImg},
//     ];
//   else
//     acc[cmp.type].push({
//       type: cmp.theme,
//       cmpId: cmp.id,
//       imgPath: cmp.screenshotImg,
//     });
//   return acc;
// }, {});

// console.log('test gThemes funccc', gThemes);
