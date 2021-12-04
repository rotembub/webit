import { utilService } from './util.service'


// const imgCMP = {
//     imgs: [{id: style url} , urls]
// }
const imgCMP = {
    imgs: [{ id: 123, url: '123.com', style: { stuff: '......' } }]
}

const reviewCMP = {
    review: [{
        id: utilService.makeId(4),
        txt: [{ id: utilService.makeId(4), txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
        name: [{ id: utilService.makeId(4), txt: 'Satish Patel', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
        title: [{ id: utilService.makeId(4), txt: 'Founder & CEO, Huddle', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
        avatar: [{ id: utilService.makeId(4), url: 'fylo-imgs/profile-1.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
    }]
}


const card = {

}

const contact = {

}

// const gallery  = container  

const header = {

}

const signUp = {

}
const social = {

}

const text = {

}







const wap_architecture = {
    // _id: 'aaaaa12',
    name: 'wap_architecture_refactor',
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
                    type: 'txt', txt: 'Utica', style: {
                        background: 'url()',
                        color: '',
                        backgroundColor: '',
                        fontSize: '',
                        paddingRight: '',
                        paddingTop: '',
                        paddingBottom: '',
                        paddingLeft: '',
                        lineHeight: '',
                        fontFamily: '',
                        fontStyle: '',
                    },
                },
                navBar: [ // havnt figured our what to do here yet...
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
                imgs: [{ id: utilService.makeId(4), url: 'building1.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
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
            type: 'wap-gallery',
            info: {
                imgs: [
                    {
                        id: utilService.makeId(6),
                        url: 'proj1.jpg',
                        title: [{
                            txt: 'Project one', style: {
                                background: 'url()',
                                color: '',
                                backgroundColor: '',
                                fontSize: '',
                                paddingRight: '',
                                paddingTop: '',
                                paddingBottom: '',
                                paddingLeft: '',
                                lineHeight: '',
                                fontFamily: '',
                                fontStyle: '',
                            }
                        }],
                    },
                    {
                        id: utilService.makeId(6),
                        url: 'proj2.jpg',
                        title: [{
                            txt: 'Project two', style: {
                                background: 'url()',
                                color: '',
                                backgroundColor: '',
                                fontSize: '',
                                paddingRight: '',
                                paddingTop: '',
                                paddingBottom: '',
                                paddingLeft: '',
                                lineHeight: '',
                                fontFamily: '',
                                fontStyle: '',
                            }
                        }],
                    },
                    {
                        id: utilService.makeId(6),
                        url: 'proj3.jpg',
                        title: [{
                            txt: 'Project three', style: {
                                background: 'url()',
                                color: '',
                                backgroundColor: '',
                                fontSize: '',
                                paddingRight: '',
                                paddingTop: '',
                                paddingBottom: '',
                                paddingLeft: '',
                                lineHeight: '',
                                fontFamily: '',
                                fontStyle: '',
                            }
                        }],
                    },
                    {
                        id: utilService.makeId(6),
                        url: 'proj4.jpg',
                        title: [{
                            txt: 'Project four', style: {
                                background: 'url()',
                                color: '',
                                backgroundColor: '',
                                fontSize: '',
                                paddingRight: '',
                                paddingTop: '',
                                paddingBottom: '',
                                paddingLeft: '',
                                lineHeight: '',
                                fontFamily: '',
                                fontStyle: '',
                            }
                        }],
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
                title: [{
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
                }],
                subtitle: [{
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
                }],
                buttons: [{
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
                }],
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
                navBar: [ // need to figure this out quickly
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
            type: 'wap-card',
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
                imgs: [{ id: utilService.makeId(4), url: 'fylo-imgs/illustration-intro.png', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
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
            theme: 'theme-card-fylo-v1',
            style: {
                background: 'url()',
                color: '',
                backgroundColor: '',
                fontSize: '',
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
            type: 'wap-gallery',
            info: {
                title: '',
                subtitle: '',
                imgs: [
                    {
                        id: utilService.makeId(4),
                        url: 'fylo-imgs/icon-access-anywhere.svg',
                        title: {
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
                        txt: {
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
                    },
                    {
                        id: utilService.makeId(4),
                        url: 'fylo-imgs/icon-security.svg',
                        title: {
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
                        txt: {
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
                    },
                    {
                        id: utilService.makeId(4),
                        url: 'fylo-imgs/icon-collaboration.svg',
                        title: {
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
                        txt: {
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
                    },
                    {
                        id: utilService.makeId(4),
                        url: 'fylo-imgs/icon-any-file.svg',
                        title: {
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
                        txt: {
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
            type: 'wap-card',
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
                // link: 'See how Fylo works',
                imgs: [{ id: utilService.makeId(4), url: 'fylo-imgs/illustration-stay-productive.png', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
            },
            theme: 'theme-card-fylo-v2',
            style: {
                background: 'url()',
                font: '',
                color: '',
            },
        },
        {
            id: utilService.makeId(4),
            type: "wap-container",
            info: {
                dir: "row",
                cmps: [
                    {
                        id: utilService.makeId(4),
                        type: 'wap-review',
                        info: {
                            reviews: [{
                                id: utilService.makeId(4),
                                txt: [{ id: utilService.makeId(4), txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                name: [{ id: utilService.makeId(4), txt: 'Satish Patel', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                title: [{ id: utilService.makeId(4), txt: 'Founder & CEO, Huddle', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                avatar: [{ id: utilService.makeId(4), url: 'fylo-imgs/profile-1.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                            }]
                            , theme: 'theme-review-fylo',
                            style: {
                                background: 'url()',
                                color: '',
                                backgroundColor: '',
                                fontSize: '',
                                paddingRight: '',
                                paddingTop: '',
                                paddingBottom: '',
                                paddingLeft: '',
                                lineHeight: '',
                                fontFamily: '',
                                fontStyle: '',
                            },
                        }
                    },
                    {
                        id: utilService.makeId(4),
                        type: 'wap-review',
                        info: {
                            reviews: [{
                                id: utilService.makeId(4),
                                txt: [{ id: utilService.makeId(4), txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                name: [{ id: utilService.makeId(4), txt: 'Bruce McKenzie', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                title: [{ id: utilService.makeId(4), txt: 'Founder & CEO, Huddle', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                avatar: [{ id: utilService.makeId(4), url: 'fylo-imgs/profile-2.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                            }]
                            , theme: 'theme-review-fylo',
                            style: {
                                background: 'url()',
                                color: '',
                                backgroundColor: '',
                                fontSize: '',
                                paddingRight: '',
                                paddingTop: '',
                                paddingBottom: '',
                                paddingLeft: '',
                                lineHeight: '',
                                fontFamily: '',
                                fontStyle: '',
                            },
                        }
                    },
                    {
                        id: utilService.makeId(4),
                        type: 'wap-review',
                        info: {
                            reviews: [{
                                id: utilService.makeId(4),
                                txt: [{ id: utilService.makeId(4), txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                name: [{ id: utilService.makeId(4), txt: 'Iva Boyd', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                title: [{ id: utilService.makeId(4), txt: 'Founder & CEO, Huddle', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                                avatar: [{ id: utilService.makeId(4), url: 'fylo-imgs/profile-3.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                            }]
                            , theme: 'theme-review-fylo',
                            style: {
                                background: 'url()',
                                color: '',
                                backgroundColor: '',
                                fontSize: '',
                                paddingRight: '',
                                paddingTop: '',
                                paddingBottom: '',
                                paddingLeft: '',
                                lineHeight: '',
                                fontFamily: '',
                                fontStyle: '',
                            },
                        }
                    },
                ]
            },
            theme: "theme-reviews-fylo",
            style: {
                background: 'url()',
                color: '',
                backgroundColor: '',
                fontSize: '',
                paddingRight: '',
                paddingTop: '',
                paddingBottom: '',
                paddingLeft: '',
                lineHeight: '',
                fontFamily: '',
                fontStyle: '',
            }
        },
        {
            id: utilService.makeId(4),
            type: 'wap-signup',
            info: {
                title: [{
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
                }],
                subtitle: [{
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
                }],
                input: [{
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
                }],
                buttons: [{
                    id: utilService.makeId(4),
                    txt: 'Sign Me Up!',
                    style: {
                        background: 'url()',
                        color: '',
                        backgroundColor: '',
                        fontSize: '',
                        paddingRight: '',
                        paddingTop: '',
                        paddingBottom: '',
                        paddingLeft: '',
                        lineHeight: '',
                        fontFamily: '',
                        fontStyle: '',
                    },
                }],
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



const containerofreviews = {
    id: utilService.makeId(4),
    type: "wap-container",
    info: {
        dir: "row",
        cmps: [
            {
                id: utilService.makeId(4),
                type: 'wap-review',
                info: {
                    reviews: [{
                        id: utilService.makeId(4),
                        txt: [{ id: utilService.makeId(4), txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        name: [{ id: utilService.makeId(4), txt: 'Satish Patel', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        title: [{ id: utilService.makeId(4), txt: 'Founder & CEO, Huddle', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        avatar: [{ id: utilService.makeId(4), url: 'fylo-imgs/profile-1.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                    }]
                    , theme: 'theme-review-fylo',
                    style: {
                        background: 'url()',
                        color: '',
                        backgroundColor: '',
                        fontSize: '',
                        paddingRight: '',
                        paddingTop: '',
                        paddingBottom: '',
                        paddingLeft: '',
                        lineHeight: '',
                        fontFamily: '',
                        fontStyle: '',
                    },
                }
            },
            {
                id: utilService.makeId(4),
                type: 'wap-review',
                info: {
                    reviews: [{
                        id: utilService.makeId(4),
                        txt: [{ id: utilService.makeId(4), txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        name: [{ id: utilService.makeId(4), txt: 'Bruce McKenzie', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        title: [{ id: utilService.makeId(4), txt: 'Founder & CEO, Huddle', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        avatar: [{ id: utilService.makeId(4), url: 'fylo-imgs/profile-2.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                    }]
                    , theme: 'theme-review-fylo',
                    style: {
                        background: 'url()',
                        color: '',
                        backgroundColor: '',
                        fontSize: '',
                        paddingRight: '',
                        paddingTop: '',
                        paddingBottom: '',
                        paddingLeft: '',
                        lineHeight: '',
                        fontFamily: '',
                        fontStyle: '',
                    },
                }
            },
            {
                id: utilService.makeId(4),
                type: 'wap-review',
                info: {
                    reviews: [{
                        id: utilService.makeId(4),
                        txt: [{ id: utilService.makeId(4), txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        name: [{ id: utilService.makeId(4), txt: 'Iva Boyd', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        title: [{ id: utilService.makeId(4), txt: 'Founder & CEO, Huddle', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                        avatar: [{ id: utilService.makeId(4), url: 'fylo-imgs/profile-3.jpg', style: { background: 'url()', color: '', backgroundColor: '', fontSize: '', paddingRight: '', paddingTop: '', paddingBottom: '', paddingLeft: '', lineHeight: '', fontFamily: '', fontStyle: '' } }],
                    }]
                    , theme: 'theme-review-fylo',
                    style: {
                        background: 'url()',
                        color: '',
                        backgroundColor: '',
                        fontSize: '',
                        paddingRight: '',
                        paddingTop: '',
                        paddingBottom: '',
                        paddingLeft: '',
                        lineHeight: '',
                        fontFamily: '',
                        fontStyle: '',
                    },
                }
            },
        ]
    },
    theme: "theme-container-base",
    style: {
        background: 'url()',
        color: '',
        backgroundColor: '',
        fontSize: '',
        paddingRight: '',
        paddingTop: '',
        paddingBottom: '',
        paddingLeft: '',
        lineHeight: '',
        fontFamily: '',
        fontStyle: '',
    }
}






// {
//     id: utilService.makeId(4),
//     type: 'wap-review',
//     info: {
//         // quotesImg: 'fylo-imgs/bg-quotes.png', // NEED TO GET BACK HERE THIS COULD BE COMPLICATED
//         reviews: [
//             {
//                 id: utilService.makeId(4),
//                 txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//                 name: 'Satish Patel',
//                 title: 'Founder & CEO, Huddle',
//                 avatar: 'fylo-imgs/profile-1.jpg',
//             },
//             {
//                 id: utilService.makeId(4),
//                 txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//                 name: 'Bruce McKenzie',
//                 title: 'Founder & CEO, Huddle',
//                 avatar: 'fylo-imgs/profile-2.jpg',
//             },
//             {
//                 id: utilService.makeId(4),
//                 txt: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
//                 name: 'Iva Boyd',
//                 title: 'Founder & CEO, Huddle',
//                 avatar: 'fylo-imgs/profile-3.jpg',
//             },
//         ],
//     },
//     theme: 'theme-review-fylo',
//     style: {
//         background: 'url()',
//         color: '',
//         backgroundColor: '',
//         fontSize: '',
//         paddingRight: '',
//         paddingTop: '',
//         paddingBottom: '',
//         paddingLeft: '',
//         lineHeight: '',
//         fontFamily: '',
//         fontStyle: '',
//     },
// },
