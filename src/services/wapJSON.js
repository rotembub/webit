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
	"_id": "5e28393890dd7201a06d4e44",
	"name": "HairDresser Baluta Marketing Site",
	"imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
	// "isEdit" : false,
	"createdBy": {
		"_id": "5e26e0b718a0891d4c995527",
		"username": "Hekro Special"
	},
	"usersData": {
		"contacts": [{ "email": "user@user.com", "msg": "Please send me stuff", "at": 123 }],
		"signups": [{ "email": "user@user.com", "at": 123 }]
	},

	"cmps": [
		{
			"id": "wc02",
			"type": "wap-header",
			"info": {
				"title": "HairDresser Baluta",
				"subtitle": "Your Hair is !(Who you Are)",
				"btn": { "label": "Schedule Today!", "link": "#wc03" }
			},
			"theme": "theme-header-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "wc01",
			"type": "wap-map",
			"info": {
				"name": "Paris",
				"lat": 12.909,
				"lng": 23.9,
				"zoom": 2
			},
			"theme": "theme-map-exciting",
			"style": {
				"height": "300px",
			}
		},
		{
			"id": "wc03",
			"type": "wap-container",
			"info": {
				"dir": "row",
				"cmps": [
					{},
					{}
				]
			},
			"theme": "theme-container-base",
			"style": {
			}
		}
	],
	"isPublic": true
}








const JSON_WAP_DATA = {
	"_id": "5e28393890dd7201a06d4e44",
	"name": "HairDresser Baluta Marketing Site",
	"imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
	// "isEdit" : false,
	"createdBy": {
		"_id": "5e26e0b718a0891d4c995527",
		"username": "Hekro Special"
	},
	"usersData": {
		"contacts": [{ "email": "user@user.com", "msg": "Please send me stuff", "at": 123 }],
		"signups": [{ "email": "user@user.com", "at": 123 }]
	},

	"cmps": [
		{
			"id": "wc02",
			"type": "wap-header",
			"info": {
				"title": "HairDresser Baluta",
				"subtitle": "Your Hair is !(Who you Are)",
				// "btn": {"label": "Schedule Today!", "link" : "#wc03"}
				"logo": "url",
				"nav-bar": ["Menu", "Gallery", "About", "Contact"]
			},
			"theme": "theme-header-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "wc12312",
			"type": "wap-footer",
			"info": {
				"title": "HairDresser Baluta",
				"subtitle": "Your Hair is !(Who you Are)",
				"logo": "url",
				"nav-bar": ["Menu", "Gallery", "About", "Contact"],
				"copyrights": "all rights reserved"

			},
			"theme": "theme-footer-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "wc1asd122",
			"type": "wap-gallery",
			"info": {
				"title": "HairDresser Baluta",
				"subtitle": "Your Hair is !(Who you Are)",
				"photos": [{ "url": "blalba.com", "title": "i like images", "txt": "ready for melt down" }]
			},
			"theme": "theme-gallery-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "w525251dsas2",
			"type": "wap-signup",
			"info": {
				"title": "Members can vote for future topics",
				"subtitle": "we have a great community of...",
			},
			"theme": "theme-signup-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "w5251213251dsas2",
			"type": "wap-contact",
			"info": {
				"title": "Contact us!",
				"subtitle": "We would lose to hear your opinion!",
			},
			"theme": "theme-contact-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "w52121312351dsas2",
			"type": "wap-social",
			"info": {
				"title": "Members can vote for future topics",
				"subtitle": "we have a great community of...",
				"logos": ["facebook", "twitter", "linkedin"]
			},
			"theme": "theme-signup-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "w777777351dsas2",
			"type": "wap-text",
			"info": {
				"title": "The best in beauty care",
				"subtitle": "a week with our product and you would feel like a new person",
			},
			"theme": "theme-text-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "wc01",
			"type": "wap-map",
			"info": {
				"name": "Paris",
				"lat": 12.909,
				"lng": 23.9,
				"zoom": 2
			},
			"theme": "theme-map-exciting",
			"style": {
				"height": "300px",
			}
		},
		{
			"id": "wc03",
			"type": "wap-container",
			"info": {
				"dir": "row",
				"cmps": [
					{},
					{}
				]
			},
			"theme": "theme-container-base",
			"style": {
			}
		}
	],
	"isPublic": true
}


