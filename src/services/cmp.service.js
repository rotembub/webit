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
const gThemes = {
  'wap-header': [
    {type: 'theme-header-architecture', cmpId: 'wc02', name: 'Headers'},
  ],
  'wap-gallery': [
    {
      type: 'theme-gallery-architecture',
      cmpId: 'wc1asd122',
      name: 'Galleries',
    },
    {type: 'theme-gallery-architecture-v2', cmpId: 'wc7744999'},
  ],
  'wap-text': [{type: 'theme-text-architecture', cmpId: 'w777777351dsas2'}],
  'wap-contact': [
    {type: 'theme-contact-architecture', cmpId: 'w525121212251dsas2'},
  ],
};

//cmps
const gCmps = [
  {
    id: 'wc02',
    type: 'wap-header',
    info: {
      title: '',
      subtitle: '',
      logo: {type: 'txt', txt: 'Utica'},
      navBar: ['Work', 'About', 'Our Team', 'Press', 'Contact'],
    },
    theme: 'theme-header-architecture',
    style: {
      backgroundColor: '',
      fontSize: '16',
      color: 'red',
    },
  },
  {
    id: 'wc1asd122',
    type: 'wap-gallery',
    info: {
      title: ['Utica is an architecture firm based in Copenhagen, Denmark.'],
      subtitle: '',
      photos: [{url: 'building1.jpg', title: '', txt: ''}],
    },
    theme: 'theme-gallery-architecture',
    style: {
      backgroundColor: '',
      fontSize: '16',
      color: '',
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
      backgroundColor: '',
      fontSize: '16',
      color: '',
    },
  },
  {
    id: 'wc7744999',
    type: 'wap-gallery',
    info: {
      title: '',
      subtitle: '',
      photos: [
        {url: 'proj1.jpg', title: 'Project one', txt: ''},
        {url: 'proj2.jpg', title: 'Project two', txt: ''},
        {url: 'proj3.jpg', title: 'Project three', txt: ''},
        {url: 'proj4.jpg', title: 'Project four', txt: ''},
      ],
    },
    theme: 'theme-gallery-architecture-v2',
    style: {
      backgroundColor: '',
      fontSize: '16',
      color: '',
    },
  },
  {
    id: 'w525121212251dsas2',
    type: 'wap-contact',
    info: {
      title: ["Let's Work Together!"],
      subtitle: [
        'We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.',
      ],
      btnTxt: 'Contact Us',
    },
    theme: 'theme-contact-architecture',
    style: {
      backgroundColor: '',
      fontSize: '16',
      color: '',
    },
  },
];
