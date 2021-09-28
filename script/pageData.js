const page0 = {
    info: {
        type: 'page',
        name: 'Home',
        style: 'blue',
        icon: '<svg class="icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" /></svg>',
        trigger: 'mainRefresh();menuSwitch(0)',
    },
    content: [
        {
            type: 'target',
            id:'productivity-tray',
        },
        {
            type: 'target',
            id:'note-tray',
        },
        {
            type: 'target',
            id:'pinned-home-tray',
        },
        {
            type: 'target',
            id:'notion-tray',
        },
        {
            type: 'target',
            id:'course-switch-tray',
        },
        {
            type: 'target',
            id:'course-switch-content-tray',
        },
        {
            type: 'target',
            id:'media-switch-tray',
        },
        {
            type: 'target',
            id:'media-switch-content-tray',
        },
    ],
    render: function() {
        pageRender(this.content,0)
        
        appType('action',productivityApps,'productivity-tray',null,null)
        appType('action',noteApps,'note-tray',null,null)
        appType('link',pinnedHomeApps,'pinned-home-tray','Pinned',null)
        appType('link',notionApps,'notion-tray','Notion',null)
    }
}
const page1 = {
    info: {
        type: 'page',
        name: 'Bookmarks',
        style: 'pink',
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 423.936 423.936"><path d="M327.68 0H96.256c-22.528 0-40.96 18.432-40.96 40.96v357.376c0 9.728 5.632 18.944 14.336 23.04 9.216 4.096 19.456 3.072 27.136-3.072l.512-.512 114.688-96.768 114.688 96.768.512.512c4.608 3.584 10.24 5.632 15.872 5.632 3.584 0 7.68-1.024 11.264-3.072 8.704-4.096 14.336-13.312 14.336-23.04V40.96C368.64 18.432 350.208 0 327.68 0z"/></svg>',
        trigger: 'menuSwitch(1)',
    },
    content: [
        {
            type: 'target',
            id:'shopping-tray',
        },
        {
            type: 'target',
            id:'pinned-bookmarks-tray',
        },
        {
            type: 'target',
            id:'design-tray',
        },
        {
            type: 'target',
            id:'apartment-tray',
        },
        {
            type: 'target',
            id:'course-switch-content-tray',
        },
        {
            type: 'target',
            id:'media-switch-tray',
        },
        {
            type: 'target',
            id:'media-switch-content-tray',
        },
    ],
    render: function() {
        pageRender(this.content,1)
        
        appType('action',shoppingApps,'shopping-tray',null,null)
        appType('link',pinnedBookmarksApps,'pinned-bookmarks-tray','Pinned',null)
        appType('link',designApps,'design-tray','Design',null)
        appType('link',apartmentApps,'apartment-tray','Apartment',null)
    }
}
const page2 = {
    info: {
        type: 'page',
        name: 'Apps',
        style: 'indigo',
        icon: '<svg class="icon" x="0px" y="0px" viewBox="0 0 469.333 469.333"><g><path d="M170.667,0h-128C19.135,0,0,19.135,0,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,19.135,194.198,0,170.667,0z"/><path d="M426.667,0h-128C275.135,0,256,19.135,256,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C469.333,19.135,450.198,0,426.667,0z"/><path d="M170.667,256h-128C19.135,256,0,275.135,0,298.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,275.135,194.198,256,170.667,256z"/><path d="M416,341.333h-32v-32c0-5.896-4.771-10.667-10.667-10.667H352c-5.896,0-10.667,4.771-10.667,10.667v32h-32 c-5.896,0-10.667,4.771-10.667,10.667v21.333c0,5.896,4.771,10.667,10.667,10.667h32v32c0,5.896,4.771,10.667,10.667,10.667 h21.333c5.896,0,10.667-4.771,10.667-10.667v-32h32c5.896,0,10.667-4.771,10.667-10.667V352 C426.667,346.104,421.896,341.333,416,341.333z"/></g></svg>',
        trigger: 'menuSwitch(2)',
    },
    content: [
        {
            type: 'target',
            id:'ios-system-tray',
        },
        {
            type: 'target',
            id:'finance-tray',
        },
        {
            type: 'target',
            id:'learning-tray',
        },
        {
            type: 'target',
            id:'social-tray',
        },
        {
            type: 'target',
            id:'pinned-social-tray',
        },
    ],
    render: function() {
        pageRender(this.content,2)
        
        appType('action',iosSystemApps,'ios-system-tray',null,'hidden-desktop')
        appType('action',financeApps,'finance-tray','Finance','only-mobile')
        appType('action',learningApps,'learning-tray','Learning',null)
        appType('action',socialApps,'social-tray','Social',null)
        appType('link',pinnedAppsApps,'pinned-social-tray','Pinned',null)
    }
}
const page3 = {
    info: {
        type: 'page',
        name: 'School',
        style: 'purple',
        icon: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361 8.787V100h91.213zM149.565 250.713h53.077l-26.417-69.999z"/><path d="M346 130c-8.284 0-15-6.716-15-15V0H66c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h380c8.284 0 15-6.716 15-15V130zm-80 40h15v-15c0-8.284 6.716-15 15-15s15 6.716 15 15v15h15c8.284 0 15 6.716 15 15s-6.716 15-15 15h-15v15c0 8.284-6.716 15-15 15s-15-6.716-15-15v-15h-15c-8.284 0-15-6.716-15-15s6.716-15 15-15zm-21.542 149.034c-1.744.658-3.534.97-5.294.97-6.062 0-11.77-3.701-14.036-9.708l-11.164-29.583H138.14l-11.283 29.626c-2.949 7.742-11.615 11.627-19.356 8.679-7.742-2.948-11.627-11.615-8.679-19.356l60.08-157.747c.043-.114.088-.227.134-.339 2.873-7.024 9.633-11.568 17.222-11.575h.019c7.582 0 14.341 4.528 17.226 11.541.056.136.109.272.161.409l59.534 157.753c2.923 7.751-.99 16.405-8.74 19.33zM386 450H266c-8.284 0-15-6.716-15-15s6.716-15 15-15h120c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60H266c-8.284 0-15-6.716-15-15s6.716-15 15-15h120c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/></svg>',
        trigger: 'menuSwitch(3)',
    },
    content: [
        {
            type: 'target',
            id:'school-1-tray',
        },
    ],
    render: function() {
        pageRender(this.content,3)
        
        appType('action',schoolApps,'school-1-tray',null,null)
    }
}
const page4 = {
    info: {
        type: 'page',
        name: 'Media',
        style: 'red',
        icon: '<svg class="icon" data-bbox="15.49 8.193 132.882 147.475" viewBox="0 0 163.861 163.861" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M39.564 11.445C26.27 3.818 15.49 10.065 15.49 25.388v113.074c0 15.338 10.78 21.577 24.075 13.958l98.832-56.68c13.3-7.629 13.3-19.99 0-27.617L39.564 11.445z" xmlns="http://www.w3.org/2000/svg" /></g></svg>',
        trigger: 'menuSwitch(4)',
    },
    content: [
        {
            type: 'target',
            id:'news-app-tray',
        },
        {
            type: 'target',
            id:'news-tray',
        },
        {
            type: 'media-title',
            title: 'YouTube',
        },
        {
            type: 'target',
            id:'youtube-tray',
        },
        {
            type: 'media-title',
            title: 'Books',
        },
        {
            type: 'target',
            id:'book-tray',
        },
        {
            type: 'target',
            id:'audio-tray',
        },
        {
            type: 'target',
            id:'news-tray',
        },
        {
            type: 'media-title',
            title: 'Podcasts',
        },
        {
            type: 'target',
            id:'pod-tray',
        },
        {
            type: 'target',
            id:'video-tray',
        },
    ],
    render: function() {
        pageRender(this.content,4)
        
        appType('link',newsApps,'news-app-tray','News',null)
        appType('link',audioApps,'audio-tray','Audio',null)
        appType('link',videoApps,'video-tray','TV & Video',null) 
    }
}

const pages = {
    items: [
        page0,
        page1,
        page2,
        page3,
        page4,
    ],
    render: function() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].render()
        }
    },
}


function pageRender(content,n) {
    const mainTarget = document.getElementById(`main-${n}`)
    mainTarget.innerHTML = ''

    for (i = 0; i < content.length; i++) {

        if (content[i].type == 'target') {
            var element = document.createElement('div')
            element.id = content[i].id
        } else if (content[i].type == 'media-title'){
            var element = document.createElement('div')
            element.classList = 'media-title'
            element.innerHTML = content[i].title
        }


        mainTarget.append(element)
    }




}