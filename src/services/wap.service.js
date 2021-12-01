import { storageService } from './async-storage.service';
import { utilService } from './util.service';

const KEY = 'wap_DB';
const CMP_KEY = 'cmp_DB'

export const wapService = {
  // add,
  query,
  remove,
  save,
  getById,
  getEmptyWap,
};

// More ways to send query params:
// return axios.get('api/wap/?id=1223&balance=13')
// return axios.get('api/wap/?', {params: {id: 1223, balanse:13}})

async function query(filterBy) {
  try {
    return await storageService.query(KEY) || wap_architecture;
  } catch (err) {
    console.log('couldnt find Waps', err);
  }
}
async function getById(id) {
  try {
    return await storageService.get(KEY, id);
  } catch (err) {
    console.log('couldnt get wap by ID', err);
  }
}

async function save(wap) {
  try {
    const savedWap = wap._id
      ? await storageService.put(KEY, wap)
      : await storageService.post(KEY, wap);
    return savedWap;
  } catch (err) {
    console.log('failed to save wap');
  }
}

async function remove(wapId) {
  // return httpService.delete(`wap/${wapId}`)
  try {
    return await storageService.delete(KEY, wapId);
  } catch (err) {
    console.log('failed to delete wap', err)
  }
}

async function getEmptyWap() {
  return Promise.resolve({
    _id: utilService.makeId(),
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
    cmps: []
  });
}

// This IIFE async functions for Dev purposes
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



const wap_architecture = {
  _id: '5e28391631467774',
  name: 'TEST1',
  imgUrl:
    'http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png',
  createdBy: {
    _id: '5e26e0b718a0891d4c995527',
    username: 'Hekro Special',
  },
  usersData: {
    contacts: [{ email: 'user@user.com', msg: 'Please send me stuff', at: 123 }],
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
  ],
  isPublic: true,
};


const CMPS_DATA = [
  {
    id: 'wc02',
    type: 'wap-header',
    info: {
      title: '',
      subtitle: '',
      logo: { type: 'txt', txt: 'Utica' },
      navBar: ['Work', 'About', 'Our Team', 'Press', 'Contact'],
    },
    theme: 'theme-header-happy',
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
    theme: 'theme-gallery-happy',
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
    theme: 'theme-text-happy',
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
    theme: 'theme-gallery-happy',
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
    theme: 'theme-contact-happy',
    style: {
      background: 'url()',
      font: 'Fontush',
      color: 'red',
    },
  },
]