const JSON_TEST1 = {
	"_id": "5e28391631467774",
	"name": "TEST1",
	"imgUrl": "http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png",
	"createdBy": {
		"_id": "5e26e0b718a0891d4c995527",
		"username": "Hekro Special"
	},
	"usersData": {
		"contacts": [{ "email": "user@user.com", "msg": "Please send me stuff", "at": 123 }],
		"signups": [{ "email": "user@user.com", "at": 123 }]
	},

	"cmps": [
		{
			"id": "wc02",
			"type": "wap-header",
			"info": {
				"title": "",
				"subtitle": "",
				"logo": { "type": "txt", "txt": "Utica" },
				"navBar": ["Work", "About", "Our Team", "Press", "Contact"]
			},
			"theme": "theme-header-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "wc1asd122",
			"type": "wap-gallery",
			"info": {
				"title": "Utica is an architecture firm based in Copenhagen, Denmark.",
				"subtitle": "",
				"photos": [{ "url": "building1.jpg", "title": "", "txt": "" }]
			},
			"theme": "theme-gallery-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "w777777351dsas2",
			"type": "wap-text",
			"info": {
				"title": "Recent Work...",
				"subtitle": "Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through"
			},
			"theme": "theme-text-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "wc7744999",
			"type": "wap-gallery",
			"info": {
				"title": "",
				"subtitle": "",
				"photos": [
					{ "url": "proj1.jpg", "title": "Project one", "txt": "" },
					{ "url": "proj2.jpg", "title": "Project two", "txt": "" },
					{ "url": "proj3.jpg", "title": "Project three", "txt": "" },
					{ "url": "proj4.jpg", "title": "Project four", "txt": "" },
				]
			},
			"theme": "theme-gallery-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
		},
		{
			"id": "w525121212251dsas2",
			"type": "wap-contact",
			"info": {
				"title": "Let's Work Together!",
				"subtitle": "We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.",
				"btnTxt": "Contact Us"
			},
			"theme": "theme-contact-happy",
			"style": {
				"background": "url()",
				"font": "Fontush",
				"color": "red",
			}
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
	"isPublic": true
}

const CMPS_DATA = [
	{
		"id": "wc02",
		"type": "wap-header",
		"info": {
			"title": "",
			"subtitle": "",
			"logo": { "type": "txt", "txt": "Utica" },
			"navBar": ["Work", "About", "Our Team", "Press", "Contact"]
		},
		"theme": "theme-header-happy",
		"style": {
			"background": "url()",
			"font": "Fontush",
			"color": "red",
		}
	},
	{
		"id": "wc1asd122",
		"type": "wap-gallery",
		"info": {
			"title": "Utica is an architecture firm based in Copenhagen, Denmark.",
			"subtitle": "",
			"photos": [{ "url": "building1.jpg", "title": "", "txt": "" }]
		},
		"theme": "theme-gallery-happy",
		"style": {
			"background": "url()",
			"font": "Fontush",
			"color": "red",
		}
	},
	{
		"id": "w777777351dsas2",
		"type": "wap-text",
		"info": {
			"title": "Recent Work...",
			"subtitle": "Our practice spans from environmental retrofits of existing buildings to the complete planning and design of new neighborhoods and public spaces. While our work is aesthetically diverse, our projects are linked by a focus on enhancing human relationships through"
		},
		"theme": "theme-text-happy",
		"style": {
			"background": "url()",
			"font": "Fontush",
			"color": "red",
		}
	},
	{
		"id": "wc7744999",
		"type": "wap-gallery",
		"info": {
			"title": "",
			"subtitle": "",
			"photos": [
				{ "url": "proj1.jpg", "title": "Project one", "txt": "" },
				{ "url": "proj2.jpg", "title": "Project two", "txt": "" },
				{ "url": "proj3.jpg", "title": "Project three", "txt": "" },
				{ "url": "proj4.jpg", "title": "Project four", "txt": "" },
			]
		},
		"theme": "theme-gallery-happy",
		"style": {
			"background": "url()",
			"font": "Fontush",
			"color": "red",
		}
	},
	{
		"id": "w525121212251dsas2",
		"type": "wap-contact",
		"info": {
			"title": "Let's Work Together!",
			"subtitle": "We’re always looking for new opportunities and are comfortable working internationally. Please get in touch and one of our project managers will contact you about beginning the proposal process.",
			"btnTxt": "Contact Us"
		},
		"theme": "theme-contact-happy",
		"style": {
			"background": "url()",
			"font": "Fontush",
			"color": "red",
		}
	},

]