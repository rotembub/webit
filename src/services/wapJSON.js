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
// *. add <select> for theme (themes are hard coded inservice.getThemesFor(wapCmp.type))
// Save button
// Homepage
// render 3 waps
// support clone
// reset button?

// 'publish/61a64327ff6ed2cf5e14eaa8'
// if(this.$route.match('/').includes('publish')) this.isEdit = false
// else this.isEdit = true

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
        substitle: 'Your Hair is !(Who you Are)',
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
