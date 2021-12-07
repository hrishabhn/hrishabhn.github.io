const focusData = [
    {
        name: 'None',
        background: 'layer-2',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path d="M12 3a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 11c-3.004 0-9 1.508-9 4.5V20c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-1.5c0-2.992-5.996-4.5-9-4.5z"/></svg>',
        action: function() { setFocus(0) },
        apps: [
            {
                name: "Outlook",
                background: "outlook",
                link: "ms-outlook://",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="1.5190010070800781 12.5775146484375 497.6650085449219 497.6650085449219"><path d="M432.828 23.637h-276.48c-18.325 0-33.176 14.851-33.176 33.18v22.117h342.832V56.816c0-18.328-14.852-33.18-33.176-33.18zm43.574 470.015c-6.304 3.54-13.714 5.532-21.457 5.532H134.23c-24.44 0-44.238-19.797-44.238-44.239V388.59h99.531c12.055 0 23.227-3.871 32.293-10.504zm22.782-170.53v131.823c0 7.965-2.102 15.485-5.973 22.008l-173.852-78.851zM366.473 101.05h99.53v77.414h-99.53zm-121.653 0h99.535v77.414H244.82zm121.653 99.535h99.53V278h-99.53zm-121.653 0h99.535V278H244.82zm99.535 99.531v63.59l-52.53 21.898-47.005-21.343v-64.145zm121.649 0v12.828l-99.531 41.582v-54.41zm-243.3-199.066v33.18c-9.18-6.97-20.68-11.06-33.18-11.06h-66.352v-22.12zm-33.18 265.422H34.694c-18.324 0-33.175-14.852-33.175-33.176V178.465c0-18.324 14.851-33.176 33.175-33.176h154.828c18.329 0 33.18 14.852 33.18 33.176v154.832c0 18.324-14.851 33.176-33.18 33.176zm-77.415-176.95c-38.882 0-62.304 29.707-62.304 66.356 0 36.652 23.332 66.355 62.304 66.355 38.985 0 62.309-29.703 62.309-66.343 0-36.66-23.422-66.368-62.309-66.368zm0 110.317c-22.062 0-35.242-19.672-35.242-43.95 0-24.273 13.246-43.949 35.242-43.949 22 0 35.258 19.688 35.258 43.95 0 24.265-13.203 43.949-35.258 43.949zm0 0"></path></svg>',
            },
            {
                name: "OneDrive",
                background: "onedrive",
                link: "https://purdue0-my.sharepoint.com",
                icon: '<svg data-bbox="0 9.594 50.023 30.407" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" data-type="shape"> <g> <path d="M27.406 9.594c-1.816 0-3.379.355-4.75 1.094-1.418.707-2.996 2.019-3.75 3.093-.281.375-.543.719-.718.938-2.086-.79-4.56-.89-6.282-.281-3.539 1.14-6.11 4.582-6.219 8.374 0 .215-.011.422-.03.594-.036.012-.087.02-.126.032-2.215.582-3.992 1.968-4.906 3.843C-.012 28.2 0 28.785 0 30.406c0 1.746-.004 2.153.594 3.219.93 1.973 2.976 3.695 4.937 4.156.516.145 2.801.196 4.969.219-.969-1.543-1.5-3.438-1.5-5.594 0-1.484.156-2.37.625-3.468 1.008-2.442 3.371-4.317 6.375-5.125.059-.192.113-.407.188-.594 1.015-2.899 2.917-5.309 5.093-6.469l.032-.031h.03c2.063-1.032 3.321-1.313 5.657-1.313 3.441 0 5.559.864 7.938 3.281.886-.23 1.78-.375 2.687-.375.309 0 .61.036.906.063-.09-.297-.18-.602-.281-.906-1.668-4.785-5.922-7.875-10.844-7.875zM27 17.406c-2.016 0-3 .203-4.781 1.094-1.754.934-3.309 3-4.157 5.438-.199.496-.347 1.039-.375 1.437-.113.05-.304.145-.687.25-2.633.57-4.715 2.082-5.531 4.063-.367.863-.469 1.511-.469 2.718 0 3.828 1.89 6.547 5.219 7.469.039.012.082.023.125.031.77.11 3.86.094 15.343.094H46a.94.94 0 0 0 .438-.094l.624-.312c1.657-.828 2.688-2.574 2.938-4.938.23-3.351-1.242-5.668-4.281-6.718l-.282-.094-.03-.532c-.36-4.046-3.637-7-7.782-7-.996 0-1.98.192-2.938.532l-.312.093-.656-.625C31.625 18.105 30 17.407 27 17.407z" /></g></svg>',
            },
            {
                name: "To do",
                background: "cyan",
                link: "https://app.clickup.com/8450846/v/l/6-48362200-1",
                icon: '<svg viewBox="0 0 405.272 405.272" xml:space="preserve"><g><path d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836 c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064 c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z" /></g></svg>',
            },
            {
                name: "Homework",
                background: "green",
                link: "https://app.clickup.com/8450846/v/l/4-20137584-1",
                icon: '<svg viewBox="0 -40 448 448" xmlns="http://www.w3.org/2000/svg"><path d="m408 319.929688v-319.929688l-12.207031 1.023438c-48.957031 4.046874-96.976563 15.75-142.304688 34.6875l-21.488281 8.921874v318.664063l15.648438-6.503906c46.90625-19.515625 96.570312-31.589844 147.199218-35.792969zm0 0" /><path d="m448 47.296875h-24v280c.015625 4.171875-3.183594 7.65625-7.34375 8l-20.488281 1.679687c-5.914063.488282-11.8125 1.09375-17.6875 1.816407-1.90625.230469-3.800781.535156-5.695313.800781-3.960937.527344-7.914062 1.0625-11.855468 1.6875-2.296876.367188-4.578126.796875-6.867188 1.199219-3.527344.617187-7.0625 1.230469-10.582031 1.925781-2.402344.480469-4.800781 1.019531-7.25 1.539062-3.351563.710938-6.703125 1.4375-10.03125 2.230469-2.496094.59375-4.984375 1.222657-7.464844 1.855469-3.238281.800781-6.460937 1.664062-9.679687 2.5625-2.503907.6875-5.007813 1.414062-7.503907 2.148438-3.199219.945312-6.351562 1.90625-9.511719 2.914062-2.472656.800781-4.949218 1.601562-7.414062 2.398438-3.164062 1.066406-6.3125 2.167968-9.449219 3.304687-2.398437.871094-4.800781 1.746094-7.253906 2.664063-1.097656.417968-2.1875.863281-3.28125 1.289062h183.359375zm0 0" /><path d="m52.207031 1.023438-12.207031-1.023438v319.953125l14.199219 1.207031c50.597656 4.230469 100.21875 16.378906 147.046875 36l14.753906 6.136719v-318.664063l-21.464844-8.914062c-45.332031-18.941406-93.359375-30.648438-142.328125-34.695312zm0 0" /><path d="m0 47.296875v320h183.488281c-.984375-.386719-1.96875-.800781-2.960937-1.167969-2.289063-.871094-4.597656-1.703125-6.902344-2.542968-3.25-1.179688-6.496094-2.328126-9.769531-3.425782-2.367188-.800781-4.742188-1.578125-7.121094-2.335937-3.246094-1.066407-6.503906-2.070313-9.765625-3.007813-2.402344-.703125-4.800781-1.410156-7.199219-2.082031-3.289062-.910156-6.585937-1.773437-9.890625-2.621094-2.398437-.617187-4.800781-1.234375-7.253906-1.808593-3.351562-.800782-6.722656-1.535157-10.089844-2.257813-2.398437-.519531-4.800781-1.046875-7.199218-1.527344-3.488282-.6875-6.992188-1.304687-10.496094-1.917969-2.296875-.402343-4.59375-.800781-6.894532-1.210937-3.867187-.613281-7.746093-1.132813-11.625-1.65625-1.960937-.261719-3.90625-.574219-5.863281-.796875-5.867187-.710938-11.734375-1.316406-17.601562-1.816406l-21.535157-1.824219c-4.152343-.355469-7.335937-3.835937-7.320312-8v-280zm0 0" /></svg>',
            },
            {
                name: "Walmart",
                background: "walmart",
                link: "https://www.walmart.com/orders",
                icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.406 23.367c0-14.262-17.332-25.812-38.719-25.812-21.386 0-38.722 11.55-38.722 25.812 0 11.965 12.91 117.606 12.91 124.77 0 9.496 11.55 17.203 25.813 17.203 14.261 0 25.812-7.707 25.812-17.203 0-7.164 12.906-112.805 12.906-124.77zm-77.441 464.64c0 14.263 17.336 25.813 38.722 25.813 21.387 0 38.72-11.55 38.72-25.812 0-11.965-12.907-117.606-12.907-124.77 0-9.5-11.55-17.207-25.813-17.207-14.261 0-25.812 7.707-25.812 17.207 0 7.164-12.91 112.805-12.91 124.77zM72.297 103.22c-12.352-7.125-31.027 2.105-41.715 20.625-10.687 18.523-9.36 39.316 2.992 46.437 10.367 5.992 108.301 47.63 114.508 51.203 8.234 4.75 20.68-1.406 27.816-13.746 7.125-12.351 6.235-26.215-2-30.965-6.21-3.585-91.226-67.578-101.601-73.554zm366.781 304.933c12.352 7.125 31.027-2.101 41.715-20.625 10.684-18.52 9.355-39.312-2.996-46.437-10.363-5.988-108.3-47.625-114.508-51.2-8.234-4.75-20.676 1.407-27.812 13.747-7.125 12.351-6.235 26.21 2 30.96 6.207 3.59 91.222 67.579 101.601 73.555zm0-304.933c12.352-7.125 31.027 2.105 41.715 20.625 10.684 18.523 9.355 39.316-2.996 46.437-10.363 5.992-108.3 47.63-114.508 51.203-8.234 4.75-20.676-1.406-27.812-13.746-7.125-12.351-6.235-26.215 2-30.965 6.207-3.585 91.222-67.578 101.601-73.554zM72.297 408.152c-12.352 7.125-31.027-2.101-41.715-20.625-10.687-18.52-9.36-39.312 2.992-46.437 10.367-5.988 108.301-47.625 114.508-51.2 8.234-4.75 20.68 1.407 27.816 13.747 7.125 12.351 6.235 26.21-2 30.96-6.21 3.59-91.226 67.579-101.601 73.555zm0 0" fill="#ffc120"/></svg>',
            },
            {
                name: "Amazon",
                background: "amazon",
                link: "https://www.amazon.com/gp/css/order-history",
                icon: '<svg data-bbox="12.941 12.5 485.007 499.203" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-type="color"><path d="M455.383 447.703c-53.762 39.68-134.403 64-199.68 64-93.441 0-176.64-37.121-240.64-94.723-5.122-5.117 0-10.238 5.117-7.68 69.12 39.68 147.203 62.72 234.242 62.72 58.879 0 133.121-12.797 193.281-38.399 8.957-2.558 16.637 7.68 7.68 14.082zm19.199-26.883c-6.402-8.957-44.8-3.84-61.441-2.558-5.121 0-6.399-3.84-1.278-7.68 29.438-21.762 79.36-15.36 84.477-7.68 5.12 7.68-1.277 57.598-29.438 80.641-3.84 3.84-8.96 1.277-6.402-2.563 6.402-15.359 20.48-51.199 14.082-60.16zm0 0" fill="#f90" data-color="1"/><path d="M420.82 329.941c-12.8-16.64-25.597-30.718-25.597-62.718V160.98c0-44.8 0-84.48-32-115.199C337.62 21.461 295.383 12.5 262.102 12.5c-70.399 0-131.84 28.16-147.2 107.52-1.28 8.96 5.118 12.8 10.239 14.082l65.28 7.68c6.4 0 10.24-6.4 11.52-12.802 5.121-26.878 26.88-39.68 52.48-39.68 14.079 0 40.962 7.68 40.962 38.403v38.399c-40.961 0-84.48 0-120.32 15.359-42.243 17.922-71.68 55.039-71.68 110.082 0 70.398 43.52 104.957 99.84 104.957 47.359 0 75.52-11.52 112.64-48.637 11.52 17.918 16.637 28.157 38.399 47.36 5.12 2.558 11.52 2.558 15.36-1.282 12.8-11.52 37.12-33.28 51.198-44.8 6.403-5.121 5.121-12.801 0-19.2zm-126.718-98.558c0 25.597-1.282 88.32-64 88.32-38.399 0-38.399-38.402-38.399-38.402 0-57.598 53.758-64 102.399-64zm0 0" fill="#fff" data-color="2"/></svg>',
            },
        ],
    },
    {
        name: 'Watching',
        background: 'red',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 24 24"><path d="M5 6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5zm5 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10z"></path></svg>',
        action: function() { setFocus(1) },
        apps: videoApps,
    },
    {
        name: 'Reading',
        background: 'orange',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 24 24"><path d="M5 6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5zm5 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10z"></path></svg>',
        action: function() { setFocus(2) },
        apps: bookApps,
    },
    {
        name: courseData[0].name,
        background: courseData[0].color,
        icon: courseData[0].icon,
        action: function() { setFocus(3) },
        apps: ebecApps,
    },
    {
        name: courseData[1].name,
        background: courseData[1].color,
        icon: courseData[1].icon,
        action: function() { setFocus(4) },
        apps: eceApps,
    },
    {
        name: courseData[2].name,
        background: courseData[2].color,
        icon: courseData[2].icon,
        action: function() { setFocus(5) },
        apps: engrApps,
    },
    {
        name: courseData[3].name,
        background: courseData[3].color,
        icon: courseData[3].icon,
        action: function() { setFocus(6) },
        apps: ie335Apps,
    },
    {
        name: courseData[4].name,
        background: courseData[4].color,
        icon: courseData[4].icon,
        action: function() { setFocus(7) },
        apps: ie386Apps,
    },
    {
        name: courseData[5].name,
        background: courseData[5].color,
        icon: courseData[5].icon,
        action: function() { setFocus(8) },
        apps: nuclApps,
    },
    {
        name: courseData[6].name,
        background: courseData[6].color,
        icon: courseData[6].icon,
        action: function() { setFocus(9) },
        apps: spanApps,
    },
]

