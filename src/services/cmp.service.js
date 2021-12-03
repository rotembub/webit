import {storageService} from './async-storage.service';
import {utilService} from './util.service';

const CMP_KEY = 'cmp_DB';

export const cmpService = {
  // add,
  query,
  getById,
  getCmpById,
  getThemesFor,
};

// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})

async function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.wapId}`
  // return httpService.get(`wap${queryStr}`)
  // return JSON_TEST1;
  // return gWap;

  return storageService.query(CMP_KEY);
}
async function getById(id) {
  return storageService.get(CMP_KEY, id);
}

async function getCmpById(id) {
  const cmp = gCmps.find((currCmp) => currCmp.id === id);
  const copyCmp = JSON.parse(JSON.stringify(cmp));
  copyCmp.id = utilService.makeId(); //change id soo it will not duplicate
  return Promise.resolve(copyCmp);
}

function getThemesFor(cmpType) {
  const themes = gThemes[cmpType];
  console.log('themes', themes);
  return themes;
}

async function save(cmp) {
  const savedCmp = cmp._id
    ? storageService.put(CMP_KEY, cmp)
    : storageService.post(CMP_KEY, cmp);
  return savedCmp;
}

//themes
// const gThemes = {
//   'wap-header': [
//     {type: 'theme-header-architecture', cmpId: 'wc02'},
//     {type: 'theme-header-fylo', cmpId: '353544d22'},
//   ],
//   'wap-gallery': [
//     {
//       type: 'theme-gallery-architecture',
//       cmpId: 'wc1asd122',
//       name: 'Galleries',
//     },
//     {type: 'theme-gallery-architecture-v2', cmpId: 'wc7744999'},
//     {type: 'theme-gallery-fylo-single', cmpId: 'wc1asd342122'},
//     {type: 'theme-gallery-fylo-single2', cmpId: 'wc575752'},
//   ],
//   'wap-text': [{type: 'theme-text-architecture', cmpId: 'w777777351dsas2'}],
//   'wap-card': [{type: 'theme-card-fylo', cmpId: 'wc2552299'}],
//   'wap-review': [{type: 'theme-review-fylo', cmpId: '6336T333'}],
//   'wap-signup': [{type: 'theme-signup-fylo', cmpId: '1231F13FF131F3F3'}],
//   'wap-contact': [
//     {type: 'theme-contact-architecture', cmpId: 'w525121212251dsas2'},
//   ],
// };

// const gThemesObjs = gCmps.map(cmp => {
//   return {
//     id
//   }
// })

//cmps

const gCmps = [
  {
    id: 'wc223f02',
    type: 'wap-header',
    screenshotImg: 'fylo-examples/fylo-cards.png',
    info: {
      title: '',
      subtitle: '',
      logo: {type: 'txt', txt: 'Utica'},
      navBar: ['Work', 'About', 'Our Team', 'Press', 'Contact'],
    },
    theme: 'theme-header-architecture',
    style: {
      backgroundColor: '',
      fontSize: '16px',
      color: '',
    },
  },
  {
    id: 'wc1asd122',
    type: 'wap-card',
    screenshotImg: 'fylo-examples/fylo-cards.png', // change to archi card
    info: {
      title: ['Utica is an architecture firm based in Copenhagen, Denmark.'],
      subtitle: '',
      imgUrl: 'building1.jpg',
    },
    theme: 'theme-card-architecture',
    style: {
      backgroundColor: '',
      fontSize: '16px',
      color: '',
    },
  },
  {
    id: 'w777777351dsas2',
    type: 'wap-text',
    screenshotImg: 'fylo-examples/fylo-cards.png', // change to arch text
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
      color: '',
    },
  },
  {
    id: 'wc7744999',
    type: 'wap-gallery',
    screenshotImg: 'fylo-examples/fylo-cards.png', //change to archit gallery
    info: {
      title: '',
      subtitle: '',
      imgs: [
        {url: 'proj1.jpg', title: 'Project one', txt: ''},
        {url: 'proj2.jpg', title: 'Project two', txt: ''},
        {url: 'proj3.jpg', title: 'Project three', txt: ''},
        {url: 'proj4.jpg', title: 'Project four', txt: ''},
      ],
    },
    theme: 'theme-gallery-architecture',
    style: {
      background: 'url()',
      font: 'Fontush',
      color: '',
    },
  },
  {
    id: 'w525121212251dsas2',
    type: 'wap-contact',
    screenshotImg: 'fylo-examples/fylo-contact.png', //change to archt contact
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
      color: '',
    },
  },
  {
    id: '353544d22',
    type: 'wap-header',
    screenshotImg: 'fylo-examples/fylo-header.png',
    info: {
      title: '',
      subtitle: '',
      logo: {type: 'img', url: 'fylo-imgs/logo.svg', txt: ''},
      navBar: ['Features', 'Team', 'Sign In'],
    },
    theme: 'theme-header-fylo',
    style: {
      background: 'url()',
      font: 'Fontush',
      color: '',
    },
  },
  {
    id: 'wc1asd342122',
    type: 'wap-card',
    screenshotImg: 'fylo-examples/fylo-cards.png',
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
      color: '',
    },
  },
  {
    id: 'wc2552299',
    type: 'wap-gallery',
    screenshotImg: 'fylo-examples/fylo-cards.png', //change to gallery
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
      color: '',
    },
  },
  {
    id: 'wc575752',
    type: 'wap-card',
    screenshotImg: 'fylo-examples/fylo-cards.png',
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
      color: '',
    },
  },
  {
    id: '6336T333',
    type: 'wap-review',
    screenshotImg: 'fylo-examples/fylo-cards.png', // change to reviews
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
      color: '',
    },
  },
  {
    id: '1231F13FF131F3F3',
    type: 'wap-signup',
    screenshotImg: 'fylo-examples/fylo-sign-up.png',
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
      color: '',
    },
  },
];

// //auto create gThemes from the gCmps array
const gThemes = gCmps.reduce((acc, cmp) => {
  if (!acc[cmp.type])
    acc[cmp.type] = [
      {type: cmp.theme, cmpId: cmp.id, imgPath: cmp.screenshotImg},
    ];
  else
    acc[cmp.type].push({
      type: cmp.theme,
      cmpId: cmp.id,
      imgPath: cmp.screenshotImg,
    });
  return acc;
}, {});

console.log('test gThemes funccc', gThemes);
