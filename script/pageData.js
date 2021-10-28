function pageDataRender() {
    for (let i = 0; i < pageData.length; i++) {
        pageData[i].render()
    }
}

const mainElement = document.getElementById('main')
const leftbarElement = document.getElementById('leftbar')

const pageData0 = {
    info: {
        id: '0',
        type: 'page',
        name: 'Home',
        subtext: 'Start',
        style: 'blue',
        icon: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m498.195312 222.695312c-.011718-.011718-.023437-.023437-.035156-.035156l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.8125-33.328126-13.8125-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.140626.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.445312 13.238281 31.277344 13.746093.480468.046876.964843.070313 1.453124.070313h8.324219v153.699219c0 30.414062 24.746094 55.160156 55.167969 55.160156h81.710938c8.28125 0 15-6.714844 15-15v-120.5c0-13.878906 11.289062-25.167969 25.167968-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.285156 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.160156v-153.699219h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.808594 18.359375-18.371093 18.367187-48.253906.023437-66.636719zm0 0" /></svg>',
        menuMobile: true,
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
            type: 'shortcut-tray',
            render: function() {
                return colContainerRender(
                    combineSubColElements(pageShortcutElement(2),pageShortcutElement(3)),
                    combineSubColElements(pageShortcutElement(4),pageShortcutElement(5))
                )
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
                return appLinkRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'course-switch',
            data: courseData,
            render: function() {

                var tray = document.createElement('div')
                tray.classList = 'page-width'
                tray.id = 'course-switch-tray'
                // tray.innerHTML = courseHTML

                for (let i = 0; i < this.data.length; i++) {
                    var courseElement = document.createElement('a')
                    courseElement.id = `course-switch-${i}`
                    courseElement.classList = 'switch layer-1 card-shadow clickable'
                    courseElement.style.setProperty('--dataLength',this.data.length)
                    courseElement.onclick = function() { courseSwitch(i) }
                    courseElement.innerHTML = `
                    <div class="icon ${this.data[i].color}">${this.data[i].icon}</div>
                    <div class="grow"></div>
                    <p class="text">${this.data[i].name}</p>`

                    tray.append(courseElement)

                    if (i < this.data.length - 1) {
                        tray.append(spacerElement(10))
                        tray.append(spacerElement(5,'hidden-mobile'))
                    }
                }

                return tray
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'app-list-tray',
            content: [
                {
                    title: 'Apps',
                    devices: null,
                    data: homeAppsApps,
                },
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
        subtext: 'Go',
        style: 'green',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 423.936 423.936"><path d="M327.68 0H96.256c-22.528 0-40.96 18.432-40.96 40.96v357.376c0 9.728 5.632 18.944 14.336 23.04 9.216 4.096 19.456 3.072 27.136-3.072l.512-.512 114.688-96.768 114.688 96.768.512.512c4.608 3.584 10.24 5.632 15.872 5.632 3.584 0 7.68-1.024 11.264-3.072 8.704-4.096 14.336-13.312 14.336-23.04V40.96C368.64 18.432 350.208 0 327.68 0z"/></svg>',
        menuMobile: true,
    },
    content: [
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
        subtext: 'Launch',
        style: 'indigo',
        icon: '<svg x="0px" y="0px" viewBox="0 0 469.333 469.333"><g><path d="M170.667,0h-128C19.135,0,0,19.135,0,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,19.135,194.198,0,170.667,0z"/><path d="M426.667,0h-128C275.135,0,256,19.135,256,42.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C469.333,19.135,450.198,0,426.667,0z"/><path d="M170.667,256h-128C19.135,256,0,275.135,0,298.667v128c0,23.531,19.135,42.667,42.667,42.667h128 c23.531,0,42.667-19.135,42.667-42.667v-128C213.333,275.135,194.198,256,170.667,256z"/><path d="M416,341.333h-32v-32c0-5.896-4.771-10.667-10.667-10.667H352c-5.896,0-10.667,4.771-10.667,10.667v32h-32 c-5.896,0-10.667,4.771-10.667,10.667v21.333c0,5.896,4.771,10.667,10.667,10.667h32v32c0,5.896,4.771,10.667,10.667,10.667 h21.333c5.896,0,10.667-4.771,10.667-10.667v-32h32c5.896,0,10.667-4.771,10.667-10.667V352 C426.667,346.104,421.896,341.333,416,341.333z"/></g></svg>',
        menuMobile: true,
    },
    content: [
        {
            type: 'apps',
            title: 'Shopping',
            devices: null,
            data: shoppingApps,
            render: function () {
                return appLinkRender(this)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'apps',
            title: 'iOS',
            // devices: 'hidden-desktop',
            data: iosSystemApps,
            render: function () {
                return appLinkRender(this)
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
                return appLinkRender(this)
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
                return appLinkRender(this)
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
                return appLinkRender(this)
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
        name: 'TV & Movies',
        subtext: 'Watch',
        style: 'red',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 24 24"><path d="M5 6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5zm5 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10z"/></svg>',
        menuMobile: false,
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
                    <a id="tv-big-play" class="floating clickable" target="_blank">Watch</a>
                    <div id="tv-big-tvtime-spacer" class="spacer-x" style="--size: 10px;"></div>
                    <a id="tv-big-tvtime" class="app floating clickable" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 875 875"><rect class="cls-2" x="175.34" y="174.74" width="174.91" height="174.91"/><rect class="cls-3" x="350.26" y="174.74" width="174.91" height="174.91"/><rect class="cls-4" x="525.17" y="174.74" width="174.91" height="174.91"/><rect class="cls-5" x="350.26" y="349.66" width="174.91" height="174.91"/><rect class="cls-6" x="350.26" y="524.57" width="174.91" height="174.91"/></svg></a>
                    <div id="tv-big-reelgood-spacer" class="spacer-x" style="--size: 10px;"></div>
                    <a id="tv-big-reelgood" class="app floating clickable" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="m14.21 11.477 2.475 4.441h-3.803l-2.014-4.047h-1.4v4.047H6.151v-6.85l3.317-1.791v1.755h2.333c.686 0 1.38-.423 1.38-1.231 0-.809-.694-1.232-1.38-1.232h-.915V3.75h1.382c2.563 0 4.284 1.642 4.284 4.087 0 2.005-1.187 3.183-2.342 3.641zM0 0l8.75 5.032L0 10.064V0zm1.189 4.637h.8v1.997l3.536-2.09L1.189 2.05v2.587z"/></svg></a>
                    <div id="tv-big-imdb-spacer" class="spacer-x" style="--size: 10px;"></div>
                    <a id="tv-big-imdb" class="app floating clickable" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="69.3499984741211 -75.6249885559082 440.6999816894531 440.6999816894531"><path d="M69.35 58.24h45.63v175.65H69.35V58.24Z"></path><path d="M201.2 139.15c-3.92-26.77-6.1-41.65-6.53-44.62-1.91-14.33-3.73-26.8-5.47-37.44h-59.16v175.65h39.97l.14-115.98 16.82 115.98h28.47l15.95-118.56.15 118.56h39.84V57.09h-59.61l-10.57 82.06Z"></path><path d="M346.71 93.63c.5 2.24.76 7.32.76 15.26v68.1c0 11.69-.76 18.85-2.27 21.49-1.52 2.64-5.56 3.95-12.11 3.95V87.13c4.97 0 8.36.53 10.16 1.57 1.8 1.05 2.96 2.69 3.46 4.93Zm20.61 137.32c5.43-1.19 9.99-3.29 13.69-6.28 3.69-3 6.28-7.15 7.76-12.46 1.49-5.3 2.37-15.83 2.37-31.58v-61.68c0-16.62-.65-27.76-1.66-33.42-1.02-5.67-3.55-10.82-7.6-15.44-4.06-4.62-9.98-7.94-17.76-9.96-7.79-2.02-20.49-3.04-42.58-3.04H287.5v175.65h55.28c12.74-.4 20.92-.99 24.54-1.79Z"></path><path d="M464.76 204.7c-.84 2.23-4.52 3.36-7.3 3.36-2.72 0-4.53-1.08-5.45-3.25-.92-2.16-1.37-7.09-1.37-14.81v-46.42c0-8 .4-12.99 1.21-14.98.8-1.97 2.56-2.97 5.28-2.97 2.78 0 6.51 1.13 7.47 3.4.95 2.27 1.43 7.12 1.43 14.55v45.01c-.29 9.25-.71 14.62-1.27 16.11Zm-58.08 26.51h41.08c1.71-6.71 2.65-10.44 2.84-11.19 3.72 4.5 7.81 7.88 12.3 10.12 4.47 2.25 11.16 3.37 16.34 3.37 7.21 0 13.43-1.89 18.68-5.68 5.24-3.78 8.58-8.26 10-13.41 1.42-5.16 2.13-13 2.13-23.54V141.6c0-10.6-.24-17.52-.71-20.77s-1.87-6.56-4.2-9.95c-2.33-3.39-5.72-6.02-10.16-7.9-4.44-1.88-9.68-2.82-15.72-2.82-5.25 0-11.97 1.05-16.45 3.12-4.47 2.07-8.53 5.21-12.17 9.42V55.56h-43.96v175.65Z"></path></svg></a>
                    <div id="tv-big-reddit-spacer" class="spacer-x" style="--size: 10px;"></div>
                    <a id="tv-big-reddit" class="app floating clickable" target="_blank"><svg data-bbox="1.959 3 46.082 42" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"><g><path d="M29 3c-2.105 0-4.566 1.652-4.938 9.031.313-.008.622-.031.938-.031.352 0 .715.02 1.063.031C26.3 7.598 27.355 5 29 5c.703 0 1.102.383 1.844 1.188.867.94 2 2.164 4.218 2.625A6.215 6.215 0 0 1 35 8c0-.422.043-.82.125-1.219-1.375-.375-2.102-1.168-2.813-1.937C31.52 3.984 30.61 3 29 3zm12 1c-2.207 0-4 1.797-4 4 0 2.203 1.793 4 4 4s4-1.797 4-4c0-2.203-1.793-4-4-4zM25 14C12.867 14 3 20.18 3 29s9.867 16 22 16 22-7.18 22-16-9.867-15-22-15zm-17.5.938c-1.46 0-2.848.597-3.906 1.656-1.723 1.722-2.078 4.199-1.094 6.25 1.512-2.926 4.113-5.422 7.469-7.282-.762-.386-1.606-.624-2.469-.624zm35 0c-.863 0-1.707.238-2.469.624 3.356 1.86 5.957 4.356 7.469 7.282.984-2.051.629-4.528-1.094-6.25-1.058-1.059-2.445-1.657-3.906-1.657zM17 23a3 3 0 1 1-.002 6.002A3 3 0 0 1 17 23zm16 0a3 3 0 1 1-.002 6.002A3 3 0 0 1 33 23zM16.062 34c.25.043.497.184.657.406.105.149 2.449 3.282 8.281 3.282 5.91 0 8.258-3.22 8.281-3.25.317-.45.953-.57 1.407-.25.449.316.535.921.218 1.374-.117.168-2.968 4.126-9.906 4.126-6.941 0-9.79-3.958-9.906-4.126-.317-.453-.235-1.058.219-1.374.226-.16.5-.231.75-.188z" /></g></svg></a>
                    <div class="spacer-x" style="--size: 10px;"></div>
                    <a id="tv-big-more" class="app floating clickable"><svg viewBox="0 0 515.555 515.555" xmlns="http://www.w3.org/2000/svg"><path d="M496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path><path d="M110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0"></path></svg></a>
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
                return appLinkRender(this)
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
const pageData4 = {
    info: {
        id: '4',
        type: 'page',
        name: 'Books',
        subtext: 'Read',
        style: 'orange',
        icon: '<svg viewBox="0 -40 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0"></path><path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0"></path><path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0"></path><path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0"></path></svg>',
        menuMobile: false,
    },
    content: [
        {
            render: function() {
                return mediaTitleElement('Reading Now')
            },
        },
        {
            render: function() {
                return bookTrayElement(0)
            }
        },
        {
            type: 'spacer-content',
        },
        {
            type: 'apps',
            title: 'Apps',
            devices: null,
            data: bookApps,
            render: function () {
                return appLinkRender(this)
            }
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
            render: function() {
                return bookTrayElement(1)
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
                return mediaTitleElement('To Read')
            },
        },
        {
            render: function() {
                return bookTrayElement(2)
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
                return mediaTitleElement('Finished')
            },
        },
        {
            render: function() {
                return bookTrayElement(3)
            }
        },
        {
            type: 'spacer-content',
        },
    ],
    render: function() { renderPage(this) },
    open: function() { openPage(this.info.id) },
}
const pageData5 = {
    info: {
        id: '5',
        type: 'page',
        name: 'Podcasts',
        subtext: 'Listen',
        style: 'purple',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="23.878997802734375 25.78700065612793 464.2480163574219 486.2120361328125" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M298.719,508.446c-13.887,2.341-28.16,3.553-42.715,3.553c-13.354,0-26.467-1.024-39.267-2.988 c-8.61-37.073-25.14-134.74-17.032-164.174c7.262-26.331,48.88-29.957,57.96-29.957c9.08,0,50.698,3.626,57.961,29.957 C323.713,374.125,307.37,470.966,298.719,508.446z"></path><circle cx="256" cy="238.38" r="55.39"></circle><path d="M256.003,104.572c-84.553,0-153.339,68.786-153.339,153.339c0,53.655,27.711,100.968,69.58,128.376 c-0.846-14.838-0.773-28.4,0.69-39.111c-23.949-22.277-38.943-54.053-38.943-89.266c0-67.281,54.732-122.013,122.013-122.013 c67.271,0,122.013,54.732,122.013,122.013c0,33.761-13.803,64.366-36.039,86.476c1.787,10.553,2.017,24.325,1.243,39.549 c39.926-27.679,66.121-73.853,66.121-126.025C409.342,173.358,340.546,104.572,256.003,104.572z"></path><path d="M256.003,25.787c-128,0-232.124,104.124-232.124,232.124c0,102.985,67.427,190.527,160.455,220.808 c-1.975-10.836-4.033-22.977-5.893-35.589C106.123,412.734,55.195,341.148,55.195,257.911 c0-110.728,90.081-200.798,200.808-200.798c110.717,0,200.798,90.07,200.798,200.798c0,81.857-49.246,152.451-119.672,183.683 c-1.849,12.706-3.918,24.973-5.914,35.934c91.199-31.326,156.912-117.938,156.912-219.617 C488.127,129.911,383.993,25.787,256.003,25.787z"></path></g></svg>',
        menuMobile: false,
    },
    content: [
        {
            render: function() {
                return mediaTitleElement('Business & Economics')
            },
        },
        {
            render: function() {
                return podTrayElement(0)
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
                return mediaTitleElement('Technology')
            },
        },
        {
            render: function() {
                return podTrayElement(1)
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
                return mediaTitleElement('Stories')
            },
        },
        {
            render: function() {
                return podTrayElement(2)
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
                return mediaTitleElement('Other')
            },
        },
        {
            render: function() {
                return podTrayElement(3)
            }
        },
        {
            type: 'spacer-content',
        },
    ],
    render: function() { renderPage(this) },
    open: function() { openPage(this.info.id) },
}
const pageData6 = {
    info: {
        id: '6',
        type: 'page',
        name: 'Settings',
        subtext: 'Manage',
        style: 'gray6',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2.5 2.5 27.5 27.5"><path d="M27 14h-.172c-.478 0-.904-.337-.98-.809a10.886 10.886 0 0 0-.132-.68c-.106-.464.158-.933.597-1.115l.156-.065a1 1 0 1 0-.766-1.848l-.16.066a.986.986 0 0 1-1.214-.37c-.122-.196-.25-.388-.384-.576-.277-.388-.213-.924.124-1.261l.122-.122a.999.999 0 1 0-1.414-1.414l-.121.124c-.337.337-.873.401-1.261.124-.188-.134-.38-.262-.576-.384-.405-.252-.553-.773-.37-1.214l.066-.16a1.001 1.001 0 0 0-1.848-.766l-.065.156c-.182.439-.651.703-1.115.597a10.886 10.886 0 0 0-.68-.132c-.47-.075-.807-.501-.807-.979V3a1 1 0 0 0-2 0v.172c0 .478-.337.904-.809.98-.229.037-.456.081-.68.132-.464.106-.933-.158-1.115-.597l-.065-.156a1 1 0 1 0-1.848.766l.066.16c.184.44.037.961-.369 1.213-.196.122-.388.25-.575.383-.388.277-.924.214-1.261-.123l-.122-.122a1 1 0 0 0-1.414 1.414l.122.122c.337.337.4.872.123 1.261-.133.187-.261.379-.383.575-.252.406-.773.553-1.214.37l-.16-.066a1.001 1.001 0 0 0-.766 1.848l.156.065c.439.182.703.651.597 1.115-.051.224-.095.451-.132.68-.075.471-.501.808-.979.808H3a1 1 0 0 0 0 2h.172c.478 0 .904.337.98.809.037.229.081.456.132.68.106.464-.158.933-.597 1.115l-.156.065a1 1 0 1 0 .766 1.848l.16-.066a.986.986 0 0 1 1.214.37c.122.196.25.388.384.576.277.388.213.924-.124 1.261l-.122.122a.999.999 0 1 0 1.414 1.414l.122-.122c.337-.337.873-.401 1.261-.124.188.134.38.262.576.384.405.252.553.773.37 1.214l-.066.16a1.001 1.001 0 0 0 1.848.766l.065-.156c.182-.439.651-.703 1.115-.597.224.051.451.095.68.132.469.073.806.499.806.977V27a1 1 0 0 0 2 0v-.172c0-.478.337-.904.809-.98.229-.037.456-.081.68-.132.464-.106.933.158 1.115.597l.065.156a1 1 0 1 0 1.848-.766l-.066-.16a.986.986 0 0 1 .37-1.214c.196-.122.388-.25.576-.384.388-.277.924-.213 1.261.124l.122.122a.999.999 0 1 0 1.414-1.414l-.122-.122c-.337-.337-.401-.873-.124-1.261.134-.188.262-.38.384-.576.252-.405.773-.553 1.214-.37l.16.066a1.001 1.001 0 0 0 .766-1.848l-.156-.065c-.439-.182-.703-.651-.597-1.115.051-.224.095-.451.132-.68.073-.469.499-.806.977-.806H27a1 1 0 0 0 0-2zm-12 9a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/><path d="M15 14h9v2h-9z"/><path d="m11.366 6.706 4.5 7.794-1.732 1-4.5-7.794z"/><path d="m16.115 15.066-4.75 8.227-1.732-1 4.75-8.227z"/><path d="M15 13a2 2 0 1 0 0 4 2 2 0 1 0 0-4Z"/></svg>',
        menuMobile: true,
    },
    content: [
        {
            type: 'shortcut-tray',
            render: function() {
                var widget1 = document.createElement('a')
                widget1.classList = 'widget subcol clickable fill-parent layer-1 card-shadow button-fg'
                // widget1.onclick = function() { showModal(movieData[0][0].name,tvPopupElement(0,0)) }

                widget1.innerHTML = `
                <div id="user-image" style="--user: url(user-image/monke.jpg);"></div>
                <div class="grow"></div>
                <p id="user-name" class="text">Bobcat</p>
                <p class="subtext">Switch user</p>`

                var widget2 = document.createElement('a')
                widget2.classList = 'widget subcol clickable fill-parent layer-1 card-shadow button-fg'
                if ('ontouchstart' in document.documentElement) {
                    widget2.href = 'weather://'
                }

                widget2.innerHTML = `
                <div class="icon black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M8.984 1.986a1 1 0 00-.295.05 1 1 0 00-.091.034 1 1 0 00-.09.045 1 1 0 00-.237.186 1 1 0 00-.17.244 1 1 0 00-.09.285A1 1 0 008 3v1a1 1 0 00.074.39 1 1 0 00.041.09 1 1 0 00.051.086 1 1 0 00.06.082 1 1 0 00.067.073 1 1 0 00.074.068 1 1 0 00.08.059 1 1 0 00.272.127 1 1 0 00.197.035 1 1 0 00.2-.002 1 1 0 00.097-.018 1 1 0 00.19-.06 1 1 0 00.173-.1 1 1 0 00.361-.467A1 1 0 0010 4V3a1 1 0 00-.004-.1 1 1 0 00-.014-.1 1 1 0 00-.056-.19 1 1 0 00-.041-.09 1 1 0 00-.112-.168 1 1 0 00-.066-.073 1 1 0 00-.074-.068 1 1 0 00-.08-.059 1 1 0 00-.086-.05 1 1 0 00-.186-.077 1 1 0 00-.097-.023 1 1 0 00-.2-.016zM3.332 4.332a1 1 0 00-.695 1.719l.707.707a1 1 0 101.414-1.414l-.707-.707a1 1 0 00-.719-.305zm11.305.002a1 1 0 00-.1.008 1 1 0 00-.098.017 1 1 0 00-.095.028 1 1 0 00-.094.037 1 1 0 00-.088.047 1 1 0 00-.213.166l-.707.707a1 1 0 00-.18.236 1 1 0 00-.078.186 1 1 0 000 .59 1 1 0 00.036.093 1 1 0 00.043.09 1 1 0 00.052.086 1 1 0 00.463.367 1 1 0 00.096.031 1 1 0 00.096.022 1 1 0 00.1.014 1 1 0 00.099.002 1 1 0 00.295-.055 1 1 0 00.093-.037 1 1 0 00.25-.164 1 1 0 00.05-.047l.706-.707a1 1 0 00.069-.074 1 1 0 00.113-.165 1 1 0 00.117-.38 1 1 0 000-.2 1 1 0 00-.074-.289 1 1 0 00-.043-.09 1 1 0 00-.053-.085 1 1 0 00-.129-.153 1 1 0 00-.074-.066 1 1 0 00-.168-.108 1 1 0 00-.187-.072 1 1 0 00-.098-.021 1 1 0 00-.2-.014zM9 7a4 4 0 00-4 4 3.994 3.994 0 003.111 3.893 6.46 6.46 0 014.73-2.836c.094-.338.159-.689.159-1.057a4 4 0 00-4-4zm-8 3a1 1 0 100 2h1a1 1 0 100-2H1zm19.5 1a6.492 6.492 0 00-5.617 3.24A4.45 4.45 0 0013.5 14c-2.405 0-4.353 1.893-4.477 4.268C7.268 18.88 6 20.535 6 22.5a4.5 4.5 0 004.5 4.5h15a4.5 4.5 0 004.5-4.5c0-1.974-1.28-3.634-3.049-4.24.03-.25.049-.502.049-.76a6.5 6.5 0 00-6.5-6.5zM4.031 14.94a1 1 0 00-.295.054 1 1 0 00-.181.082 1 1 0 00-.084.055 1 1 0 00-.127.111l-.707.707a1 1 0 00-.182.239 1 1 0 00-.117.58 1 1 0 00.016.097 1 1 0 00.058.192 1 1 0 00.043.09 1 1 0 00.113.166 1 1 0 00.069.072 1 1 0 00.074.066 1 1 0 00.082.059 1 1 0 00.086.049 1 1 0 00.092.04 1 1 0 00.193.053 1 1 0 00.1.012 1 1 0 00.199-.006A1 1 0 004 17.412a1 1 0 00.05-.049l.708-.707a1 1 0 00.258-.422 1 1 0 00.039-.195 1 1 0 00.006-.1 1 1 0 00-.006-.1 1 1 0 00-.014-.099 1 1 0 00-.06-.19 1 1 0 00-.3-.394 1 1 0 00-.081-.058 1 1 0 00-.178-.09 1 1 0 00-.291-.067 1 1 0 00-.1-.002z"></path></svg></div>
                <div class="grow"></div>
                <p id="weather-name" class="text">----</p>
                <p id="weather-hilo" class="subtext">H:--&#176 L:--&#176</p>
                <p id="weather-temp">--&#176</p>`

                var widget3 = document.createElement('a')
                widget3.classList = 'widget subcol clickable fill-parent layer-1 card-shadow button-fg'
                widget3.onclick = function() { showModal('Countdowns',allCountdownsElement()) }

                widget3.innerHTML = `
                <div class="icon red"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm0 26c-.462 0-.895-.113-1.286-.3l-6.007 6.007a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l6.007-6.007A2.969 2.969 0 0 1 22 25a2.99 2.99 0 0 1 2-2.816V8a1 1 0 1 1 2 0v14.184A2.99 2.99 0 0 1 28 25a3 3 0 0 1-3 3z"/></svg></div>
                <div class="grow"></div>
                <p id="countdown-name" class="text"></p>
                <p class="subtext">Countdown</p>
                <div class="countdown-info vstack">
                    <p id="countdown-no"></p>
                    <p id="countdown-period"></p>
                </div>`

                var widget4 = document.createElement('a')
                widget4.classList = 'widget subcol clickable fill-parent layer-1 card-shadow button-fg'
                widget4.innerHTML = `
                <div class="icon blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M8.984 1.986a1 1 0 00-.295.05 1 1 0 00-.091.034 1 1 0 00-.09.045 1 1 0 00-.237.186 1 1 0 00-.17.244 1 1 0 00-.09.285A1 1 0 008 3v1a1 1 0 00.074.39 1 1 0 00.041.09 1 1 0 00.051.086 1 1 0 00.06.082 1 1 0 00.067.073 1 1 0 00.074.068 1 1 0 00.08.059 1 1 0 00.272.127 1 1 0 00.197.035 1 1 0 00.2-.002 1 1 0 00.097-.018 1 1 0 00.19-.06 1 1 0 00.173-.1 1 1 0 00.361-.467A1 1 0 0010 4V3a1 1 0 00-.004-.1 1 1 0 00-.014-.1 1 1 0 00-.056-.19 1 1 0 00-.041-.09 1 1 0 00-.112-.168 1 1 0 00-.066-.073 1 1 0 00-.074-.068 1 1 0 00-.08-.059 1 1 0 00-.086-.05 1 1 0 00-.186-.077 1 1 0 00-.097-.023 1 1 0 00-.2-.016zM3.332 4.332a1 1 0 00-.695 1.719l.707.707a1 1 0 101.414-1.414l-.707-.707a1 1 0 00-.719-.305zm11.305.002a1 1 0 00-.1.008 1 1 0 00-.098.017 1 1 0 00-.095.028 1 1 0 00-.094.037 1 1 0 00-.088.047 1 1 0 00-.213.166l-.707.707a1 1 0 00-.18.236 1 1 0 00-.078.186 1 1 0 000 .59 1 1 0 00.036.093 1 1 0 00.043.09 1 1 0 00.052.086 1 1 0 00.463.367 1 1 0 00.096.031 1 1 0 00.096.022 1 1 0 00.1.014 1 1 0 00.099.002 1 1 0 00.295-.055 1 1 0 00.093-.037 1 1 0 00.25-.164 1 1 0 00.05-.047l.706-.707a1 1 0 00.069-.074 1 1 0 00.113-.165 1 1 0 00.117-.38 1 1 0 000-.2 1 1 0 00-.074-.289 1 1 0 00-.043-.09 1 1 0 00-.053-.085 1 1 0 00-.129-.153 1 1 0 00-.074-.066 1 1 0 00-.168-.108 1 1 0 00-.187-.072 1 1 0 00-.098-.021 1 1 0 00-.2-.014zM9 7a4 4 0 00-4 4 3.994 3.994 0 003.111 3.893 6.46 6.46 0 014.73-2.836c.094-.338.159-.689.159-1.057a4 4 0 00-4-4zm-8 3a1 1 0 100 2h1a1 1 0 100-2H1zm19.5 1a6.492 6.492 0 00-5.617 3.24A4.45 4.45 0 0013.5 14c-2.405 0-4.353 1.893-4.477 4.268C7.268 18.88 6 20.535 6 22.5a4.5 4.5 0 004.5 4.5h15a4.5 4.5 0 004.5-4.5c0-1.974-1.28-3.634-3.049-4.24.03-.25.049-.502.049-.76a6.5 6.5 0 00-6.5-6.5zM4.031 14.94a1 1 0 00-.295.054 1 1 0 00-.181.082 1 1 0 00-.084.055 1 1 0 00-.127.111l-.707.707a1 1 0 00-.182.239 1 1 0 00-.117.58 1 1 0 00.016.097 1 1 0 00.058.192 1 1 0 00.043.09 1 1 0 00.113.166 1 1 0 00.069.072 1 1 0 00.074.066 1 1 0 00.082.059 1 1 0 00.086.049 1 1 0 00.092.04 1 1 0 00.193.053 1 1 0 00.1.012 1 1 0 00.199-.006A1 1 0 004 17.412a1 1 0 00.05-.049l.708-.707a1 1 0 00.258-.422 1 1 0 00.039-.195 1 1 0 00.006-.1 1 1 0 00-.006-.1 1 1 0 00-.014-.099 1 1 0 00-.06-.19 1 1 0 00-.3-.394 1 1 0 00-.081-.058 1 1 0 00-.178-.09 1 1 0 00-.291-.067 1 1 0 00-.1-.002z"></path></svg></div>
                <div class="grow"></div>
                <p id="current-location" class="text">----</p>
                <p class="subtext">Location</p>`
                

                return colContainerRender(
                    combineSubColElements(widget1,widget2),
                    combineSubColElements(widget3,widget4)
                )
            }
        },
    ],
    render: function() { renderPage(this) },
    open: function() { openPage(this.info.id) },
}

const pageData = [
    pageData0,
    pageData1,
    pageData2,
    pageData3,
    pageData4,
    pageData5,
    pageData6,
]

function renderPage(page) {
    mainElement.append(renderPageElement(page))
    leftbarElement.append(renderMenuElement(page))
}

function renderPageElement(page) {
    var pageElement = document.createElement('div')
    pageElement.id = `page-${page.info.id}`
    pageElement.classList = 'page hidden'
    pageElement.onscroll = function() {
        headerScroll(page.info.id)
    }

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

    document.getElementById('header').innerHTML = pageData[n].info.name
    headerScroll(n)
    setCookie('page',n,10/86400)

    oldPage = n
}

function renderMenuElement(page) {
    var menuItem = document.createElement('div')
    menuItem.id = `menu-item-${page.info.id}`
    menuItem.classList = 'menu-item'
    menuItem.onclick = function() { page.open() }

    if (!page.info.menuMobile) {
        menuItem.classList.add('hidden-mobile')
    }

    var menuItemContent = `
    <div class="icon">${page.info.icon}</div>
    <div class="spacer-x hidden-mobile" style="--size: 10px;"></div>
    <p>${page.info.name}</p>`

    menuItem.innerHTML = menuItemContent
    return menuItem
}