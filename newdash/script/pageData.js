function pageDataRender() {
    for (let i = 0; i < pageData.length; i++) {
        pageData[i].render()
    }

    pageData[0].open()
    // pageData1.open()
}

const mainElement = document.getElementById('main')
const leftbarElement = document.getElementById('leftbar')

const pageData0 = {
    info: {
        id: '0',
        type: 'page',
        name: 'Home',
        style: 'blue',
        icon: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" /></svg>',
    },
    content: [
        {
            type: 'search',
            engine: 'Google',
            link: googleLoad(),
            render: function() {
                return searchElement(this)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'apps',
            title: 'Productivity',
            devices: null,
            data: productivityApps,
            render: function () {
                return bookmarkRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'app-list-tray',
            content: [
                {
                    title: 'Pinned',
                    devices: null,
                    data: pinnedHomeApps,
                },
                {
                    title: 'Notes',
                    devices: null,
                    data: notionApps,
                },
            ],
            render: function () {
                return appListTrayRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
    ],
    render: function() { renderPage(this) },
    open: function() { openPage(this.info.id) },
}
const pageData1 = {
    info: {
        id: '1',
        type: 'page',
        name: 'Bookmarks',
        style: 'pink',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 423.936 423.936"><path d="M327.68 0H96.256c-22.528 0-40.96 18.432-40.96 40.96v357.376c0 9.728 5.632 18.944 14.336 23.04 9.216 4.096 19.456 3.072 27.136-3.072l.512-.512 114.688-96.768 114.688 96.768.512.512c4.608 3.584 10.24 5.632 15.872 5.632 3.584 0 7.68-1.024 11.264-3.072 8.704-4.096 14.336-13.312 14.336-23.04V40.96C368.64 18.432 350.208 0 327.68 0z"/></svg>',
    },
    content: [
        {
            type: 'apps',
            title: 'Shopping',
            devices: null,
            data: shoppingApps,
            render: function () {
                return bookmarkRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'app-list-tray',
            content: [
                {
                    title: 'Pinned',
                    devices: null,
                    data: pinnedBookmarksApps,
                },
                {
                    title: 'Design',
                    devices: null,
                    data: designApps,
                },
                {
                    title: 'Apartment',
                    devices: null,
                    data: apartmentApps,
                },
            ],
            render: function () {
                return appListTrayRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
    ],
    render: function() { renderPage(this) },
    open: function() { openPage(this.info.id) },
}
const pageData2 = {
    info: {
        id: '2',
        type: 'page',
        name: 'Apps',
        style: 'indigo',
        icon: '<svg x="0px" y="0px" viewBox="0 0 469.333 469.333"><g><path d="M170.667,0h-128C19.135,0,0,19.135,0,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,19.135,194.198,0,170.667,0z"/><path d="M426.667,0h-128C275.135,0,256,19.135,256,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C469.333,19.135,450.198,0,426.667,0z"/><path d="M170.667,256h-128C19.135,256,0,275.135,0,298.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,275.135,194.198,256,170.667,256z"/><path d="M416,341.333h-32v-32c0-5.896-4.771-10.667-10.667-10.667H352c-5.896,0-10.667,4.771-10.667,10.667v32h-32 c-5.896,0-10.667,4.771-10.667,10.667v21.333c0,5.896,4.771,10.667,10.667,10.667h32v32c0,5.896,4.771,10.667,10.667,10.667 h21.333c5.896,0,10.667-4.771,10.667-10.667v-32h32c5.896,0,10.667-4.771,10.667-10.667V352 C426.667,346.104,421.896,341.333,416,341.333z"/></g></svg>',
    },
    content: [
        {
            type: 'apps',
            title: 'iOS',
            // devices: 'hidden-desktop',
            data: iosSystemApps,
            render: function () {
                return bookmarkRender(this)
            }
        },
        {
            type: 'spacer-content',
            // devices: 'hidden-desktop',
        },
        {
            type: 'apps',
            title: 'Finance',
            // devices: 'hidden-desktop',
            data: financeApps,
            render: function () {
                return bookmarkRender(this)
            }
        },
        {
            type: 'spacer-content',
            // devices: 'hidden-desktop',
        },
        {
            type: 'apps',
            title: 'Learning',
            devices: null,
            data: learningApps,
            render: function () {
                return bookmarkRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'apps',
            title: 'Social',
            devices: null,
            data: socialApps,
            render: function () {
                return bookmarkRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'app-list-tray',
            content: [
                {
                    title: 'Pinned',
                    devices: null,
                    data: pinnedAppsApps,
                },
            ],
            render: function () {
                return appListTrayRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
    ],
    render: function() { renderPage(this) },
    open: function() { openPage(this.info.id) },
}
const pageData3 = {
    info: {
        id: '3',
        type: 'page',
        name: 'Video',
        style: 'red',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 24 24"><path d="M5 6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5zm5 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10z"/></svg>',
    },
    content: [
        {
            render: function() {
                return mediaTitleElement('Watch Now')
            },
        },
        {
            type: 'tv-big',
            render: function () {
                var tvBigCard = document.createElement('div')
                tvBigCard.id = 'tv-big-card'
                tvBigCard.classList = 'card-shadow'
                tvBigCard.innerHTML = `
                <div class="gradient"></div>
                <div class="button-tray">
                    <a id="tv-big-play" class="clickable" target="_blank">Watch</a>
                    <div class="spacer-x" style="--size: 10px;"></div>
                    <a id="tv-big-more" class="clickable"><svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg></a>
                </div>
                <div id="tv-big-title"></div>
                <div id="tv-big-service"></div>`

                return tvBigCard
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('Up Next')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvMidTray(0)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'apps',
            title: 'Apps',
            devices: null,
            data: videoApps,
            render: function () {
                return bookmarkRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('Weekly')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvMidTray(1)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('My List')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvSmallTray(2)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('Movies')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvMidTray(3)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('New')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvMidTray(4)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('Paused')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvSmallTray(5)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('Coming Soon')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvMidTray(6)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('Up to Date')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvSmallTray(7)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('Rewatch')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvSmallTray(8)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return hlineContentElement()
            },
        },
        {
            type: 'spacer-content',
        },
        {
            render: function() {
                return mediaTitleElement('Recently Watched Movies')
            },
        },
        {
            type: 'tv-med',
            render: function() {
                return tvMidTray(9)
            }
        },
        {
            type: 'spacer-content',
        },
    ],
    render: function() { renderPage(this) },
    open: function() {
        openPage(this.info.id)
        videoRefresh()
    },
}

const pageData = [
    pageData0,
    pageData1,
    pageData2,
    pageData3,
]

function renderPage(page) {
    mainElement.append(renderPageElement(page))
    leftbarElement.append(renderMenuElement(page))
}

function renderPageElement(page) {
    var pageElement = document.createElement('div')
    pageElement.id = `page-${page.info.id}`
    pageElement.classList = 'page hidden'

    for (let i = 0; i < page.content.length; i++) {
        // console.log(renderContent(page.content[i]))
        pageElement.append(renderContent(page.content[i]))
    }

    // renderContent(page)



    // pageElement.innerHTML = 'lsaihglkadjbfglkhd'

    return pageElement
}

function renderContent(content) {
    var contentElement

    if (content.render) {
        return content.render()
    } else {
        if (content.type == 'spacer-content') {
            contentElement = document.createElement('div')
            contentElement.classList = 'spacer-content'
            if (content.devices) {
                contentElement.classList.add(content.devices)
            }
        } else {
            console.log(content)
            return 'oops'
        }
    }

    return contentElement
}

var oldPage = 0
function openPage(n) {
    document.getElementById(`page-${oldPage}`).classList.add('hidden')
    document.getElementById(`menu-item-${oldPage}`).classList.remove('selected')

    document.getElementById(`page-${n}`).classList.remove('hidden')
    document.getElementById(`menu-item-${n}`).classList.add('selected')

    oldPage = n
}

function renderMenuElement(page) {
    var menuItem = document.createElement('div')
    menuItem.id = `menu-item-${page.info.id}`
    menuItem.classList = 'menu-item'
    menuItem.onclick = function() { page.open() }

    var menuItemContent = `
    <div class="icon">${page.info.icon}</div>
    <div class="spacer-x hidden-mobile" style="--size: 10px;"></div>
    <p>${page.info.name}</p>`

    menuItem.innerHTML = menuItemContent
    return menuItem
}