const focusMenuData = [
    [
        focusData[0],
    ],
    [
        focusData[1],
        focusData[2],
    ],
    [
        focusData[3],
        focusData[4],
        focusData[5],
        focusData[6],
        focusData[7],
        focusData[8],
        focusData[9],
    ],
]

function focusMenuModal() {
    let modal = document.createElement('a')
    modal.id = 'focus-modal'
    modal.classList = 'focus-modal clickable'
    // modal.onclick = function() { focusMenuHide();console.log('nice') }
    return modal
}

function focusMenuElement() {
    let modal = document.createElement('div')
    modal.id = 'focus-modal'
    modal.classList.add('hide')

    let close = document.createElement('a')
    close.classList = 'close'
    close.onclick = function() { focusMenuHide() }

    let focusMenu = document.createElement('div')
    focusMenu.id = 'focus-menu'
    focusMenu.classList = 'layer-1'
    focusMenu.classList.add('hide')
    focusMenu.onclick = function() { focusMenuToggle() }

    for (let i = 0; i < focusData.length; i++) {
        let item = document.createElement('a')
        item.classList = 'focus-item clickable-text'
        item.onclick = function() { setFocus(i) }

        let text = document.createElement('p')
        text.innerHTML = focusData[i].name
        item.append(text)

        item.append(growElement())

        let icon = document.createElement('div')
        icon.classList = 'icon'
        icon.innerHTML = focusData[i].icon
        item.append(icon)

        focusMenu.append(item)

        if (i < focusData.length - 1) {
            focusMenu.append(hlineElement())
        }
    }

    modal.append(close)
    modal.append(focusMenu)

    return modal
}

