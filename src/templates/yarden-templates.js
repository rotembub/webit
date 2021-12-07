import { utilService } from './util.service'
import { storageService } from './async-storage.service'
const wap_feliciano = {
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
                    fontSize: '12',
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
                    fontSize: '12',
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
                    fontSize: '12',
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
                    fontSize: '12',
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
                    color: '',
                    backgroundColor: '',
                    fontSize: '12',
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
            theme: 'wap-header-default',
            style: {
              background: 'url()',
              color: '',
              backgroundColor: '',
              fontSize: '',
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
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
                    paddingRight: '',
                    paddingTop: '',
                    paddingBottom: '',
                    paddingLeft: '',
                    lineHeight: '',
                    fontFamily: '"Great Vibes",cursive',
                    fontStyle: '50px',
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
                    fontFamily: '"Great Vibes",cursive',
                    fontStyle: '50px',
                  },
                },
              ],
            },
            theme: 'basic-title', //maybe same theme like before
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
                  url: 'feliciano-imgs/dish-1-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-small',
            style: {
              background: 'url()',
              color: '',
              backgroundColor: '',
              fontSize: '',
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
                  url: 'felicano-imgs/dish-2-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-small',
            style: {
              background: 'url()',
              color: '',
              backgroundColor: '',
              fontSize: '',
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
                  url: 'feliciano-imgs/dish-3-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-small',
            style: {
              background: 'url()',
              color: '',
              backgroundColor: '',
              fontSize: '',
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
                  url: 'feliciano-imgs/dish-4-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-small',
            style: {
              background: 'url()',
              color: '',
              backgroundColor: '',
              fontSize: '',
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
      theme: 'wap-container-fullscreen',
      style: {
        background: 'url(../../imgs/main-header-feliciano.jpg)',
        color: '',
        backgroundColor: '',
        fontSize: '',
        fontFamily: '',
        height: '1000',
      },
    },
    //Hero container
    //Container2
    {
      id: utilService.makeId(4),
      type: 'wap-container',
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
                  url: 'feliciano-imgs/chef-salting.jpg',
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
                  url: 'feliciano-imgs/chef-cleaning-salt.jpg',
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
                    fontSize: '50',
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
                    fontSize: '17',
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
                    fontSize: '20',
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
                    fontSize: '40',
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

      theme: 'wap-container-flex',
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
    //TEXT CMP
    //MENU-CONTAINER
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
                  url: 'feliciano-imgs/dish-1-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-default',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'feliciano-imgs/dish-3-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-default',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'feliciano-imgs/dish-3-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-default',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'feliciano-imgs/dish-4-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-default',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'feliciano-imgs/dish-2-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-default',
            style: {
              background: 'url()',
              color: '',
            },
          },
          {
            id: utilService.makeId(4),
            type: 'wap-img',
            info: {
              imgs: [
                {
                  id: utilService.makeId(4),
                  url: 'feliciano-imgs/dish-2-feliciano.jpg',
                  style: {
                    background: 'url()',
                    color: '',
                    backgroundColor: '',
                    fontSize: '',
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
            theme: 'wap-card-default',
            style: {
              background: 'url()',
              color: '',
            },
          },
        ],
      },
      theme: 'wap-container-wrap',
      style: {
        background: 'url()',
        color: '',
        backgroundColor: '',
        fontSize: '',
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
    //CHEF-IMGS
    {
      id: utilService.makeId(4),
      type: 'wap-container',
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
                  url: 'feliciano-imgs/chef-1.jpg',
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
                  url: 'feliciano-imgs/chef-2.jpg',
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
                  url: 'feliciano-imgs/chef-3.jpg',
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
                  url: 'feliciano-imgs/chef-4.jpg',
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
    //CHEF-IMGS
  ],
}

storageService.post('wap_DB', wap_feliciano)
