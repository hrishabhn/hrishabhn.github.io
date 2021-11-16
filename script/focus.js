const focusData = [
    {
        name: 'Chilling',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 2 20 20"><path d="M12 3a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zm0 11c-3.004 0-9 1.508-9 4.5V20c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-1.5c0-2.992-5.996-4.5-9-4.5z"/></svg>',
    },
    {
        name: 'Watching',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 24 24"><path d="M5 6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5zm5 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10z"></path></svg>',
    },
    {
        name: 'Reading',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 4 24 24"><path d="M5 6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5zm5 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10z"></path></svg>',
    },
    {
        name: courseData[0].name,
        icon: courseData[0].icon,
    },
    {
        name: courseData[1].name,
        icon: courseData[1].icon,
    },
    {
        name: courseData[2].name,
        icon: courseData[2].icon,
    },
    {
        name: courseData[3].name,
        icon: courseData[3].icon,
    },
    {
        name: courseData[4].name,
        icon: courseData[4].icon,
    },
    {
        name: courseData[5].name,
        icon: courseData[5].icon,
    },
    {
        name: courseData[6].name,
        icon: courseData[6].icon,
    },
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