function currentFocus() {
    if (getCookie('focus')) {
        n = parseInt(getCookie('focus'))
        return focusData[n]
    } else {
        return focusData[0]
    }
}

function setFocus(n) {
    setCookie('focus',n,1)
    location.reload()
}

function focusMenuToggle() {
    let modal = document.getElementById('focus-modal')
    modal.classList.toggle('hide')
}

function focusMenuHide() {
    let modal = document.getElementById('focus-modal')
    modal.classList.add('hide')
}



function contextModalShow(data,e) {
    // data = focusData
    // console.log(e)

    x = e.pageX
    y = e.pageY

    let menu = document.getElementById('context-menu')

    // console.log(menu.style.getPropertyValue('top'))

    removeAllChildNodes(menu)

    for (let i = 0; i < data.length; i++) {
        let subtray = document.createElement('div')
        subtray.classList = 'subtray'

        for (let j = 0; j < data[i].length; j++) {
            let itemData = data[i][j]

            let item = document.createElement('a')
            item.classList = 'item clickable-text'
            item.onclick = function() { itemData.action() }
            
            let icon = document.createElement('div')
            icon.classList = 'icon'
            icon.innerHTML = itemData.icon
            item.append(icon)
    
            item.append(spacerElement(8))
    
            let text = document.createElement('p')
            text.innerHTML = itemData.name
            item.append(text)
    
            item.append(growElement())
    
            subtray.append(item)

            if (i < data[i].length - 1) {
                subtray.append(spacerElement(4))
                // menu.append(hlineElement())
            }
        }

        menu.append(subtray)

        if (i < data.length - 1) {
            menu.append(hlineElement())
        }


    }
    
    menu.style.removeProperty('bottom')
    menu.style.removeProperty('right')

    menu.style.setProperty('top',`${y}px`)
    menu.style.setProperty('left',`${x}px`)





    let menuWidth = menu.offsetWidth
    let menuHeight = menu.offsetHeight

    let windowWidth = window.innerWidth
    let windowHeight = window.innerHeight

    let overflowY = (windowHeight - (y + menuHeight)) < 0
    let overflowX = (windowWidth - (x + menuWidth)) < 0

    if (overflowY) {
        menu.style.removeProperty('top')
        menu.style.setProperty('bottom','10px')
    }
    if (overflowX) {
        menu.style.removeProperty('left')
        menu.style.setProperty('right','10px')
    }

    let container = document.getElementById('context-modal')
    container.classList = 'show'

}
function contextModalHide() {
    let container = document.getElementById('context-modal')
    container.classList = 'hide'
}