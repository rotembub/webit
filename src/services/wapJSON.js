// Tips & Tricks
// No need for another entity: Template, just use isPublic on the wap
// Focus on make it easy to demo over supporting full customization
// Support adding full-blown-component rather than letting the user add stuff manually
// (Delete is easy to implement later)
// Support several themes for components (CSS only)
// default FLEX is your friend, handle media proprtion correctly
// Here are some components:
// wap-header, wap-footer, wap-container
// wap-gallery (photos: {url, title,txt})
// wap-map (center,zoom,markers),
// wap-video (url, iframe)
// wap-social (socials)
// wap-signup => wapService
// wap-chat
// wap-contact-us => wapService
// wap-navbar
// wap-schedule

// Edit Mode
// wap-header-edit  / wap-header => prop: isEditMode
// wap-social-edit  / wap-social => prop: isEditMode

// Split work
// wap-details : render the predefined JSON
// wap-header, wap-map (dummy - map-photo)
// wap-container

// wap-edit
// wap-header-edit, wap-chat-edit (config - bot delay time)
// edit...
// Adding a component:
// *. User select WapCmp from <select>
// *. WapCmp is added at the bottom
// *. Let the user <select> After which WapCmp it should be added
// *. add <select> for theme (themes are hard coded inservice.getThemesFor(wapCmp.type))    -- classes?
// Save button
// Homepage
// render 3 waps
// support clone
// reset button?

// 'publish/61a64327ff6ed2cf5e14eaa8'

export var wap = {
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
        title: 'HairDresser Baluta',
        subtitle: 'Your Hair is !(Who you Are)',
        btn: { label: 'Schedule Today!', link: '#wc03' },
      },
      theme: 'theme-header-happy',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc01',
      type: 'wap-map',
      info: {
        name: 'Paris',
        lat: 12.909,
        lng: 23.9,
        zoom: 2,
      },
      theme: 'theme-map-exciting',
      style: {
        height: '300px',
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
}

const JSON_WAP_DATA = {
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
        title: 'HairDresser Baluta',
        subtitle: 'Your Hair is !(Who you Are)',
        // "btn": {"label": "Schedule Today!", "link" : "#wc03"}
        logo: 'url',
        'nav-bar': ['Menu', 'Gallery', 'About', 'Contact'],
      },
      theme: 'theme-header-happy',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc12312',
      type: 'wap-footer',
      info: {
        title: 'HairDresser Baluta',
        subtitle: 'Your Hair is !(Who you Are)',
        logo: 'url',
        'nav-bar': ['Menu', 'Gallery', 'About', 'Contact'],
        copyrights: 'all rights reserved',
      },
      theme: 'theme-footer-happy',
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
        title: 'HairDresser Baluta',
        subtitle: 'Your Hair is !(Who you Are)',
        photos: [
          {
            url: 'blalba.com',
            title: 'i like images',
            txt: 'ready for melt down',
          },
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
      id: 'w525251dsas2',
      type: 'wap-signup',
      info: {
        title: 'Members can vote for future topics',
        subtitle: 'we have a great community of...',
      },
      theme: 'theme-signup-happy',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'w5251213251dsas2',
      type: 'wap-contact',
      info: {
        title: 'Contact us!',
        subtitle: 'We would lose to hear your opinion!',
      },
      theme: 'theme-contact-happy',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'w52121312351dsas2',
      type: 'wap-social',
      info: {
        title: 'Members can vote for future topics',
        subtitle: 'we have a great community of...',
        logos: ['facebook', 'twitter', 'linkedin'],
      },
      theme: 'theme-signup-happy',
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
        title: 'The best in beauty care',
        subtitle:
          'a week with our product and you would feel like a new person',
      },
      theme: 'theme-text-happy',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc01',
      type: 'wap-map',
      info: {
        name: 'Paris',
        lat: 12.909,
        lng: 23.9,
        zoom: 2,
      },
      theme: 'theme-map-exciting',
      style: {
        height: '300px',
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
}

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

//////////////////////////////////////////////////////////////////////////////////////////////
const wap_fylo = {
  _id: '1d212dsd12',
  name: 'fylo',
  imgUrl:
    '',
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
      type: 'wap-gallery',
      info: {
        title: '',
        subtitle: '',
        photos: [{ url: 'fylo-imgs/illustration-intro.png', title: 'All your files in one secure location, accessible anywhere.', txt: 'Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers' }],
        buttons: ['Get Started']
      },
      theme: 'theme-gallery-fylo-single',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc2552299',
      type: 'wap-card',
      info: {
        title: '',
        subtitle: '',
        cards: [
          { url: 'fylo-imgs/icon-access-anywhere.svg', title: 'Access your files, anywhere', txt: ' The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere' },
          { url: 'fylo-imgs/icon-security.svg', title: 'Security you can trust', txt: ' 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files' },
          { url: 'fylo-imgs/icon-collaboration.svg', title: 'Real-time collaboration', txt: ' Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required' },
          { url: 'fylo-imgs/icon-any-file.svg', title: 'Store any type of file', txt: 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared' },
        ],
      },
      theme: 'theme-card-fylo',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    },
    {
      id: 'wc575752',
      type: 'wap-gallery',
      info: {
        title: "Stay productive, wherever you are",
        subtitle: ['Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs', 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required'
        ],
        // link: 'See how Fylo works',
        photos: [{ url: 'fylo-imgs/illustration-stay-productive.png', link: 'See how Fylo works', title: '', txt: '' }],
      },
      theme: 'theme-gallery-fylo-single2',
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
        reviews: [{ txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Satish Patel', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-1.jpg" }, { txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Bruce McKenzie', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-2.jpg" }, { txt: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: 'Iva Boyd', title: 'Founder & CEO, Huddle', avatar: "fylo-imgs/profile-3.jpg" }]
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
        subtitle: 'It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you',
        inputTxt: 'Get Started For Free!',
      },
      theme: 'theme-signup-fylo',
      style: {
        background: 'url()',
        font: 'Fontush',
        color: 'red',
      },
    }
  ]
}